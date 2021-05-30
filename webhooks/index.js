/**
 * Combine all routers here
 *
 * Webhook subscription topics can be found here [Accessed: May 19, 2021]
 * https://shopify.dev/docs/admin-api/graphql/reference/events/webhooksubscriptiontopic
 */

const combineRouters = require("koa-combine-routers");

const { appUninstallRoute } = require("./app_uninstalled.js");
const { subscriptionsUpdateRoute } = require("./app_subscriptions_update.js");

const webhookRouters = combineRouters(
  appUninstallRoute,
  subscriptionsUpdateRoute
); //add routers seaprated by a `,`

module.exports = webhookRouters;
