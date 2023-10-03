import withMiddleware from "@/utils/middleware/withMiddleware.js";

/**
 * @param {import("next").NextApiRequest} req - The HTTP request object.
 * @param {import("next").NextApiResponse} res - The HTTP response object.
 */
const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(401).send("Must be POST");
  }
  const { body } = req;
  const shop = req.body.shop_domain;
  console.log("gdpr/shop_redact", body, shop);
};

export default withMiddleware("verifyHmac")(handler);
