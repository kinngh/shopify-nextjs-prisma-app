import { Session } from "@shopify/shopify-api";
import cryption from "./cryption.js";
import prisma from "./prisma.js";

/**
 * Stores the session data into the database.
 *
 * @param {Session} session - The Shopify session object.
 * @returns {Promise<boolean>} Returns true if the operation was successful.
 */
const storeSession = async (session) => {
  await prisma.session.upsert({
    where: { id: session.id },
    update: {
      content: cryption.encrypt(JSON.stringify(session)),
      shop: session.shop,
    },
    create: {
      id: session.id,
      content: cryption.encrypt(JSON.stringify(session)),
      shop: session.shop,
    },
  });

  return true;
};

/**
 * Loads the session data from the database.
 *
 * @param {string} id - The session ID.
 * @returns {Promise<Session|undefined>} Returns the Shopify session object or undefined if not found.
 */
const loadSession = async (id) => {
  const sessionResult = await prisma.session.findUnique({ where: { id } });

  if (sessionResult === null) {
    return undefined;
  }
  if (sessionResult.content.length > 0) {
    const sessionObj = JSON.parse(cryption.decrypt(sessionResult.content));
    return new Session(sessionObj);
  }
  return undefined;
};

/**
 * Deletes the session data from the database.
 *
 * @param {string} id - The session ID.
 * @returns {Promise<boolean>} Returns true if the operation was successful.
 */
const deleteSession = async (id) => {
  await prisma.session.deleteMany({ where: { id } });

  return true;
};

/**
 * Session handler object containing storeSession, loadSession, and deleteSession functions.
 */
const sessionHandler = { storeSession, loadSession, deleteSession };

export default sessionHandler;
