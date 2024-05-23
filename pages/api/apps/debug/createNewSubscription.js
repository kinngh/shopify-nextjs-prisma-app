import clientProvider from "@/utils/clientProvider";
import withMiddleware from "@/utils/middleware/withMiddleware";

/**
 * @param {import("next").NextApiRequest} req - The HTTP request object.
 * @param {import("next").NextApiResponse} res - The HTTP response object.
 */
const handler = async (req, res) => {
  //false for offline session, true for online session
  const { client } = await clientProvider.online.graphqlClient({
    req,
    res,
  });
  const returnUrl = `${process.env.SHOPIFY_APP_URL}/?shop=${req.user_shop}`;

  const planName = "$10.25 plan";
  const planPrice = 10.25; //Always a decimal

  const response = await client.request(
    `mutation CreateSubscription{
    appSubscriptionCreate(
      name: "${planName}"
      returnUrl: "${returnUrl}"
      test: true
      lineItems: [
        {
          plan: {
            appRecurringPricingDetails: {
              price: { amount: ${planPrice}, currencyCode: USD }
            }
          }
        }
      ]
    ) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
        status
      }
    }
  }
`
  );

  if (response.data.appSubscriptionCreate.userErrors.length > 0) {
    console.log(
      `--> Error subscribing ${req.user_shop} to plan:`,
      response.data.appSubscriptionCreate.userErrors
    );
    res.status(400).send({ error: "An error occured." });
    return;
  }

  res.status(200).send({
    confirmationUrl: `${response.data.appSubscriptionCreate.confirmationUrl}`,
  });
  return;
};

export default withMiddleware("verifyRequest")(handler);
