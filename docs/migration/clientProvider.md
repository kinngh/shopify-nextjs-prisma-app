# Client Provider

The `clientProvider` abstraction has gotten a makeover to simplify the API. Instead of exposting `graphqlClient` and `restClient` functions, it now has a namespace that contains both `online` and `offline` objects. Each object contains a `graphqlClient` and `restClient` function that can be used to create a client for the respective access mode.

## Usage

### Online Client

```javascript
import clientProvider from "@/utils/clientProvider";

const { client, shop, session } = await clientProvider.online.graphqlClient({
  req,
  res,
});

const { client, shop, session } = await clientProvider.online.restClient({
  req,
  res,
});
```

### Offline Client

```javascript
import clientProvider from "@/utils/clientProvider";

const { client, shop, session } = await clientProvider.offline.graphqlClient({
  shop: req.user_shop,
});

const { client, shop, session } = await clientProvider.offline.restClient({
  shop: req.user_shop,
});
```

## Steps

1. Head into `verifyRequest` and add in `req.user_shop = session.shop` after `req.user_session = session;`.
2. Update your `graphqlClient` and `restClient` calls to `clientProvider.online.graphqlClient` / `clientProvider.offline.graphqlClient` and `clientProvider.online.restClient` / `clientProvider.offline.restClient`
