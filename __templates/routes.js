/**
 * Use this as a template for creating new routes
 *
 * Routes go in routes/
 * Export and add the route to routes/index.js
 *
 *
 *
 * Update the following:
 *
 * route
 */

const Router = require("koa-router");
const route = new Router();

route.post("/path", async (ctx) => {
  ctx.body = "It works";
});

module.exports = route;
