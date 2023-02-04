// If you have the recommended extension installed, create a new page and type `createwebhook` to generate webhook boilerplate

import prisma from "@/utils/prisma.js";

const appUninstallHandler = async (topic, shop, webhookRequestBody) => {
  try {
    const webhookBody = JSON.parse(webhookRequestBody);
    await prisma.session.deleteMany({ where: { shop } });
    await prisma.active_stores.upsert({
      where: { shop: shop },
      update: { isActive: false },
      create: { shop: shop, isActive: false },
    });
  } catch (e) {
    console.log(e);
  }
};

export default appUninstallHandler;
