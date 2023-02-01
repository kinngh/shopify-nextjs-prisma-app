import withMiddleware from "@/utils/middleware/withMiddleware.js";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(100).send("Must be POST");
  }
  const { body } = req;
  const shop = req.body.shop_domain;
  console.log("gdpr/customers_data_request", body, shop);
};

export default withMiddleware("verifyHmac")(handler);
