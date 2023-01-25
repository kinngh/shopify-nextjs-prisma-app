import { Session } from "@shopify/shopify-api";
import cryption from "./cryption.js";
import prisma from "./prisma.js";

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

const deleteSession = async (id) => {
  await prisma.session.deleteMany({ where: { id } });

  return true;
};

const sessionHandler = { storeSession, loadSession, deleteSession };

export default sessionHandler;
