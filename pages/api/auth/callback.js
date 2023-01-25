import sessionHandler from "@/utils/sessionHandler.js";
import shopify from "@/utils/shopify.js";

export default async function handler(req, res) {
  try {
    const callbackResponse = await shopify.auth.callback({
      rawRequest: req,
      rawResponse: res,
    });

    const { session } = callbackResponse;
    await sessionHandler.storeSession(session);

    const host = req.query.host;
    const { shop } = session;

    // Redirect to app with shop parameter upon auth
    res.redirect(`/?shop=${shop}&host=${host}`);
  } catch (e) {
    console.error("---> An error occured at /auth/callback", e);
    res.status(403).send({ message: "It do not be working" });
  }
}
