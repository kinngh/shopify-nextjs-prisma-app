# OAuth to Managed Installation

Shopify introduced `Shopify Managed Installation` to get rid of screen flickering during auth, unnecessary auth redirects while fetching online sessions and other misc issues. To oversimplify, you pass the access tokens to Shopify and get Session tokens in return like a regular fetch and save it in your database. Here's a rundown of what's changed:

1. Changes in Auth

The older way of doing auth is still supported from Shopify but for embedded apps in this repo, it's gone and so are the files. I've completely removed the older strait to run auth.

- `pages/api/auth/index.js`: Removed.
- `pages/api/auth/token.js`: Removed.
- `pages/api/auth/callback.js`: Removed.

2. Updates to `isShopAvailable` function

`pages/index.jsx` now calls a new function, `isInitialLoad` instead of `isShopAvailable`. The new strait means on the first load we get `id_token` as a query param that is exchanged for online and offline session tokens. `isInitialLoad` checks if these params exist, exchanges them for online and offline tokens and saves them in the db. Note we do not await the `sessionHandler.storeSession()` function here because that's eating up time on initial load and we don't want the first time to take longer than ~3 seconds.

A new check also happens here, `isFreshInstall`. Since the database structure is kept the same to ensure smooth transition to the new auth, we can now check if the install was a fresh one. If the store doesn't exist in the `store` model, it's a new install, but if it does have a `Bool` value, that means it's either already installed or is a reinstall. While I've merged these in an if condition, you can break them apart and run your own checks if required.

```javascript
if (!isFreshInstall || isFreshInstall?.isActive === false) {
  // !isFreshInstall -> New Install
  // isFreshInstall?.isActive === false -> Reinstall
  await freshInstall({ shop: onlineSession.shop });
}
```

This is now followed up with a `props` return since `getServerSideProps` has to return it.

3. Changes to `verifyRequest` and `ExitFrame`

The `verifyRequest()` middleware now works completely differently. First we check for `authorization` headers in each `fetch()` since App Bridge CDN automatically adds headers to each `fetch`. Then a JWT validation is run to ensure the headers are valid, followed by getting the session id and rading from the database, check for expiry and fetch new tokens if the online tokens have expired. Then pass the session to use in subsequent routes as `req.user_session` and the middleware is done.

A great thing about this is `ExitFrame` doesn't exist anymore. If the tokens are invalid, we throw a `401` and if the tokens are expired, we fetch them and move on to the next set.

4. Quick auth URL

The quick auth URL has gotten an update. We've moved from `https://appurl.com/api/auth?shop=storename.myshopify.com` to `https://storename.myshopify.com/admin/oauth/install?client_id=SHOPIFY_API_KEY`, which now takes the merchant to the install screen.

5. Depricating `useFetch()` hook

The idea of `useFetch()` was to redirect towards `ExitFrame` if the tokens had expired or not found - this is not required anymore. All vanilla `fetch` requests work since AppBridge CDN adds in authorization headers in the background.

6. Thoughts

Managed installation is great. No flickering, no running through ExitFrame, it's 10/10 all around. The only problem is now you don't get a hit when someone comes over to the permissions screen and are only made aware of the store when the permissions are approved. The new `tomlWriter` was built so that you are still only relying on your `env` and that's writing your `shopify.app.toml` file to root (and `extension/` folder). It took a second to wrap my head around but once you get the hang of it, it's great.
