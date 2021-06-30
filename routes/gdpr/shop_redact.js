/*
Payload
 {
  shop_id: 954889,
  shop_domain: "snowdevil.myshopify.com",
};
*/

const Router = require("koa-router");
const shopRedact = new Router();

shopRedact.post("/app/gdpr/shopRedact", async (ctx) => {
  console.log(ctx.request.body);
});

module.exports = shopRedact;
