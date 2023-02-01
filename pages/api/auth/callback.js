import prisma from "@/utils/prisma";
import sessionHandler from "@/utils/sessionHandler.js";
import shopify from "@/utils/shopify.js";

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

    await prisma.active_stores.upsert({
      where: { shop: shop },
      update: { isActive: true },
      create: { shop: shop, isActive: true },
    });

    // Redirect to app with shop parameter upon auth
    res.redirect(`/?shop=${shop}&host=${host}`);
  } catch (e) {
    const shop = req.query.shop;
    await prisma.active_stores.upsert({
      where: { shop: shop },
      update: { isActive: false },
      create: { shop: shop, isActive: false },
    });

    console.error("---> An error occured at /auth/callback", e);
    res.status(403).send({ message: "It do not be working" });
  }
};

export default handler;
