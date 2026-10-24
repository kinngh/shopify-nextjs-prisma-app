# Managed Webhooks

We (finally) have the ability to decide what webhooks we want to recieve and what to exclude. This has some great implications, the major one being less compute resources being used so your servers cost less.

## Migration

### Files

While all of this is going in a single commit, here's the entire log on what's changed and the reasoning behind it:

- `isInitialLoad.js`
  We no longer need the `webhookRegistrar` function to register webhooks. So now that we're not making that GraphQL call to register webhooks, the initial load times of the app is much faster, helping with overall LCP.

- `[...webhookTopic].js`
  This is an autogenrated file now. It creates a `switch/case` statement to handle all your webhook landings. This won't contain a case if you're using an external HTTP server, AWS EventBridge or Google PubSub, since the `switch/case` only handles requests that come to this server.

- `shopify.js`
  Instead of using the `addHandlers()` function, we're now passing it as `shopify.user.webhooks`, which doesn't affect how the baseline works and this isn't that big of a change, but how you declare webhook topics have changed.

- `tomlWriter.js` and `webhookWriter.js`
  This is the secret sauce of parsing files and creating TOMLs and other configuration. I highly suggest to not mess with this.

### GraphQL to TOML

- Managed webhooks don't show up when you make the GQL call to get active webhooks, so the webhooks Debug card is now useless.
- If you're migrating your live project from `webhookRegistrar()` / GraphQL based webhooks to managed webhooks, you need to manually remove the older webhooks, or both the webhooks are going to fire twice.

## GDPR webhooks

GDPR now uses the same `pages/api/webhooks/[...webhookTopic].js` route and SDK signature validation as regular webhooks. The three callback files keep their names under `utils/webhooks/gdpr/`. The route always imports and dispatches them using `(topic, shop, webhookRequestBody, webhookId, apiVersion)`, outside the generated custom webhook sections. Do not add GDPR entries to `shopify.user.webhooks`; those entries remain for configurable webhooks.

| Previous URL                       | New URL                                     |
| ---------------------------------- | ------------------------------------------- |
| `/api/gdpr/customers_data_request` | `/api/webhooks/gdpr/customers_data_request` |
| `/api/gdpr/customers_redact`       | `/api/webhooks/gdpr/customers_redact`       |
| `/api/gdpr/shop_redact`            | `/api/webhooks/gdpr/shop_redact`            |

Move any custom data export/deletion logic into the matching callback. Parse `webhookRequestBody` there; signature validation happens first in the shared route. No installed session is required, including for `shop/redact` after uninstall. Let processing errors reach the route so it can return a failure for Shopify to retry.

The separate `pages/api/gdpr/` routes and `verifyWebhook` middleware are removed. The shared route disables Next.js body parsing, returns **401** for missing/invalid signatures, and has no application-defined body-size cap.

Run `npm run update:config` or `bun run update:config` to update the URLs in the existing `[webhooks.privacy_compliance]` configuration.

## Gotchas

- Filter `:` is actually `=` and not a fuzzy search, unlike the rest of theShopify Search API it's following
- Scope errors requires multiple pushes sometimes. Comment the webhooks in `shopify.js`, run `bun run update:config` to push your access scopes, uncomment the webhooks and run `bun run update:config` again and it'll work as expected.
