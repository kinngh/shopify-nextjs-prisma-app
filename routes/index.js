/**
 * Combine all routers here
 */

const combineRouters = require("koa-combine-routers");

const shopRedact = require("./gdpr/shop_redact.js");
const customersRedact = require("./gdpr/customers_redact.js");
const customersDataRequest = require("./gdpr/customers_data_request.js");

const userRoutes = combineRouters(
  shopRedact,
  customersRedact,
  customersDataRequest
); //add routers seaprated by a `,`

module.exports = userRoutes;
