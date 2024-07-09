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

## Gotchas

- Filter `:` is actually `=` and not a fuzzy search, unlike the rest of theShopify Search API it's following
- Scope errors requires multiple pushes sometimes. Comment the webhooks in `shopify.js`, run `bun run update:config` to push your access scopes, uncomment the webhooks and run `bun run update:config` again and it'll work as expected.
