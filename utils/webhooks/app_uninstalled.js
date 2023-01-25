import prisma from "@/utils/prisma.js";

const appUninstallHandler = async (topic, shop, webhookRequestBody) => {
  console.log({ topic, shop, webhookRequestBody });
  try {
    await prisma.session.deleteMany({ where: { shop } });
    await prisma.active_stores.deleteMany({ where: { shop } });
  } catch (e) {
    console.log(e);
  }
};

export default appUninstallHandler;
