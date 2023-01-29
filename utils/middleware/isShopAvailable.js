import prisma from "../prisma";

const isShopAvailable = async (context) => {
  const shop = context.query.shop;

  if (shop) {
    const isShopAvailable = await prisma.active_stores.findUnique({
      where: { shop: shop },
    });

    if (!isShopAvailable || !isShopAvailable?.isActive) {
      return {
        redirect: {
          destination: `${process.env.SHOPIFY_APP_URL}/api/auth?shop=${shop}`,
          permanent: false,
        },
      };
    }

    return {
      props: {
        user_shop: context.query.shop,
      },
    };
  }
  return { props: { data: "ok" } }; //We HAVE to return something
};

export default isShopAvailable;
