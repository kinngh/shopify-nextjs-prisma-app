import prisma from "@/utils/prisma.js";
import sessionHandler from "@/utils/sessionHandler.js";
import shopify from "@/utils/shopify.js";
import {
  CookieNotFound,
  InvalidOAuthError,
  InvalidSession,
} from "@shopify/shopify-api";

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
      isOnline: true,
      rawRequest: req,
      rawResponse: res,
    });
  } catch (e) {
    console.error(`---> Error at /auth/tokens`, e);

    const { shop } = req.query;
    await prisma.active_stores.upsert({
      where: { shop: shop },
      update: { isActive: false },
      create: { shop: shop, isActive: false },
    });

    switch (true) {
      case e instanceof CookieNotFound:
        res.redirect(`/exitframe/${shop}`);
        break;
      case e instanceof InvalidOAuthError:
      case e instanceof InvalidSession:
        res.redirect(`/api/auth?shop=${shop}`);
        break;
      default:
        res.status(500).send(e.message);
        break;
    }
  }
};

export default handler;
