import shopify from "@/utils/shopify.js";

/**
 * @param {import('next').NextApiRequest} req - The incoming request object.
 * @param {import('next').NextApiResponse} res - The response object.
 * @param {import('next').NextApiHandler} next - Callback to pass control to the next middleware function in the Next.js API route.
 */
const verifyProxy = async (req, res, next) => {
  const isValid = await shopify.utils
    .validateHmac(req.query, { signator: "appProxy" })
    .catch(() => false);

  if (isValid) {
    req.user_shop = req.query.shop; //myshopify domain
    return next();
  }

  return res
    .status(401)
    .send({ success: false, message: "Verification failed" });
};

export default verifyProxy;
