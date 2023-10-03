import crypto from "crypto";

/**
 * Middleware to verify the request's signature coming through Shopify's proxy.
 *
 * @param {import('next').NextApiRequest} req - The incoming request object.
 * @param {import('next').NextApiResponse} res - The response object.
 * @param {Function} next - The next middleware function to execute.
 */
const verifyProxy = async (req, res, next) => {
  const { signature } = req.query;

  const queryURI = encodeQueryData(req.query)
    .replace("/?", "")
    .replace(/&signature=[^&]*/, "")
    .split("&")
    .map((x) => decodeURIComponent(x))
    .sort()
    .join("");

  const calculatedSignature = crypto
    .createHmac("sha256", process.env.SHOPIFY_API_SECRET)
    .update(queryURI, "utf-8")
    .digest("hex");

  if (calculatedSignature === signature) {
    req.user_shop = req.query.shop; //myshopify domain
    await next();
  } else {
    return res.status(401).send({
      success: false,
      message: "Signature verification failed",
    });
  }
};

/**
 * Encodes the provided data into a URL query string format.
 *
 * @param {Record<string, any>} data - The data to be encoded.
 * @returns {string} The encoded query string.
 */
function encodeQueryData(data) {
  const queryString = [];
  for (let d in data) queryString.push(d + "=" + encodeURIComponent(data[d]));
  return queryString.join("&");
}

export default verifyProxy;
