/**
 *
 * Combine all webhooks here
 *
 */

const { appUninstallWebhook } = require("./app_uninstalled.js");

const webhooksRegistrar = (shop, accessToken) => {
  appUninstallWebhook(shop, accessToken);
};

module.exports = webhooksRegistrar;
