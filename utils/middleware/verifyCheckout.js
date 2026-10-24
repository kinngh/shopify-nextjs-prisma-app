import shopify from "@/utils/shopify.js";

/**
 *
 * @async
 * @function verifyCheckout
 * @param {import('next').NextApiRequest} req - The Next.js API request object, expected to have an 'authorization' header.
 * @param {import('next').NextApiResponse} res - The Next.js API response object, used to send back error messages if needed.
 * @param {import('next').NextApiHandler} next - Callback to pass control to the next middleware function in the Next.js API route.
 * @throws Will throw an error if the authorization header is missing or invalid, or if no shop is found in the payload.
 */
const verifyCheckout = async (req, res, next) => {
  //You'll first get a OPTIONS request before you get a GET/POST
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    const authHeader = req.headers["authorization"];
    const match =
      typeof authHeader === "string" && authHeader.match(/^Bearer (\S+)$/);
    if (!match) {
      throw Error("No valid bearer token found.");
    }

    const payload = await shopify.session.decodeSessionToken(match[1]);

    // The SDK validates these timestamps when present; require them as well.
    if (!Number.isFinite(payload.exp) || !Number.isFinite(payload.nbf)) {
      throw Error("Session token is missing required timestamps.");
    }

    const shop =
      typeof payload.dest === "string" &&
      shopify.utils.sanitizeShop(payload.dest.replace(/^https:\/\//, ""));
    if (!shop) {
      throw Error("No shop found, not a valid request");
    }

    req.user_shop = shop;

    await next();
    return;
  } catch {
    console.error("---> An error happened at verifyCheckout middleware.");
    return res.status(401).send({ error: "Unauthorized call" });
  }
};

export default verifyCheckout;
