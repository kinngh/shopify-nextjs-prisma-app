import clientProvider from "@/utils/clientProvider";
import withMiddleware from "@/utils/middleware/withMiddleware";

/**
 * @param {import("next").NextApiRequest} req - The HTTP request object.
 * @param {import("next").NextApiResponse} res - The HTTP response object.
 */
const handler = async (req, res) => {
  console.log("Hit the endpoint");

  const { client } = await clientProvider.offline.graphqlClient({
    shop: req.user_shop,
  });

  const response = await client.request(/* GraphQL */ `
    {
      appInstallation {
        activeSubscriptions {
          name
          status
          lineItems {
            plan {
              pricingDetails {
                ... on AppRecurringPricing {
                  __typename
                  price {
                    amount
                    currencyCode
                  }
                  interval
                }
              }
            }
          }
          test
        }
      }
    }
  `);

  res.status(200).send(response);
};

export default withMiddleware("verifyRequest")(handler);
