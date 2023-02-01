import {
  CookieNotFound,
  InvalidOAuthError,
  InvalidSession,
} from "@shopify/shopify-api";
import shopify from "@/utils/shopify.js";
import prisma from "@/utils/prisma.js";

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

      return res.redirect(`/exitframe?${queryParams}`);
    }

    return await shopify.auth.begin({
      shop: req.query.shop,
      callbackPath: `/api/auth/tokens`,
      isOnline: false,
      rawRequest: req,
      rawResponse: res,
    });
  } catch (e) {
    console.error(`---> Error at /auth`, e);
    const { shop } = req.query;
    switch (true) {
      case e instanceof InvalidOAuthError:
        res.status(400).send(e.message);
        break;
      case e instanceof CookieNotFound:
      case e instanceof InvalidSession:
        await prisma.active_store.update({
          where: {
            shop: shop,
          },
          data: {
            isActive: false,
          },
        });
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
