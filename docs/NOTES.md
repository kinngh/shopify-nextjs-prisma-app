# Notes

## APIs

- For App Proxy APIs, use `export default withMiddleware("verifyProxy")(handler)` and for Apps routes (the regular backend), use `export default withMiddleware("verifyRequest")(handler);`.
- Example implementations are available in `pages/api/proxy_route/json.js` and `pages/api/apps/index.js`
- Webhooks, including GDPR, authenticate in the shared webhook route with `shopify.webhooks.validate`. Their callbacks do not use request middleware or require an installed shop session.

## Webhooks

- Processing webhooks has changed a bit, if you're coming from the Mongo repo available [here](https://github.com/kinngh/shopify-node-express-mongodb-app).
- To add your webhooks, head over to `utils/shopify.js` and at the bottom add all your webhooks and handlers.
- The three required GDPR callbacks live in `utils/webhooks/gdpr/`, using the existing `(topic, shop, webhookRequestBody, webhookId, apiVersion)` signature. Their imports and dispatch cases are fixed in the shared route, outside its generated sections. They do not need entries in `shopify.user.webhooks`.
- GDPR URLs are declared directly under `[webhooks.privacy_compliance]`. See the [GDPR migration](./migration/managed-webhooks.md#gdpr-webhooks) for the changed URLs.
- I recommend offloading webhooks handling (except `APP_UNINSTALLED`) to a different service like Google PubSub, AWS EventBridge or Cloudflare Workers so if you're building at scale, you can handle the insane amounts of webhooks that you could be processing, during times like Black Friday when your app is put to test.

## Next.js

- If you're unsure about what gets shipped to browser, check out [Next.js Code Elimination Tool](https://next-code-elimination.vercel.app)
