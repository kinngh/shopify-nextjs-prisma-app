import shopify from "@/utils/shopify.js";
import {
  BotActivityDetected,
  CookieNotFound,
  InvalidOAuthError,
  InvalidSession,
} from "@shopify/shopify-api";

/**
 * @param {import("next").NextApiRequest} req - The HTTP request object.
 * @param {import("next").NextApiResponse} res - The HTTP response object.
 */
const handler = async (req, res) => {
  try {
    if (!req.query.shop) {
      res.status(500);
      return res.send("No shop provided");
    }

    if (req.query.embedded === "1") {
      const shop = shopify.utils.sanitizeShop(req.query.shop);
      const queryParams = new URLSearchParams({
        ...req.query,
        shop,
        redirectUri: `/api/auth?shop=${shop}&host=${req.query.host}`,
      }).toString();

      return res.redirect(`/exitframe/${queryParams}`);
    }

    return await shopify.auth.begin({
      shop: req.query.shop,
      callbackPath: `/api/auth/tokens`,
      isOnline: true,
      rawRequest: req,
      rawResponse: res,
    });
  } catch (e) {
    console.error(`---> Error at /auth`, e);
    const { shop } = req.query;
    switch (true) {
      case e instanceof CookieNotFound:
      case e instanceof InvalidOAuthError:
      case e instanceof InvalidSession:
        res.redirect(`/api/auth?shop=${shop}`);
        break;
      case e instanceof BotActivityDetected:
        res.status(410).send(e.message);
        break;
      default:
        res.status(500).send(e.message);
        break;
    }
  }
};

export default handler;
