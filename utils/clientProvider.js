/**
 * Handles session management for Shopify integration.
 * @module clientProvider
 */

import sessionHandler from "./sessionHandler.js";
import shopify from "./shopify.js";

/**
 * Fetches the offline session associated with a shop.
 * @async
 * @param {string} shop - The shop's domain.
 */
const fetchOfflineSession = async (shop) => {
  const sessionID = shopify.session.getOfflineId(shop);
  const session = await sessionHandler.loadSession(sessionID);
  return session;
};

/**
 * Provides methods to create Shopify REST clients for offline access.
 * @namespace offline
 */
const offline = {
  /**
   * Creates a Shopify GraphQL client for offline access.
   * @async
   * @param {Object} params - The request and response objects.
   * @param {string} params.shop - The shop's domain
   */
  graphqlClient: async ({ shop }) => {
    const session = await fetchOfflineSession(shop);
    const client = new shopify.clients.Graphql({ session });
    return { client, shop, session };
  },
  /**
   * Creates a Shopify REST client for offline access.
   * @async
   * @param {Object} params - The parameters.
   * @param {string} params.shop - The shop's domain.
   */
  restClient: async ({ shop }) => {
    const session = await fetchOfflineSession(shop);
    const client = new shopify.clients.Rest({
      session,
      //@ts-ignore
      apiVersion: process.env.SHOPIFY_API_VERSION,
    });
    return { client, shop, session };
  },
};

/**
 * Fetches the online session associated with a request.
 * @async
 * @param {Object} params - The request and response objects.
 * @param {import('next').NextApiRequest} params.req - The Next.js API request object
 * @param {import('next').NextApiResponse} params.res - The Next.js API response object
 */
const fetchOnlineSession = async ({ req, res }) => {
  const sessionID = await shopify.session.getCurrentId({
    isOnline: true,
    rawRequest: req,
    rawResponse: res,
  });
  const session = await sessionHandler.loadSession(sessionID);
  return session;
};

/**
 * Provides methods to create Shopify clients for online access.
 * @namespace online
 */
const online = {
  /**
   * Creates a Shopify GraphQL client for online access.
   * @async
   * @param {Object} params - The request and response objects.
   * @param {import('next').NextApiRequest} params.req - The Next.js API request object
   * @param {import('next').NextApiResponse} params.res - The Next.js API response object
   */
  graphqlClient: async ({ req, res }) => {
    const session = await fetchOnlineSession({ req, res });
    const client = new shopify.clients.Graphql({ session });
    const { shop } = session;
    return { client, shop, session };
  },
  /**
   * Creates a Shopify REST client for online access.
   * @async
   * @param {Object} params - The request and response objects.
   * @param {import('next').NextApiRequest} params.req - The Next.js API request object
   * @param {import('next').NextApiResponse} params.res - The Next.js API response object
   */
  restClient: async ({ req, res }) => {
    const session = await fetchOnlineSession({ req, res });
    const { shop } = session;
    const client = new shopify.clients.Rest({
      session,
      //@ts-ignore
      apiVersion: process.env.SHOPIFY_API_VERSION,
    });
    return { client, shop, session };
  },
};

/**
 * Provides Shopify client providers for both online and offline access.
 * @namespace clientProvider
 */
const clientProvider = {
  offline,
  online,
};

export default clientProvider;
