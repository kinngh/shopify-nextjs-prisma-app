const Router = require("koa-router");
const templateRoute = new Router(); //Update route variable

templateRoute.post("/templateRoute", async (ctx) => {
  ctx.body = "It works";
});

module.exports = templateRoute;