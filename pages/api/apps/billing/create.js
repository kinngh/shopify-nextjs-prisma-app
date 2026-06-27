import clientProvider from "@/utils/clientProvider";
import withMiddleware from "@/utils/middleware/withMiddleware.js";

/**
 * @param {import("next").NextApiRequest} req - The HTTP request object.
 * @param {import("next").NextApiResponse} res - The HTTP response object.
 */
const handler = async (req, res) => {
  if (req.method !== "POST") {
    //GET, POST, PUT, DELETE
    console.log("Serve this only if the request method is POST");
    return res.status(405).send({ error: true });
  }

  try {
    console.log(req?.body);
    const writeToDbImmediately = await prisma.subscriptions.upsert({
      where: {
        shop: req?.user_shop,
      },
      update: {
        charge_id: req?.body?.charge_id,
        plan_handle: req?.body?.plan_handle,
      },
      create: {
        shop: req?.user_shop,
        charge_id: req?.body?.charge_id,
        plan_handle: req?.body?.plan_handle,
      },
    });

    const { client } = await clientProvider.online.graphqlClient({
      req,
      res,
    });

    const response = await client.request(/* GraphQL */ `
      {
        shop {
          id
        }
        appInstallation {
          app {
            id
          }
        }
      }
    `);

    const shopId = response?.data?.shop?.id;
    const appId = response?.data?.appInstallation?.app?.id;

    if (!shopId || !appId) {
      throw Error(`ShopId: ${shopId} or AppId: ${appId} is missing`);
    }

    //Call Partner API to confirm this is not a malicious charge
    const { client: partnerClient } =
      await clientProvider.partner.graphqlClient();

    const findSubscription = await partnerClient.request(
      /* GraphQL */ `
        query ActiveSubscription($appId: ID!, $shopId: ID!) {
          activeSubscription(appId: $appId, shopId: $shopId) {
            shop {
              id
              myshopifyDomain
            }
            billingPeriod
            cancelAtEndOfCycle
            trialEndsAt
            currentBillingCycle {
              startTime
              endTime
            }
            items {
              handle
              description
              price {
                __typename
                active
                currency
                ... on FlatRatePrice {
                  amount
                }
                ... on TieredPrice {
                  tiersMode
                  tiers {
                    upTo
                    amountPerUnit
                    amount
                  }
                }
              }
              discount {
                amount
                percentage
                originalDiscountCycles
                remainingDiscountCycles
                discountEndsAt
              }
              usage {
                quantity
                cost {
                  amount
                  currencyCode
                }
              }
            }
            pendingUpdate {
              billingPeriod
              items {
                handle
                price {
                  __typename
                  ... on FlatRatePrice {
                    amount
                  }
                }
              }
              legacySubscriptionId
            }
            legacySubscriptionId
          }
        }
      `,
      {
        variables: {
          appId: appId,
          shopId: shopId,
        },
      }
    );

    console.dir(findSubscription, { depth: null });

    const confirmed =
      findSubscription?.data?.activeSubscription?.items?.some(
        ({ handle, price }) =>
          handle === req?.body?.plan_handle &&
          price?.__typename === "FlatRatePrice" &&
          price.active === true
      ) ?? false;

    //Update status in db
    const updateStatus = await prisma.subscriptions.update({
      where: {
        charge_id: req?.body?.charge_id,
      },
      data: {
        status: confirmed ? "ACTIVE" : "OTHER",
      },
    });

    return res.status(200).send({ text: "Success!" });
  } catch (e) {
    console.error("---> An error occured at /api/apps/billing/create", e);
    return res.status(403).send({ error: true });
  }
};

export default withMiddleware("verifyRequest")(handler);
