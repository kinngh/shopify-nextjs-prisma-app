# App Bridge CDN Migration Guide

Moving from App Bridge React to CDN is pretty straight forward and not as dauting of a task.

1. Uninstall `@shopify/app-bridge` and `@shopify/app-bridge-react` packages. This is being replaced by import AppBridge from Shopify's CDN in `pages/_document.js` file.
2. `<NavigationMenu />` is now `<ui-nav-menu>...</ui-nav-menu>` that takes a series of `<a>...</a>` or for Next.js specifically, `<Link>...</Link>` tags.
3. `AppBridgeProvider` is now just a check to see if the `shop` exists. We do this to stop the base URL of our app be accessible without a shop.
4. There's no need to use `useNavigate()` or `Redirect.app` anymore. Using `open()` works as expected. You can see examples of this sprinkled throughout the debug cards and exitframe.
5. Using the new Resource Picker can come as a bit of a challenge. A great way to use it is to encapsulate the resource picker in an async funtion and instead of returning values, update your state variables to account in for the change. I'll be adding in an example for this in the future.

## Misc upgrades

1. `useFetch` hook got an update to be more reliable. We're now passing different headers that don't rely on Shopify/AppBridge to handle, making it more reliable. Your use of `useFetch` hook doesn't change, just drop in the new `useFetch` hook and you're good to go.
2. `/exitframe/[...shop].js` has reliability changes. You might want to update the components in there for better clarity on reauthorization process.
3. Legacy Polaris elements are replaced with newer ones.
4. `verifyRequest` now checks for scope changes too. In dev mode, you might want to kill your dev server and restart for env to properly take effect, or you'll be stuck in an endless auth loop.
5. `pages/api/auth` have new changes. It's meant to be a drop in replacement so just replace your existing files with the new ones, and add in your changes.
6. Debug cards have been renamed and refreshed for better clarity and examples.
