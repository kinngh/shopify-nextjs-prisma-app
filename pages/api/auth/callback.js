import prisma from "@/utils/prisma";
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

    const host = req.query.host;
    const { shop } = session;

    await prisma.stores.upsert({
      where: { shop: shop },
      update: { isActive: true },
      create: { shop: shop, isActive: true },
    });

    // Redirect to app with shop parameter upon auth
    res.redirect(`/?shop=${shop}&host=${host}`);
  } catch (e) {
    console.error("---> An error occured at /auth/callback", e);
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
