/*
Payload
{
  shop_id: 954889,
  shop_domain: "snowdevil.myshopify.com",
  orders_requested: [299938, 280263, 220458],
  customer: {
    id: 191167,
    email: "john@email.com",
    phone: "555-625-1199",
  },
  data_request: {
    id: 9999,
  },
};
*/

const Router = require("koa-router");
const customersDataRequest = new Router();

customersDataRequest.post("/app/gdpr/customers_data_request", async (ctx) => {
  console.log(ctx.request.body);
});

module.exports = customersDataRequest;
