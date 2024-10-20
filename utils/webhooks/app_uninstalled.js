// To create a new webhook, create a new `.js` folder in /utils/webhooks/ and use the project snippet
// `createwebhook` to generate webhook boilerplate

/**
 * @typedef { import("@/_developer/types/2024-10/webhooks.js").APP_UNINSTALLED} AppUninstalled
 */

import prisma from "../prisma.js";

const appUninstallHandler = async (
  topic,
  shop,
  webhookRequestBody,
  webhookId,
  apiVersion
) => {
  try {
    /** @type {AppUninstalled} */
    const webhookBody = JSON.parse(webhookRequestBody);

    await prisma.session.deleteMany({ where: { shop } });
    await prisma.stores.upsert({
      where: { shop: shop },
      update: { isActive: false },
      create: { shop: shop, isActive: false },
    });
  } catch (e) {
    console.error(e);
  }
};

export default appUninstallHandler;
