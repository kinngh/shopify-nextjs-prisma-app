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

//Add custom user properties to base shopify obj
shopify = {
  ...shopify,
  user: {
    /**
     * @type {Array<{
     *   topics: import("@/_developer/types/webhookTopics.js").WebhookTopics["topic"],
     *   url: string,
     *   callback: Function,
     *   filter?: string,
     *   name?: string,
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
    /**
     * @type {Array<{
     *   topic: import("@/_developer/types/eventTopics.js").EventTopics["topic"],
     *   actions: import("@/_developer/types/eventTopics.js").EventTopics["actions"],
     *   uri: string,
     *   handle: string,
     *   callback: Function,
     *   triggers?: string[],
     *   query?: string,
     *   query_filter?: string
     * }>}
     */
    events: [
      // {
      //   topic: "Product",
      //   actions: ["create", "update", "delete"],
      //   uri: "/api/events/product",
      //   handle: "this-is-my-handle",
      //   callback: productEventHandler,
      //   triggers: [""],
      //   query: /* GraphQL */ `
      //     query your_query {
      //     }
      //   `,
      //   query_filter: "",
      // },
    ],

    /**
     * @type {import("@/_developer/types/declarative.js").DeclarativeMetafieldDefinition[]}
     */
    metafields: [],
  },
};

export default shopify;
