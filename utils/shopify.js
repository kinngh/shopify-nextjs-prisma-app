import { LogSeverity, shopifyApi } from "@shopify/shopify-api";
import "@shopify/shopify-api/adapters/node";
import appUninstallHandler from "./webhooks/app_uninstalled.js";

const isDev = process.env.NODE_ENV === "development";

// Setup Shopify configuration
let shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  scopes: process.env.SHOPIFY_API_SCOPES,
  hostName: process.env.SHOPIFY_APP_URL.replace(/https:\/\//, ""),
  hostScheme: "https",
  apiVersion: process.env.SHOPIFY_API_VERSION,
  isEmbeddedApp: true,
  logger: { level: isDev ? LogSeverity.Info : LogSeverity.Error },
});

/*
  Template for adding new topics:
  ```
    {
      topics: ["",""] //Get this from `https://shopify.dev/docs/api/webhooks?reference=toml`
      url: "/api/webhooks/topic_name" //this can be AWS, PubSub or HTTP routes.
      callback: () //This HAS to be in utils/webhooks/ and created with the `createwebhook` snippet.
      filter: "" //Optional - filter what webhooks you recieve
      include_fields: ["",""] //Optional - decide what fields you want to recieve
    }
  ```
 */

//Add custom user properties to base shopify obj
shopify = {
  ...shopify,
  user: {
    /**
     * @type {Array<{
     *   topics: string[],
     *   url: string,
     *   callback: Function,
     *   filter?: string,
     *   include_fields?: string[]
     * }>}
     */
    webhooks: [
      {
        topics: ["app/uninstalled"],
        url: "/api/webhooks/app_uninstalled",
        callback: appUninstallHandler,
      },
    ],
  },
};

export default shopify;
