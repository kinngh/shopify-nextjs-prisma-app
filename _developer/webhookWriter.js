import fs from "fs";
import path from "path";
import shopify from "../utils/shopify.js";

/**
 * @typedef {Object} ApiEndpoint
 * @property {string} topic - The API endpoint topic.
 * @property {string} graphql_topic - The topic's GraphQL topic name.
 */

//Ref: https://shopify.dev/docs/api/webhooks/2025-04?reference=toml
/**
 * @type {ApiEndpoint[]}
 */
const availableTopics = [
  { topic: "app/uninstalled", graphql_topic: "APP_UNINSTALLED" },
  { topic: "app/scopes_update", graphql_topic: "APP_SCOPES_UPDATE" },
  {
    topic: "app_purchases_one_time/update",
    graphql_topic: "APP_PURCHASES_ONE_TIME_UPDATE",
  },
  {
    topic: "app_subscriptions/approaching_capped_amount",
    graphql_topic: "APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT",
  },
  {
    topic: "app_subscriptions/update",
    graphql_topic: "APP_SUBSCRIPTIONS_UPDATE",
  },
  {
    topic: "audit_events/admin_api_activity",
    graphql_topic: "AUDIT_EVENTS_ADMIN_API_ACTIVITY",
  },
  { topic: "bulk_operations/finish", graphql_topic: "BULK_OPERATIONS_FINISH" },
  { topic: "carts/create", graphql_topic: "CARTS_CREATE" },
  { topic: "carts/update", graphql_topic: "CARTS_UPDATE" },
  { topic: "channels/delete", graphql_topic: "CHANNELS_DELETE" },
  {
    topic: "CHECKOUT_AND_ACCOUNTS_CONFIGURATIONS_UPDATE",
    graphql_topic: "CHECKOUT_AND_ACCOUNTS_CONFIGURATIONS_UPDATE",
  },
  { topic: "checkouts/create", graphql_topic: "CHECKOUTS_CREATE" },
  { topic: "checkouts/delete", graphql_topic: "CHECKOUTS_DELETE" },
  { topic: "checkouts/update", graphql_topic: "CHECKOUTS_UPDATE" },
  {
    topic: "collection_listings/add",
    graphql_topic: "COLLECTION_LISTINGS_ADD",
  },
  {
    topic: "collection_listings/remove",
    graphql_topic: "COLLECTION_LISTINGS_REMOVE",
  },
  {
    topic: "collection_listings/update",
    graphql_topic: "COLLECTION_LISTINGS_UPDATE",
  },
  {
    topic: "collection_publications/create",
    graphql_topic: "COLLECTION_PUBLICATIONS_CREATE",
  },
  {
    topic: "collection_publications/delete",
    graphql_topic: "COLLECTION_PUBLICATIONS_DELETE",
  },
  {
    topic: "collection_publications/update",
    graphql_topic: "COLLECTION_PUBLICATIONS_UPDATE",
  },
  { topic: "collections/create", graphql_topic: "COLLECTIONS_CREATE" },
  { topic: "collections/delete", graphql_topic: "COLLECTIONS_DELETE" },
  { topic: "collections/update", graphql_topic: "COLLECTIONS_UPDATE" },
  { topic: "companies/create", graphql_topic: "COMPANIES_CREATE" },
  { topic: "companies/delete", graphql_topic: "COMPANIES_DELETE" },
  { topic: "companies/update", graphql_topic: "COMPANIES_UPDATE" },
  {
    topic: "company_contact_roles/assign",
    graphql_topic: "COMPANY_CONTACT_ROLES_ASSIGN",
  },
  {
    topic: "company_contact_roles/revoke",
    graphql_topic: "COMPANY_CONTACT_ROLES_REVOKE",
  },
  {
    topic: "company_contacts/create",
    graphql_topic: "COMPANY_CONTACTS_CREATE",
  },
  {
    topic: "company_contacts/delete",
    graphql_topic: "COMPANY_CONTACTS_DELETE",
  },
  {
    topic: "company_contacts/update",
    graphql_topic: "COMPANY_CONTACTS_UPDATE",
  },
  {
    topic: "company_locations/create",
    graphql_topic: "COMPANY_LOCATIONS_CREATE",
  },
  {
    topic: "company_locations/delete",
    graphql_topic: "COMPANY_LOCATIONS_DELETE",
  },
  {
    topic: "company_locations/update",
    graphql_topic: "COMPANY_LOCATIONS_UPDATE",
  },
  {
    topic: "customer.joined_segment",
    graphql_topic: "CUSTOMER_JOINED_SEGMENT",
  },
  { topic: "customer.left_segment", graphql_topic: "CUSTOMER_LEFT_SEGMENT" },
  { topic: "customer.tags_added", graphql_topic: "CUSTOMER_TAGS_ADDED" },
  { topic: "customer.tags_removed", graphql_topic: "CUSTOMER_TAGS_REMOVED" },
  {
    topic: "customer_account_settings/update",
    graphql_topic: "CUSTOMER_ACCOUNT_SETTINGS_UPDATE",
  },
  { topic: "customer_groups/create", graphql_topic: "CUSTOMER_GROUPS_CREATE" },
  { topic: "customer_groups/delete", graphql_topic: "CUSTOMER_GROUPS_DELETE" },
  { topic: "customer_groups/update", graphql_topic: "CUSTOMER_GROUPS_UPDATE" },
  {
    topic: "customer_payment_methods/create",
    graphql_topic: "CUSTOMER_PAYMENT_METHODS_CREATE",
  },
  {
    topic: "customer_payment_methods/revoke",
    graphql_topic: "CUSTOMER_PAYMENT_METHODS_REVOKE",
  },
  {
    topic: "customer_payment_methods/update",
    graphql_topic: "CUSTOMER_PAYMENT_METHODS_UPDATE",
  },
  { topic: "customers/create", graphql_topic: "CUSTOMERS_CREATE" },
  { topic: "customers/data_request", graphql_topic: "CUSTOMERS_DATA_REQUEST" },
  { topic: "customers/delete", graphql_topic: "CUSTOMERS_DELETE" },
  { topic: "customers/disable", graphql_topic: "CUSTOMERS_DISABLE" },
  { topic: "customers/enable", graphql_topic: "CUSTOMERS_ENABLE" },
  { topic: "customers/merge", graphql_topic: "CUSTOMERS_MERGE" },
  {
    topic: "customers/purchasing_summary",
    graphql_topic: "CUSTOMERS_PURCHASING_SUMMARY",
  },
  { topic: "customers/redact", graphql_topic: "CUSTOMERS_REDACT" },
  { topic: "customers/update", graphql_topic: "CUSTOMERS_UPDATE" },
  {
    topic: "customers_email_marketing_consent/update",
    graphql_topic: "CUSTOMERS_EMAIL_MARKETING_CONSENT_UPDATE",
  },
  {
    topic: "delivery_promise_settings/update",
    graphql_topic: "DELIVERY_PROMISE_SETTINGS_UPDATE",
  },
  {
    topic: "customers_marketing_consent/update",
    graphql_topic: "CUSTOMERS_MARKETING_CONSENT_UPDATE",
  },
  { topic: "discounts/create", graphql_topic: "DISCOUNTS_CREATE" },
  { topic: "discounts/delete", graphql_topic: "DISCOUNTS_DELETE" },
  {
    topic: "discounts/redeemcode_added",
    graphql_topic: "DISCOUNTS_REDEEMCODE_ADDED",
  },
  {
    topic: "discounts/redeemcode_removed",
    graphql_topic: "DISCOUNTS_REDEEMCODE_REMOVED",
  },
  { topic: "discounts/update", graphql_topic: "DISCOUNTS_UPDATE" },
  { topic: "disputes/create", graphql_topic: "DISPUTES_CREATE" },
  { topic: "disputes/update", graphql_topic: "DISPUTES_UPDATE" },
  { topic: "domains/create", graphql_topic: "DOMAINS_CREATE" },
  { topic: "domains/destroy", graphql_topic: "DOMAINS_DESTROY" },
  { topic: "domains/update", graphql_topic: "DOMAINS_UPDATE" },
  { topic: "draft_orders/create", graphql_topic: "DRAFT_ORDERS_CREATE" },
  { topic: "draft_orders/delete", graphql_topic: "DRAFT_ORDERS_DELETE" },
  { topic: "draft_orders/update", graphql_topic: "DRAFT_ORDERS_UPDATE" },
  {
    topic: "finance_app_staff_member/delete",
    graphql_topic: "FINANCE_APP_STAFF_MEMBER_DELETE",
  },
  {
    topic: "finance_app_staff_member/grant",
    graphql_topic: "FINANCE_APP_STAFF_MEMBER_DELETE",
  },
  {
    topic: "finance_app_staff_member/revoke",
    graphql_topic: "FINANCE_APP_STAFF_MEMBER_DELETE",
  },
  {
    topic: "finance_app_staff_member/update",
    graphql_topic: "FINANCE_APP_STAFF_MEMBER_DELETE",
  },
  {
    topic: "finance_kyc_information/update",
    graphql_topic: "FINANCE_APP_STAFF_MEMBER_DELETE",
  },
  {
    topic: "fulfillment_events/create",
    graphql_topic: "FULFILLMENT_EVENTS_CREATE",
  },
  {
    topic: "fulfillment_events/delete",
    graphql_topic: "FULFILLMENT_EVENTS_DELETE",
  },
  {
    topic: "fulfillment_holds/added",
    graphql_topic: "FULFILLMENT_HOLDS_ADDED",
  },
  {
    topic: "fulfillment_events/released",
    graphql_topic: "FULFILLMENT_HOLDS_RELEASED",
  },
  {
    topic: "fulfillment_orders/cancellation_request_accepted",
    graphql_topic: "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_ACCEPTED",
  },
  {
    topic: "fulfillment_orders/cancellation_request_rejected",
    graphql_topic: "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_REJECTED",
  },
  {
    topic: "fulfillment_orders/cancellation_request_submitted",
    graphql_topic: "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED",
  },
  {
    topic: "fulfillment_orders/cancelled",
    graphql_topic: "FULFILLMENT_ORDERS_CANCELLED",
  },
  {
    topic: "fulfillment_orders/fulfillment_request_accepted",
    graphql_topic: "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_ACCEPTED",
  },
  {
    topic: "fulfillment_orders/fulfillment_request_rejected",
    graphql_topic: "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_REJECTED",
  },
  {
    topic: "fulfillment_orders/fulfillment_request_submitted",
    graphql_topic: "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED",
  },
  {
    topic: "fulfillment_orders/fulfillment_service_failed_to_complete",
    graphql_topic: "FULFILLMENT_ORDERS_FULFILLMENT_SERVICE_FAILED_TO_COMPLETE",
  },
  {
    topic: "fulfillment_orders/hold_released",
    graphql_topic: "FULFILLMENT_ORDERS_HOLD_RELEASED",
  },
  {
    topic: "fulfillment_orders/line_items_prepared_for_local_delivery",
    graphql_topic: "FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY",
  },
  {
    topic: "fulfillment_orders/line_items_prepared_for_pickup",
    graphql_topic: "FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP",
  },
  {
    topic: "fulfillment_orders/merged",
    graphql_topic: "FULFILLMENT_ORDERS_MERGED",
  },
  {
    topic: "fulfillment_orders/moved",
    graphql_topic: "FULFILLMENT_ORDERS_MOVED",
  },
  {
    topic: "fulfillment_orders/order_routing_complete",
    graphql_topic: "FULFILLMENT_ORDERS_ORDER_ROUTING_COMPLETE",
  },
  {
    topic: "fulfillment_orders/placed_on_hold",
    graphql_topic: "FULFILLMENT_ORDERS_PLACED_ON_HOLD",
  },
  {
    topic: "fulfillment_orders/rescheduled",
    graphql_topic: "FULFILLMENT_ORDERS_RESCHEDULED",
  },
  {
    topic: "fulfillment_orders/scheduled_fulfillment_order_ready",
    graphql_topic: "FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY",
  },
  {
    topic: "fulfillment_orders/split",
    graphql_topic: "FULFILLMENT_ORDERS_SPLIT",
  },
  { topic: "fulfillments/create", graphql_topic: "FULFILLMENTS_CREATE" },
  { topic: "fulfillments/update", graphql_topic: "FULFILLMENTS_UPDATE" },
  { topic: "inventory_items/create", graphql_topic: "INVENTORY_ITEMS_CREATE" },
  { topic: "inventory_items/delete", graphql_topic: "INVENTORY_ITEMS_DELETE" },
  { topic: "inventory_items/update", graphql_topic: "INVENTORY_ITEMS_UPDATE" },
  {
    topic: "inventory_levels/connect",
    graphql_topic: "INVENTORY_LEVELS_CONNECT",
  },
  {
    topic: "inventory_levels/disconnect",
    graphql_topic: "INVENTORY_LEVELS_DISCONNECT",
  },
  {
    topic: "inventory_levels/update",
    graphql_topic: "INVENTORY_LEVELS_UPDATE",
  },
  { topic: "locales/create", graphql_topic: "LOCALES_CREATE" },
  { topic: "locales/update", graphql_topic: "LOCALES_UPDATE" },
  { topic: "locations/activate", graphql_topic: "LOCATIONS_ACTIVATE" },
  { topic: "locations/create", graphql_topic: "LOCATIONS_CREATE" },
  { topic: "locations/deactivate", graphql_topic: "LOCATIONS_DEACTIVATE" },
  { topic: "locations/delete", graphql_topic: "LOCATIONS_DELETE" },
  { topic: "locations/update", graphql_topic: "LOCATIONS_UPDATE" },
  { topic: "markets/create", graphql_topic: "MARKETS_CREATE" },
  { topic: "markets/delete", graphql_topic: "MARKETS_DELETE" },
  { topic: "markets/update", graphql_topic: "MARKETS_UPDATE" },
  {
    topic: "metafield_definitions/create",
    graphql_topic: "METAFIELD_DEFINITIONS_CREATE",
  },
  {
    topic: "metafield_definitions/delete",
    graphql_topic: "METAFIELD_DEFINITIONS_DELETE",
  },
  {
    topic: "metafield_definitions/update",
    graphql_topic: "METAFIELD_DEFINITIONS_UPDATE",
  },
  { topic: "metaobjects/create", graphql_topic: "METAOBJECTS_CREATE" },
  { topic: "metaobjects/delete", graphql_topic: "METAOBJECTS_DELETE" },
  { topic: "metaobjects/update", graphql_topic: "METAOBJECTS_UPDATE" },
  {
    topic: "order_transactions/create",
    graphql_topic: "ORDER_TRANSACTIONS_CREATE",
  },
  { topic: "orders/cancelled", graphql_topic: "ORDERS_CANCELLED" },
  { topic: "orders/create", graphql_topic: "ORDERS_CREATE" },
  { topic: "orders/delete", graphql_topic: "ORDERS_DELETE" },
  { topic: "orders/edited", graphql_topic: "ORDERS_EDITED" },
  { topic: "orders/fulfilled", graphql_topic: "ORDERS_FULFILLED" },
  { topic: "orders/paid", graphql_topic: "ORDERS_PAID" },
  {
    topic: "orders/partially_fulfilled",
    graphql_topic: "ORDERS_PARTIALLY_FULFILLED",
  },
  {
    topic: "orders/risk_assessment_changed",
    graphql_topic: "ORDERS_RISK_ASSESSMENT_CHANGED",
  },
  {
    topic: "orders/shopify_protect_eligibility_changed",
    graphql_topic: "ORDERS_SHOPIFY_PROTECT_ELIGIBILITY_CHANGED",
  },
  { topic: "orders/updated", graphql_topic: "ORDERS_UPDATED" },
  { topic: "payment_schedules/due", graphql_topic: "PAYMENT_SCHEDULES_DUE" },
  { topic: "payment_terms/create", graphql_topic: "PAYMENT_TERMS_CREATE" },
  { topic: "payment_terms/delete", graphql_topic: "PAYMENT_TERMS_DELETE" },
  { topic: "payment_terms/update", graphql_topic: "PAYMENT_TERMS_UPDATE" },
  { topic: "product_feeds/create", graphql_topic: "PRODUCT_FEEDS_CREATE" },
  {
    topic: "product_feeds/full_sync",
    graphql_topic: "PRODUCT_FEEDS_FULL_SYNC",
  },
  {
    topic: "product_feeds/full_sync_finish",
    graphql_topic: "PRODUCT_FEEDS_FULL_SYNC_FINISH",
  },
  {
    topic: "product_feeds/incremental_sync",
    graphql_topic: "PRODUCT_FEEDS_INCREMENTAL_SYNC",
  },
  { topic: "product_feeds/update", graphql_topic: "PRODUCT_FEEDS_UPDATE" },
  { topic: "product_listings/add", graphql_topic: "PRODUCT_LISTINGS_ADD" },
  {
    topic: "product_listings/remove",
    graphql_topic: "PRODUCT_LISTINGS_REMOVE",
  },
  {
    topic: "product_listings/update",
    graphql_topic: "PRODUCT_LISTINGS_UPDATE",
  },
  {
    topic: "product_publications/create",
    graphql_topic: "PRODUCT_PUBLICATIONS_CREATE",
  },
  {
    topic: "product_publications/delete",
    graphql_topic: "PRODUCT_PUBLICATIONS_DELETE",
  },
  {
    topic: "product_publications/update",
    graphql_topic: "PRODUCT_PUBLICATIONS_UPDATE",
  },
  { topic: "products/create", graphql_topic: "PRODUCTS_CREATE" },
  { topic: "products/delete", graphql_topic: "PRODUCTS_DELETE" },
  { topic: "products/update", graphql_topic: "PRODUCTS_UPDATE" },
  { topic: "profiles/create", graphql_topic: "PROFILES_CREATE" },
  { topic: "profiles/delete", graphql_topic: "PROFILES_DELETE" },
  { topic: "profiles/update", graphql_topic: "PROFILES_UPDATE" },
  { topic: "refunds/create", graphql_topic: "REFUNDS_CREATE" },
  { topic: "returns/approve", graphql_topic: "RETURNS_APPROVE" },
  { topic: "returns/cancel", graphql_topic: "RETURNS_CANCEL" },
  { topic: "returns/close", graphql_topic: "RETURNS_CLOSE" },
  { topic: "returns/decline", graphql_topic: "RETURNS_DECLINE" },
  { topic: "returns/reopen", graphql_topic: "RETURNS_REOPEN" },
  { topic: "returns/request", graphql_topic: "RETURNS_REQUEST" },
  { topic: "returns/update", graphql_topic: "RETURNS_UPDATE" },
  {
    topic: "reverse_deliveries/attach_deliverable",
    graphql_topic: "REVERSE_DELIVERIES_ATTACH_DELIVERABLE",
  },
  {
    topic: "reverse_fulfillment_orders/dispose",
    graphql_topic: "REVERSE_FULFILLMENT_ORDERS_DISPOSE",
  },
  {
    topic: "scheduled_product_listings/add",
    graphql_topic: "SCHEDULED_PRODUCT_LISTINGS_ADD",
  },
  {
    topic: "scheduled_product_listings/remove",
    graphql_topic: "SCHEDULED_PRODUCT_LISTINGS_REMOVE",
  },
  {
    topic: "scheduled_product_listings/update",
    graphql_topic: "SCHEDULED_PRODUCT_LISTINGS_UPDATE",
  },
  { topic: "segments/create", graphql_topic: "SEGMENTS_CREATE" },
  { topic: "segments/delete", graphql_topic: "SEGMENTS_DELETE" },
  { topic: "segments/update", graphql_topic: "SEGMENTS_UPDATE" },
  {
    topic: "selling_plan_groups/create",
    graphql_topic: "SELLING_PLAN_GROUPS_CREATE",
  },
  {
    topic: "selling_plan_groups/delete",
    graphql_topic: "SELLING_PLAN_GROUPS_DELETE",
  },
  {
    topic: "selling_plan_groups/update",
    graphql_topic: "SELLING_PLAN_GROUPS_UPDATE",
  },
  { topic: "shop/redact", graphql_topic: "SHOP_REDACT" },
  { topic: "shop/update", graphql_topic: "SHOP_UPDATE" },
  {
    topic: "subscription_billing_attempts/challenged",
    graphql_topic: "SUBSCRIPTION_BILLING_ATTEMPTS_CHALLENGED",
  },
  {
    topic: "subscription_billing_attempts/failure",
    graphql_topic: "SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE",
  },
  {
    topic: "subscription_billing_attempts/success",
    graphql_topic: "SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS",
  },
  {
    topic: "subscription_billing_cycle_edits/create",
    graphql_topic: "SUBSCRIPTION_BILLING_CYCLE_EDITS_CREATE",
  },
  {
    topic: "subscription_billing_cycle_edits/delete",
    graphql_topic: "SUBSCRIPTION_BILLING_CYCLE_EDITS_DELETE",
  },
  {
    topic: "subscription_billing_cycle_edits/update",
    graphql_topic: "SUBSCRIPTION_BILLING_CYCLE_EDITS_UPDATE",
  },
  {
    topic: "subscription_billing_cycles/skip",
    graphql_topic: "SUBSCRIPTION_BILLING_CYCLES_SKIP",
  },
  {
    topic: "subscription_billing_cycles/unskip",
    graphql_topic: "SUBSCRIPTION_BILLING_CYCLES_UNSKIP",
  },
  {
    topic: "subscription_contracts/activate",
    graphql_topic: "SUBSCRIPTION_CONTRACTS_ACTIVATE",
  },
  {
    topic: "subscription_contracts/cancel",
    graphql_topic: "SUBSCRIPTION_CONTRACTS_CANCEL",
  },
  {
    topic: "subscription_contracts/create",
    graphql_topic: "SUBSCRIPTION_CONTRACTS_CREATE",
  },
  {
    topic: "subscription_contracts/expire",
    graphql_topic: "SUBSCRIPTION_CONTRACTS_EXPIRE",
  },
  {
    topic: "subscription_contracts/fail",
    graphql_topic: "SUBSCRIPTION_CONTRACTS_FAIL",
  },
  {
    topic: "subscription_contracts/pause",
    graphql_topic: "SUBSCRIPTION_CONTRACTS_PAUSE",
  },
  {
    topic: "subscription_contracts/update",
    graphql_topic: "SUBSCRIPTION_CONTRACTS_UPDATE",
  },
  {
    topic: "tender_transactions/create",
    graphql_topic: "TENDER_TRANSACTIONS_CREATE",
  },
  { topic: "themes/create", graphql_topic: "THEMES_CREATE" },
  { topic: "themes/delete", graphql_topic: "THEMES_DELETE" },
  { topic: "themes/publish", graphql_topic: "THEMES_PUBLISH" },
  { topic: "themes/update", graphql_topic: "THEMES_UPDATE" },
  { topic: "variants/in_stock", graphql_topic: "VARIANTS_IN_STOCK" },
  { topic: "variants/out_of_stock", graphql_topic: "VARIANTS_OUT_OF_STOCK" },
];

