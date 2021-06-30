/*
Payload
{
  shop_id: 954889,
  shop_domain: "snowdevil.myshopify.com",
  customer: {
    id: 191167,
    email: "john@email.com",
    phone: "555-625-1199",
  },
  orders_to_redact: [299938, 280263, 220458],
};
*/

const Router = require("koa-router");
const customersRedact = new Router();

customersRedact.post("/app/gdpr/customers_redact", async (ctx) => {
  console.log(ctx.request.body);
});

module.exports = customersRedact;
