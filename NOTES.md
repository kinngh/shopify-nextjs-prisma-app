# Notes WIP

## APIs

- All your APIs need to use middlewares. For App Proxy, it's `export default withMiddleware("verifyProxy")(handler)` and for Apps route (the regular backend) it's `export default withMiddleware("verifyRequest")(handler);`.
- Example implementations are available in `pages/api/proxy_route/json.js` and `pages/api/apps/index.js`
- If you don't use the middlewares your app will be rejected and it's insecure to run APIs without context.

## Webhooks

- I wouldn't recommend processing webhooks from a Next.js/Vercel environment unless it's essential topics like `APP_UNINSTALLED`. Instead, offloading them to a platform like Cloudflare Workers _should_ technically be cheaper. An implementation for it will be available once I'm happy with it, or I forget to update this side of the documentation.
