import shopify from "@/utils/shopify.js";
import validateJWT from "../validateJWT.js";

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
    if (!authHeader) {
      throw Error("No authorization header found.");
    }

    const payload = validateJWT(authHeader.split(" ")[1]);

    let shop = shopify.utils.sanitizeShop(payload.dest.replace("https://", ""));
    if (!shop) {
      throw Error("No shop found, not a valid request");
    }

    req.user_shop = shop;

    await next();
    return;
  } catch (e) {
    console.error(
      `---> An error happened at verifyCheckout middleware: ${e.message}`
    );
    return res.status(401).send({ error: "Unauthorized call" });
  }
};

export default verifyCheckout;
