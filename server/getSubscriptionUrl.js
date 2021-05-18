const { default: Shopify } = require("@shopify/shopify-api");
const StoreDetailsModel = require("../models/StoreDetailsModel.js");

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

  //MARK:- Save charge ID to the database
  const result = await StoreDetailsModel.findOne({ shop });

  if (result === null) {
    await StoreDetailsModel.create({
      shop: shop,
      subscriptionChargeId:
        response.body.data.appSubscriptionCreate.appSubscription.id,
    });
  } else {
    await StoreDetailsModel.findOneAndUpdate(
      { shop },
      {
        subscriptionChargeId:
          response.body.data.appSubscriptionCreate.appSubscription.id,
      }
    );
  }

  return response.body.data.appSubscriptionCreate.confirmationUrl;
};

module.exports = getSubscriptionUrl;