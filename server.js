require("dotenv").config();
const Koa = require("koa");
const next = require("next");
const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const { verifyRequest } = require("@shopify/koa-shopify-auth");
const { default: Shopify, ApiVersion } = require("@shopify/shopify-api");
const Router = require("koa-router");

const getSubscriptionUrl = require("./server/getSubscriptionUrl");

const mongoose = require("mongoose");
const sessionStorage = require("./server/sessionStorage.js");
const SessionModel = require("./models/SessionModel.js");

const userRoutes = require("./routes");
const webhookRouters = require("./webhooks");
const { appUninstallWebhook } = require("./webhooks/app_uninstalled.js");
const {
  subscriptionsUpdateWebhook,
} = require("./webhooks/app_subscriptions_update.js");

//MARK:- MongoDB Init
const mongoUrl =
  process.env.MONGO_URL || "mongodb://localhost:27017/shopify-app";

mongoose.connect(
  mongoUrl,
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("--> Connected To Mongo")
);

//MARK:- Shopify Init
Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SHOPIFY_API_SCOPES.split(","),
  HOST_NAME: process.env.SHOPIFY_APP_URL.replace(/https:\/\//, ""),
  API_VERSION: ApiVersion.April21,
  IS_EMBEDDED_APP: true,
  SESSION_STORAGE: sessionStorage,
});

const port = parseInt(process.env.PORT, 10) || 8081;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

//MARK:- Koa Server
app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.keys = [Shopify.Context.API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      async afterAuth(ctx) {
        const { shop, scope, accessToken } = ctx.state.shopify;
        const { host } = ctx.query;

        //MARK:- Webhooks
        appUninstallWebhook(shop, accessToken);
        subscriptionsUpdateWebhook(shop, accessToken);

        const returnUrl = `https://${Shopify.Context.HOST_NAME}?host=${host}&shop=${shop}`;
        const subscriptionUrl = await getSubscriptionUrl(
          accessToken,
          shop,
          returnUrl
        );
        ctx.redirect(subscriptionUrl);
      },
    })
  );

  router.post(
    "/graphql",
    verifyRequest({ returnHeader: true }),
    async (ctx, next) => {
      await Shopify.Utils.graphqlProxy(ctx.req, ctx.res);
    }
  );

  const handleRequest = async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  };
  router.get("/", async (ctx) => {
    const shop = ctx.query.shop;
    const findShopCount = await SessionModel.countDocuments({ shop });

    if (findShopCount < 2) {
      await SessionModel.deleteMany({ shop });
      ctx.redirect(`/auth?shop=${shop}`);
    } else {
      await handleRequest(ctx);
    }
  });

  //MARK:- Routes and routers
  server.use(webhookRouters());
  server.use(userRoutes());

  router.get("(/_next/static/.*)", handleRequest);
  router.get("/_next/webpack-hmr", handleRequest);
  router.get("(.*)", verifyRequest(), handleRequest);

  server.use(router.allowedMethods());
  server.use(router.routes());

  server.listen(port, () => {
    console.log(`--> Ready on http://localhost:${port}`);
  });
});
