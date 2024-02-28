# Notes

## JSDocs

- If you come from a TypeScript background or you'd prefer some sort of type checking / safety in your code, head over to `jsconfig.json` and swap `checkJs` and `noEmit` options to be `true`. This will enable TS like typechecking in your project that relies on JSDocs, without the complexity of a full TypeScript setup and compiler time.

## APIs

- All your APIs need to use middlewares. For App Proxy, it's `export default withMiddleware("verifyProxy")(handler)` and for Apps route (the regular backend) it's `export default withMiddleware("verifyRequest")(handler);`.
- Example implementations are available in `pages/api/proxy_route/json.js` and `pages/api/apps/index.js`
- If you don't use the middlewares your app will be rejected and it's insecure to run APIs without context.

## Webhooks

- Processing webhooks has changed a bit, if you're coming from the Mongo repo available [here](https://github.com/kinngh/shopify-node-express-mongodb-app).
- To add your webhooks, head over to `utils/shopify.js` and at the bottom add all your webhooks and handlers.
- I recommend offloading webhooks handling (except `APP_UNINSTALLED`) to a different service like Google PubSub, AWS EventBridge or Cloudflare Workers so if you're building at scale, you can handle the insane amounts of webhooks that you could be processing, during times like Black Friday when your app is put to test.

## Next.js

- If you're unsure about what gets shipped to browser, check out [Next.js Code Elimination Tool](https://next-code-elimination.vercel.app)
