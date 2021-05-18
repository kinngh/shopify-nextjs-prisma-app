/**
 * Use this as a template for creating new webhooks
 * 
 * Webhook subscription topics can be found here [Accessed: May 19, 2021]
 * https://shopify.dev/docs/admin-api/graphql/reference/events/webhooksubscriptiontopic
 */
const {
  receiveWebhook,
  registerWebhook,
} = require("@shopify/koa-shopify-webhooks");
const webhook = receiveWebhook({ secret: process.env.SHOPIFY_API_SECRET }); //Middleware
const Router = require("koa-router");
const appUninstallRoute = new Router();
const { ApiVersion } = require("@shopify/shopify-api");
const SessionModel = require("../models/SessionModel.js");

const webhookUrl = "/webhooks/app/uninstall";

//
//MARK:- Webhook
//

const appUninstallWebhook = async (shop, accessToken) => {
  const registerAppUninstallWebhook = await registerWebhook({
    address: `${process.env.SHOPIFY_APP_URL}${webhookUrl}`,
    topic: "APP_UNINSTALLED",
    accessToken,
    shop,
    apiVersion: ApiVersion.April21,
  });

  if (registerAppUninstallWebhook.success) {
    console.log(`Successfully registered webhook! for ${shop}`);
  } else {
    console.log(
      "Failed to register webhook",
      registerAppUninstallWebhook.result
    );
  }
};

//
//MARK:- Route
//

appUninstallRoute.post(`${webhookUrl}`, webhook, async (ctx) => {
  const SessionModel = require("../models/SessionModel.js");
  const shop = ctx.state.webhook.payload.domain;
  await SessionModel.remove({ shop }, (error, data) => {
    error
      ? console.log("--> An error occured: ", error.message)
      : console.log("--> Successfully delete sessions data");
  });
});

module.exports = { appUninstallWebhook, appUninstallRoute };
