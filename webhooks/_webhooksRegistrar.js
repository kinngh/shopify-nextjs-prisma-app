/**
 *
 * Combine all webhooks here
 *
 */

const { appUninstallWebhook } = require("./app_uninstalled.js");
const { subscriptionsUpdateWebhook } = require("./app_subscriptions_update.js");

const webhooksRegistrar = (shop, accessToken) => {
  appUninstallWebhook(shop, accessToken);
  subscriptionsUpdateWebhook(shop, accessToken);
};

module.exports = webhooksRegistrar;
