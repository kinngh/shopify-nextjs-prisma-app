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
    console.log(webhookRegisterResponse);

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
      case e instanceof InvalidOAuthError:
        res.status(400).send(e.message);
        break;
      case e instanceof CookieNotFound:
      case e instanceof InvalidSession:
        await prisma.session.deleteMany({
          where: {
            shop: shop,
          },
        });
        res.redirect(`/api/auth?shop=${shop}`);
        break;
      default:
        res.status(500).send(e.message);
        break;
    }
  }
};

export default handler;
