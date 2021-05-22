/**
 * Combine all routers here
 */

const combineRouters = require("koa-combine-routers");

const templateRoute = require("./templateRoute.js");

const userRoutes = combineRouters(templateRoute); //add routers seaprated by a `,`

module.exports = userRoutes;
