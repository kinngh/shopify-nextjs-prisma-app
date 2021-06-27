/**
 *
 * Combine all webhook routers here
 *
 */

const combineRouters = require("koa-combine-routers");

const { appUninstallRoute } = require("./app_uninstalled.js");
const { subscriptionsUpdateRoute } = require("./app_subscriptions_update.js");

const webhookRouters = combineRouters(
  appUninstallRoute,
  subscriptionsUpdateRoute
); //add routers seaprated by a `,`

module.exports = webhookRouters;
