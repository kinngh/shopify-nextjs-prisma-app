const { default: Shopify } = require("@shopify/shopify-api");

const getSubscriptionUrl = async (accessToken, shop, returnUrl) => {
  const query = `mutation {
    appSubscriptionCreate(
      name: "Basic Plan"
      returnUrl: "${returnUrl}"
      test: true
      lineItems: [
        {
          plan: {
            appRecurringPricingDetails: {
              price: { amount: 10, currencyCode: USD }
            }
          }
        }
      ]
    )
    {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
      }
    }
  }`;

  const client = new Shopify.Clients.Graphql(shop, accessToken);
  const response = await client.query({
    data: query,
  });

  return response.body.data.appSubscriptionCreate.confirmationUrl;
};

module.exports = getSubscriptionUrl;