const webhookWriter = (config) => {
  let subscriptionsArray = [];
  for (const entry in shopify.user.webhooks) {
    const subscription = {
      topics: shopify.user.webhooks[entry].topics,
      uri: shopify.user.webhooks[entry].url.startsWith("/api/webhooks/")
        ? `${process.env.SHOPIFY_APP_URL}${shopify.user.webhooks[entry].url}`
        : shopify.user.webhooks[entry].url,
    };

    if (shopify.user.webhooks[entry].include_fields) {
      subscription.include_fields = shopify.user.webhooks[entry].include_fields;
    }

    if (shopify.user.webhooks[entry].filter) {
      subscription.filter = shopify.user.webhooks[entry].filter;
    }

    subscriptionsArray.push(subscription);
  }

  config.webhooks.subscriptions = [...subscriptionsArray];

  writeToApi();
};

const shopifyFilePath = path.join(process.cwd(), "utils", "shopify.js");
const webhookTopicFilePath = path.join(
  process.cwd(),
  "pages",
  "api",
  "webhooks",
  "[...webhookTopic].js"
);

async function writeToApi() {
  try {
    const shopifyFileContent = fs.readFileSync(shopifyFilePath, "utf8");
    const webhookImports = shopifyFileContent.match(
      /import .* from "\.\/webhooks\/.*";/g
    );

    let webhookTopicFileContent = fs.readFileSync(webhookTopicFilePath, "utf8");

    const topComment = `/**
 * DO NOT EDIT THIS FILE DIRECTLY
 * Head over to utils/shopify.js to create your webhooks
 *  and write your webhook functions in utils/webhooks.
 * If you don't know the format, use the \`createwebhook\` snippet when using VSCode
 *  to get a boilerplate function for webhooks.
 * To update this file, run \`npm run update:config\` or \`bun run update:config\`
 */\n\n`;

    // Remove the existing comment if it's already there
    webhookTopicFileContent = webhookTopicFileContent.replace(
      /\/\*\*[\s\S]*?\*\/\s*/,
      ""
    );

    // Start with the comment and shopify import
    let newFileContent =
      topComment + 'import shopify from "@/utils/shopify.js";\n';

    // Add new imports from webhook handlers
    if (webhookImports) {
      webhookImports.forEach((importStatement) => {
        const formattedImportStatement = importStatement.replace(
          "./webhooks",
          "@/utils/webhooks"
        );
        newFileContent += formattedImportStatement + "\n";
      });
    }

    // Get the rest of the file content after imports
    const mainContent = webhookTopicFileContent.replace(
      /^([\s\S]*?^import[^\n]*\n)+/m,
      ""
    );

    // Combine everything
    webhookTopicFileContent = newFileContent + mainContent;

    // Check for duplicate topics
    const topicCounts = {};
    shopify.user.webhooks.forEach((webhook) => {
      webhook.topics.forEach((topic) => {
        topicCounts[topic] = (topicCounts[topic] || 0) + 1;
      });
    });

    const hasDuplicateTopics = Object.values(topicCounts).some(
      (count) => count > 1
    );

    // Generate the switch/case statement
    let switchCaseStatement = hasDuplicateTopics
      ? "switch (req.url) {\n"
      : "switch (validateWebhook.topic) {\n";

    for (const entry of shopify.user.webhooks) {
      if (entry.url.startsWith("/api/webhooks")) {
        const handlerName = entry.callback.name;
        if (hasDuplicateTopics) {
          switchCaseStatement += `  case "${entry.url}":\n`;
          switchCaseStatement += `    await ${handlerName}(validateWebhook.topic, shop, rawBody, webhookId, apiVersion);\n`;
          switchCaseStatement += `    break;\n`;
        } else {
          entry.topics.forEach((topic, index) => {
            const topicCase =
              availableTopics.find((t) => t.topic === topic)?.graphql_topic ||
              topic.toUpperCase().replace("/", "_");
            switchCaseStatement += `  case "${topicCase}":\n`;
            if (index === entry.topics.length - 1) {
              switchCaseStatement += `    await ${handlerName}(validateWebhook.topic, shop, rawBody, webhookId, apiVersion);\n`;
              switchCaseStatement += `    break;\n`;
            }
          });
        }
      }
    }
    switchCaseStatement += `  default:\n`;
    switchCaseStatement += `    throw new Error(\`Can't find a handler for \${${
      hasDuplicateTopics ? "req.url" : "topic"
    }}\`);\n`;
    switchCaseStatement += "}\n";

    // Replace the existing switch/case statement
    const switchCaseRegex = /\/\/SWITCHCASE\n[\s\S]*?\/\/SWITCHCASE END/;
    webhookTopicFileContent = webhookTopicFileContent.replace(
      switchCaseRegex,
      `//SWITCHCASE\n${switchCaseStatement}//SWITCHCASE END`
    );

    fs.writeFileSync(webhookTopicFilePath, webhookTopicFileContent, "utf8");
  } catch (error) {
    console.error("Error writing to webhookTopic file:", error);
  }
}

export default webhookWriter;
