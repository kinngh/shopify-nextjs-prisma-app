import sessionHandler from "@/utils/sessionHandler.js";
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
    const callbackResponse = await shopify.auth.callback({
      rawRequest: req,
      rawResponse: res,
    });

    const { session } = callbackResponse;

    await sessionHandler.storeSession(session);

    const webhookRegisterResponse = await shopify.webhooks.register({
      session,
    });
    console.dir(webhookRegisterResponse, { depth: null });

    return await shopify.auth.begin({
      shop: session.shop,
      callbackPath: `/api/auth/callback`,
      isOnline: false,
      rawRequest: req,
      rawResponse: res,
    });
  } catch (e) {
    console.error(`---> Error at /auth/tokens`, e);

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
