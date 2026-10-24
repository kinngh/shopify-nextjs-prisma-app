import sessionHandler from "@/utils/sessionHandler.js";
import shopify from "@/utils/shopify.js";
import { RequestedTokenType, Session } from "@shopify/shopify-api";

/**
 *
 * @async
 * @function verifyRequest
 * @param {import('next').NextApiRequest} req - The Next.js API request object, expected to have an 'authorization' header.
 * @param {import('next').NextApiResponse} res - The Next.js API response object, used to send back error messages if needed.
 * @param {import('next').NextApiHandler} next - Callback to pass control to the next middleware function in the Next.js API route.
 * @throws Will throw an error if the authorization header is missing or invalid, or if no shop is found in the payload.
 */
const verifyRequest = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const match =
      typeof authHeader === "string" && authHeader.match(/^Bearer (\S+)$/);
    if (!match) {
      throw Error("No valid bearer token found.");
    }

    const sessionToken = match[1];
    const payload = await shopify.session.decodeSessionToken(sessionToken);

    if (!Number.isFinite(payload.exp) || !Number.isFinite(payload.nbf)) {
      throw Error("Session token is missing required timestamps.");
    }
    if (typeof payload.sub !== "string" || !payload.sub) {
      throw Error("Session token is missing the admin user.");
    }

    const shop =
      typeof payload.dest === "string" &&
      shopify.utils.sanitizeShop(payload.dest.replace(/^https:\/\//, ""));
    if (!shop) {
      throw Error("No shop found, not a valid request");
    }

    const sessionId = shopify.session.getJwtSessionId(shop, payload.sub);

    let session = await sessionHandler.loadSession(sessionId);
    if (!session) {
      session = await getSession({ shop, sessionToken });
    }

    if (
      new Date(session?.expires) > new Date() &&
      shopify.config.scopes.equals(session?.scope)
    ) {
    } else {
      session = await getSession({ shop, sessionToken });
    }

    //Add session and shop to the request object so any subsequent routes that use this middleware can access it
    req.user_session = session;
    req.user_shop = session.shop;

    await next();

    return;
  } catch {
    console.error("---> An error happened at verifyRequest middleware.");
    return res.status(401).send({ error: "Unauthorized call" });
  }
};

export default verifyRequest;

/**
 * Exchanges the verified session token for online and expiring offline sessions.
 *
 * @async
 * @function getSession
 * @param {Object} params - The function parameters.
 * @param {string} params.shop - The xxx.myshopify.com url of the requesting store.
 * @param {string} params.sessionToken - The verified Shopify session token.
 * @returns {Promise<Session>} The online session object
 */

async function getSession({ shop, sessionToken }) {
  try {
    const { session: onlineSession } = await shopify.auth.tokenExchange({
      sessionToken,
      shop,
      requestedTokenType: RequestedTokenType.OnlineAccessToken,
    });

    await sessionHandler.storeSession(onlineSession);

    const { session: offlineSession } = await shopify.auth.tokenExchange({
      sessionToken,
      shop,
      requestedTokenType: RequestedTokenType.OfflineAccessToken,
      expiring: true,
    });

    await sessionHandler.storeSession(offlineSession);

    return new Session(onlineSession);
  } catch {
    console.error("---> Error happened while pulling session from Shopify.");
  }
}
