import fs from "fs";
import path from "path";
import shopify from "../utils/shopify.js";

/**
 * @typedef {Object} ApiEndpoint
 * @property {string} topic - The API endpoint topic.
 * @property {string} graphql_topic - The topic's GraphQL topic name.
 * @property {string[]} scopes - The required scopes for accessing the endpoint.
 * @property {boolean} approval - Indicates if the endpoint requires approval from Shopify.
 * @property {boolean} pii - Indicates if the endpoint requires customer data access.
 */

/**
 * @type {ApiEndpoint[]}
 */
const topicsAndScopes = [
  { topic: "app/uninstalled", graphql_topic: "APP_UNINSTALLED" },
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
  { topic: "bulk_operations/finish", graphql_topic: "BULK_OPERATIONS_FINISH" },
  {
    topic: "carts/create",
    scopes: ["read_orders", "write_orders"],
    graphql_topic: "CARTS_CREATE",
  },
  {
    topic: "carts/update",
    scopes: ["read_orders", "write_orders"],
    graphql_topic: "CARTS_UPDATE",
  },
  {
    topic: "channels/delete",
    scopes: ["read_publications", "write_publications"],
    approval: true,
    graphql_topic: "CHANNELS_DELETE",
  },
  {
    topic: "checkouts/create",
    scopes: ["read_orders", "write_orders"],
    graphql_topic: "CHECKOUTS_CREATE",
  },
  {
    topic: "checkouts/delete",
    scopes: ["read_orders", "write_orders"],
    graphql_topic: "CHECKOUTS_DELETE",
  },
  {
    topic: "checkouts/update",
    scopes: ["read_orders", "write_orders"],
    graphql_topic: "CHECKOUTS_UPDATE",
  },
  {
    topic: "collection_listings/add",
    scopes: ["read_product_listings"],
    graphql_topic: "COLLECTION_LISTINGS_ADD",
  },
  {
    topic: "collection_listings/remove",
    scopes: ["read_product_listings"],
    graphql_topic: "COLLECTION_LISTINGS_REMOVE",
  },
  {
    topic: "collection_listings/update",
    scopes: ["read_product_listings"],
    graphql_topic: "COLLECTION_LISTINGS_UPDATE",
  },
  {
    topic: "collection_publications/create",
    scopes: ["read_publications", "write_publications"],
    graphql_topic: "COLLECTION_PUBLICATIONS_CREATE",
  },
  {
    topic: "collection_publications/delete",
    scopes: ["read_publications", "write_publications"],
    graphql_topic: "COLLECTION_PUBLICATIONS_DELETE",
  },
  {
    topic: "collection_publications/update",
    scopes: ["read_publications", "write_publications"],
    graphql_topic: "COLLECTION_PUBLICATIONS_UPDATE",
  },
  {
    topic: "collections/create",
    scopes: [""],
    graphql_topic: "COLLECTIONS_CREATE",
  },
  {
    topic: "collections/delete",
    scopes: ["read_products", "write_products"],
    graphql_topic: "COLLECTIONS_DELETE",
  },
  {
    topic: "collections/update",
    scopes: ["read_products", "write_products"],
    graphql_topic: "COLLECTIONS_UPDATE",
  },
  {
    topic: "companies/create",
    scopes: ["read_products", "write_products"],
    pii: true,
    graphql_topic: "COMPANIES_CREATE",
  },
  {
    topic: "companies/delete",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "COMPANIES_DELETE",
  },
  {
    topic: "companies/update",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "COMPANIES_UPDATE",
  },
  {
    topic: "company_contact_roles/assign",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "COMPANY_CONTACT_ROLES_ASSIGN",
  },
  {
    topic: "company_contact_roles/revoke",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "COMPANY_CONTACT_ROLES_REVOKE",
  },
  {
    topic: "company_contacts/create",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "COMPANY_CONTACTS_CREATE",
  },
  {
    topic: "company_contacts/delete",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "COMPANY_CONTACTS_DELETE",
  },
  {
    topic: "company_contacts/update",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "COMPANY_CONTACTS_UPDATE",
  },
  {
    topic: "company_locations/create",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "COMPANY_LOCATIONS_CREATE",
  },
  {
    topic: "company_locations/delete",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "COMPANY_LOCATIONS_DELETE",
  },
  {
    topic: "company_locations/update",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "COMPANY_LOCATIONS_UPDATE",
  },
  {
    topic: "customer/tags_added",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "CUSTOMER_TAGS_ADDED",
  },
  {
    topic: "customer/tags_removed",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "CUSTOMER_TAGS_REMOVED",
  },
  {
    topic: "customer_account_settings/update",

    graphql_topic: "CUSTOMER_ACCOUNT_SETTINGS_UPDATE",
  },
  {
    topic: "customer_groups/create",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "CUSTOMER_GROUPS_CREATE",
  },
  {
    topic: "customer_groups/delete",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "CUSTOMER_GROUPS_DELETE",
  },
  {
    topic: "customer_groups/update",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "CUSTOMER_GROUPS_UPDATE",
  },
  {
    topic: "customer_payment_methods/create",
    scopes: ["read_customer_payment_methods"],
    approval: true,
    pii: true,
    graphql_topic: "CUSTOMER_PAYMENT_METHODS_CREATE",
  },
  {
    topic: "customer_payment_methods/revoke",
    scopes: ["read_customer_payment_methods"],
    approval: true,
    pii: true,
    graphql_topic: "CUSTOMER_PAYMENT_METHODS_REVOKE",
  },
  {
    topic: "customer_payment_methods/update",
    scopes: ["read_customer_payment_methods"],
    approval: true,
    pii: true,
    graphql_topic: "CUSTOMER_PAYMENT_METHODS_UPDATE",
  },
  {
    topic: "customers/create",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "CUSTOMERS_CREATE",
  },
  {
    topic: "customers/data_request",

    graphql_topic: "CUSTOMERS_DATA_REQUEST",
  },
  {
    topic: "customers/delete",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "CUSTOMERS_DELETE",
  },
  {
    topic: "customers/disable",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "CUSTOMERS_DISABLE",
  },
  {
    topic: "customers/enable",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "CUSTOMERS_ENABLE",
  },
  {
    topic: "customers/merge",
    scopes: ["read_customer_merge", "write_customer_merge"],
    graphql_topic: "CUSTOMERS_MERGE",
  },
  { topic: "customers/redact", graphql_topic: "CUSTOMERS_REDACT" },
  {
    topic: "customers/update",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "CUSTOMERS_UPDATE",
  },
  {
    topic: "customers_email_marketing_consent/update",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "CUSTOMERS_EMAIL_MARKETING_CONSENT_UPDATE",
  },
  {
    topic: "customers_marketing_consent/update",
    scopes: ["read_customers", "write_customers"],
    pii: true,
    graphql_topic: "CUSTOMERS_MARKETING_CONSENT_UPDATE",
  },
  {
    topic: "discounts/create",
    scopes: ["read_discounts", "write_discounts"],
    graphql_topic: "DISCOUNTS_CREATE",
  },
  {
    topic: "discounts/delete",
    scopes: ["read_discounts", "write_discounts"],
    graphql_topic: "DISCOUNTS_DELETE",
  },
  {
    topic: "discounts/redeemcode_added",
    scopes: ["read_discounts", "write_discounts"],
    graphql_topic: "DISCOUNTS_REDEEMCODE_ADDED",
  },
  {
    topic: "discounts/redeemcode_removed",
    scopes: ["read_discounts", "write_discounts"],
    graphql_topic: "DISCOUNTS_REDEEMCODE_REMOVED",
  },
  {
    topic: "discounts/update",
    scopes: ["read_discounts", "write_discounts"],
    graphql_topic: "DISCOUNTS_UPDATE",
  },
  {
    topic: "disputes/create",
    scopes: ["read_shopify_payments_disputes"],
    pii: true,
    graphql_topic: "DISPUTES_CREATE",
  },
  {
    topic: "disputes/update",
    scopes: ["read_shopify_payments_disputes"],
    pii: true,
    graphql_topic: "DISPUTES_UPDATE",
  },
  { topic: "domains/create", graphql_topic: "DOMAINS_CREATE" },
  { topic: "domains/destroy", graphql_topic: "DOMAINS_DESTROY" },
  { topic: "domains/update", graphql_topic: "DOMAINS_UPDATE" },
  {
    topic: "draft_orders/create",
    scopes: ["read_draft_orders", "write_draft_orders"],
    pii: true,
    graphql_topic: "DRAFT_ORDERS_CREATE",
  },
  {
    topic: "draft_orders/delete",
    scopes: ["read_draft_orders", "write_draft_orders"],
    graphql_topic: "DRAFT_ORDERS_DELETE",
  },
  {
    topic: "draft_orders/update",
    scopes: ["read_draft_orders", "write_draft_orders"],
    pii: true,
    graphql_topic: "DRAFT_ORDERS_UPDATE",
  },
  {
    topic: "fulfillment_events/create",
    scopes: ["read_fulfillments", "write_fulfillments"],
    pii: true,
    graphql_topic: "FULFILLMENT_EVENTS_CREATE",
  },
  {
    topic: "fulfillment_events/delete",
    scopes: ["read_fulfillments", "write_fulfillments"],
    graphql_topic: "FULFILLMENT_EVENTS_DELETE",
  },
  {
    topic: "fulfillment_orders/cancellation_request_accepted",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_ACCEPTED",
  },
  {
    topic: "fulfillment_orders/cancellation_request_rejected",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_REJECTED",
  },
  {
    topic: "fulfillment_orders/cancellation_request_submitted",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED",
  },
  {
    topic: "fulfillment_orders/cancelled",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_CANCELLED",
  },
  {
    topic: "fulfillment_orders/fulfillment_request_accepted",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_ACCEPTED",
  },
  {
    topic: "fulfillment_orders/fulfillment_request_rejected",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_REJECTED",
  },
  {
    topic: "fulfillment_orders/fulfillment_request_submitted",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED",
  },
  {
    topic: "fulfillment_orders/fulfillment_service_failed_to_complete",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_FULFILLMENT_SERVICE_FAILED_TO_COMPLETE",
  },
  {
    topic: "fulfillment_orders/hold_released",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_HOLD_RELEASED",
  },
  {
    topic: "fulfillment_orders/line_items_prepared_for_local_delivery",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY",
  },
  {
    topic: "fulfillment_orders/line_items_prepared_for_pickup",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP",
  },
  {
    topic: "fulfillment_orders/merged",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_MERGED",
  },
  {
    topic: "fulfillment_orders/moved",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_MOVED",
  },
  {
    topic: "fulfillment_orders/order_routing_complete",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_ORDER_ROUTING_COMPLETE",
  },
  {
    topic: "fulfillment_orders/placed_on_hold",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_PLACED_ON_HOLD",
  },
  {
    topic: "fulfillment_orders/rescheduled",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_RESCHEDULED",
  },
  {
    topic: "fulfillment_orders/scheduled_fulfillment_order_ready",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY",
  },
  {
    topic: "fulfillment_orders/split",
    scopes: [
      "read_merchant_managed_fulfillment_orders",
      "write_merchant_managed_fulfillment_orders",
      "read_assigned_fulfillment_orders",
      "write_assigned_fulfillment_orders",
      "read_third_party_fulfillment_orders",
      "write_third_party_fulfillment_orders",
    ],
    graphql_topic: "FULFILLMENT_ORDERS_SPLIT",
  },
  {
    topic: "fulfillments/create",
    scopes: ["read_fulfillments", "write_fulfillments"],
    pii: true,
    graphql_topic: "FULFILLMENTS_CREATE",
  },
  {
    topic: "fulfillments/update",
    scopes: ["read_fulfillments", "write_fulfillments"],
    pii: true,
    graphql_topic: "FULFILLMENTS_UPDATE",
  },
  {
    topic: "inventory_items/create",
    scopes: ["read_inventory", "write_inventory"],
    graphql_topic: "INVENTORY_ITEMS_CREATE",
  },
  {
    topic: "inventory_items/delete",
    scopes: ["read_inventory", "write_inventory"],
    graphql_topic: "INVENTORY_ITEMS_DELETE",
  },
  {
    topic: "inventory_items/update",
    scopes: ["read_inventory", "write_inventory"],
    graphql_topic: "INVENTORY_ITEMS_UPDATE",
  },
  {
    topic: "inventory_levels/connect",
    scopes: ["read_inventory", "write_inventory"],
    graphql_topic: "INVENTORY_LEVELS_CONNECT",
  },
  {
    topic: "inventory_levels/disconnect",
    scopes: ["read_inventory", "write_inventory"],
    graphql_topic: "INVENTORY_LEVELS_DISCONNECT",
  },
  {
    topic: "inventory_levels/update",
    scopes: ["read_inventory", "write_inventory"],
    graphql_topic: "INVENTORY_LEVELS_UPDATE",
  },
  {
    topic: "locales/create",
    scopes: ["read_locales", "write_locales"],
    graphql_topic: "LOCALES_CREATE",
  },
  {
    topic: "locales/update",
    scopes: ["read_locales", "write_locales"],
    graphql_topic: "LOCALES_UPDATE",
  },
  {
    topic: "locations/activate",
    scopes: ["read_locations", "write_locations"],
    graphql_topic: "LOCATIONS_ACTIVATE",
  },
  {
    topic: "locations/create",
    scopes: ["read_locations", "write_locations"],
    graphql_topic: "LOCATIONS_CREATE",
  },
  {
    topic: "locations/deactivate",
    scopes: ["read_locations", "write_locations"],
    graphql_topic: "LOCATIONS_DEACTIVATE",
  },
  {
    topic: "locations/delete",
    scopes: ["read_locations", "write_locations"],
    graphql_topic: "LOCATIONS_DELETE",
  },
  {
    topic: "locations/update",
    scopes: ["read_locations", "write_locations"],
    graphql_topic: "LOCATIONS_UPDATE",
  },
  {
    topic: "markets/create",
    scopes: ["read_markets", "write_markets"],
    graphql_topic: "MARKETS_CREATE",
  },
  {
    topic: "markets/delete",
    scopes: ["read_markets", "write_markets"],
    graphql_topic: "MARKETS_DELETE",
  },
  {
    topic: "markets/update",
    scopes: ["read_markets", "write_markets"],
    graphql_topic: "MARKETS_UPDATE",
  },
  {
    topic: "metaobjects/create",
    scopes: ["read_metaobjects", "write_metaobjects"],
    graphql_topic: "METAOBJECTS_CREATE",
  },
  {
    topic: "metaobjects/delete",
    scopes: ["read_metaobjects", "write_metaobjects"],
    graphql_topic: "METAOBJECTS_DELETE",
  },
  {
    topic: "metaobjects/update",
    scopes: ["read_metaobjects", "write_metaobjects"],
    graphql_topic: "METAOBJECTS_UPDATE",
  },
  {
    topic: "order_transactions/create",
    scopes: ["read_orders", "write_orders"],
    graphql_topic: "ORDER_TRANSACTIONS_CREATE",
  },
  {
    topic: "orders/cancelled",
    scopes: ["read_orders", "write_orders"],
    pii: true,
    graphql_topic: "ORDERS_CANCELLED",
  },
  {
    topic: "orders/create",
    scopes: ["read_orders", "write_orders"],
    pii: true,
    graphql_topic: "ORDERS_CREATE",
  },
  {
    topic: "orders/delete",
    scopes: ["read_orders", "write_orders"],
    pii: true,
    graphql_topic: "ORDERS_DELETE",
  },
  {
    topic: "orders/edited",
    scopes: ["read_orders", "write_orders"],
    pii: true,
    graphql_topic: "ORDERS_EDITED",
  },
  {
    topic: "orders/fulfilled",
    scopes: ["read_orders", "write_orders"],
    pii: true,
    graphql_topic: "ORDERS_FULFILLED",
  },
  {
    topic: "orders/paid",
    scopes: ["read_orders", "write_orders"],
    pii: true,
    graphql_topic: "ORDERS_PAID",
  },
  {
    topic: "orders/partially_fulfilled",
    scopes: ["read_orders", "write_orders"],
    pii: true,
    graphql_topic: "ORDERS_PARTIALLY_FULFILLED",
  },
  {
    topic: "orders/risk_assessment_changed",
    scopes: ["read_orders", "write_orders"],
    pii: true,
    graphql_topic: "ORDERS_RISK_ASSESSMENT_CHANGED",
  },
  {
    topic: "orders/shopify_protect_eligibility_changed",
    scopes: ["read_orders", "write_orders"],
    pii: true,
    graphql_topic: "ORDERS_SHOPIFY_PROTECT_ELIGIBILITY_CHANGED",
  },
  {
    topic: "orders/updated",
    scopes: ["read_orders", "write_orders"],
    pii: true,
    graphql_topic: "ORDERS_UPDATED",
  },
  {
    topic: "payment_schedules/due",
    scopes: ["read_payment_terms", "write_payment_terms"],
    graphql_topic: "PAYMENT_SCHEDULES_DUE",
  },
  {
    topic: "payment_terms/create",
    scopes: ["read_payment_terms", "write_payment_terms"],
    graphql_topic: "PAYMENT_TERMS_CREATE",
  },
  {
    topic: "payment_terms/delete",
    scopes: ["read_payment_terms", "write_payment_terms"],
    graphql_topic: "PAYMENT_TERMS_DELETE",
  },
  {
    topic: "payment_terms/update",
    scopes: ["read_payment_terms", "write_payment_terms"],
    graphql_topic: "PAYMENT_TERMS_UPDATE",
  },
  {
    topic: "product_feeds/create",
    scopes: ["read_product_listings"],
    graphql_topic: "PRODUCT_FEEDS_CREATE",
  },
  {
    topic: "product_feeds/update",
    scopes: ["read_product_listings"],
    graphql_topic: "PRODUCT_FEEDS_UPDATE",
  },
  {
    topic: "product_listings/add",
    scopes: ["read_product_listings"],
    graphql_topic: "PRODUCT_LISTINGS_ADD",
  },
  {
    topic: "product_listings/remove",
    scopes: ["read_product_listings"],
    graphql_topic: "PRODUCT_LISTINGS_REMOVE",
  },
  {
    topic: "product_listings/update",
    scopes: ["read_product_listings"],
    graphql_topic: "PRODUCT_LISTINGS_UPDATE",
  },
  {
    topic: "product_publications/create",
    scopes: ["read_publications", "write_publications"],
    approval: true,
    graphql_topic: "PRODUCT_PUBLICATIONS_CREATE",
  },
  {
    topic: "product_publications/delete",
    scopes: ["read_publications", "write_publications"],
    approval: true,
    graphql_topic: "PRODUCT_PUBLICATIONS_DELETE",
  },
  {
    topic: "product_publications/update",
    scopes: ["read_publications", "write_publications"],
    approval: true,
    graphql_topic: "PRODUCT_PUBLICATIONS_UPDATE",
  },
  {
    topic: "products/create",
    scopes: ["read_products,write_products"],
    graphql_topic: "PRODUCTS_CREATE",
  },
  {
    topic: "products/delete",
    scopes: ["read_products,write_products"],
    graphql_topic: "PRODUCTS_DELETE",
  },
  {
    topic: "products/update",
    scopes: ["read_products,write_products"],
    graphql_topic: "PRODUCTS_UPDATE",
  },
  {
    topic: "profiles/create",
    scopes: ["read_shipping", "write_shipping"],
    pii: true,
    graphql_topic: "PROFILES_CREATE",
  },
  {
    topic: "profiles/delete",
    scopes: ["read_shipping", "write_shipping"],
    pii: true,
    graphql_topic: "PROFILES_DELETE",
  },
  {
    topic: "profiles/update",
    scopes: ["read_shipping", "write_shipping"],
    pii: true,
    graphql_topic: "PROFILES_UPDATE",
  },
  {
    topic: "refunds/create",
    scopes: ["read_orders", "write_orders"],
    graphql_topic: "REFUNDS_CREATE",
  },
  {
    topic: "returns/approve",
    scopes: ["read_returns", "write_returns"],
    graphql_topic: "RETURNS_APPROVE",
  },
  {
    topic: "returns/cancel",
    scopes: ["read_returns", "write_returns"],
    graphql_topic: "RETURNS_CANCEL",
  },
  {
    topic: "returns/close",
    scopes: ["read_returns", "write_returns"],
    graphql_topic: "RETURNS_CLOSE",
  },
  {
    topic: "returns/decline",
    scopes: ["read_returns", "write_returns"],
    graphql_topic: "RETURNS_DECLINE",
  },
  {
    topic: "returns/reopen",
    scopes: ["read_returns", "write_returns"],
    graphql_topic: "RETURNS_REOPEN",
  },
  {
    topic: "returns/request",
    scopes: ["read_returns", "write_returns"],
    graphql_topic: "RETURNS_REQUEST",
  },
  {
    topic: "returns/update",
    scopes: ["read_returns", "write_returns"],
    graphql_topic: "RETURNS_UPDATE",
  },
  {
    topic: "reverse_deliveries/attach_deliverable",
    scopes: ["read_returns", "write_returns"],
    pii: true,
    graphql_topic: "REVERSE_DELIVERIES_ATTACH_DELIVERABLE",
  },
  {
    topic: "reverse_fulfillment_orders/dispose",
    scopes: ["read_returns", "write_returns"],
    graphql_topic: "REVERSE_FULFILLMENT_ORDERS_DISPOSE",
  },
  {
    topic: "scheduled_product_listings/add",
    scopes: ["read_product_listings"],
    graphql_topic: "SCHEDULED_PRODUCT_LISTINGS_ADD",
  },
  {
    topic: "scheduled_product_listings/remove",
    scopes: ["read_product_listings"],
    graphql_topic: "SCHEDULED_PRODUCT_LISTINGS_REMOVE",
  },
  {
    topic: "scheduled_product_listings/update",
    scopes: ["read_product_listings"],
    graphql_topic: "SCHEDULED_PRODUCT_LISTINGS_UPDATE",
  },
  {
    topic: "segments/create",
    scopes: ["read_customers", "write_customers"],
    graphql_topic: "SEGMENTS_CREATE",
  },
  {
    topic: "segments/delete",
    scopes: ["read_customers", "write_customers"],
    graphql_topic: "SEGMENTS_DELETE",
  },
  {
    topic: "segments/update",
    scopes: ["read_customers", "write_customers"],
    graphql_topic: "SEGMENTS_UPDATE",
  },
  {
    topic: "selling_plan_groups/create",
    scopes: ["read_products", "write_products"],
    graphql_topic: "SELLING_PLAN_GROUPS_CREATE",
  },
  {
    topic: "selling_plan_groups/delete",
    scopes: ["read_products", "write_products"],
    graphql_topic: "SELLING_PLAN_GROUPS_DELETE",
  },
  {
    topic: "selling_plan_groups/update",
    scopes: ["read_products", "write_products"],
    graphql_topic: "SELLING_PLAN_GROUPS_UPDATE",
  },
  { topic: "shop/redact", graphql_topic: "SHOP_REDACT" },
  { topic: "shop/update", graphql_topic: "SHOP_UPDATE" },
  {
    topic: "subscription_billing_attempts/challenged",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    pii: true,
    graphql_topic: "SUBSCRIPTION_BILLING_ATTEMPTS_CHALLENGED",
  },
  {
    topic: "subscription_billing_attempts/failure",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    pii: true,
    graphql_topic: "SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE",
  },
  {
    topic: "subscription_billing_attempts/success",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    pii: true,
    graphql_topic: "SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS",
  },
  {
    topic: "subscription_billing_cycle_edits/create",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    graphql_topic: "SUBSCRIPTION_BILLING_CYCLE_EDITS_CREATE",
  },
  {
    topic: "subscription_billing_cycle_edits/delete",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    graphql_topic: "SUBSCRIPTION_BILLING_CYCLE_EDITS_DELETE",
  },
  {
    topic: "subscription_billing_cycle_edits/update",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    graphql_topic: "SUBSCRIPTION_BILLING_CYCLE_EDITS_UPDATE",
  },
  {
    topic: "subscription_billing_cycles/skip",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    graphql_topic: "SUBSCRIPTION_BILLING_CYCLES_SKIP",
  },
  {
    topic: "subscription_billing_cycles/unskip",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    graphql_topic: "SUBSCRIPTION_BILLING_CYCLES_UNSKIP",
  },
  {
    topic: "subscription_contracts/activate",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    graphql_topic: "SUBSCRIPTION_CONTRACTS_ACTIVATE",
  },
  {
    topic: "subscription_contracts/cancel",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    graphql_topic: "SUBSCRIPTION_CONTRACTS_CANCEL",
  },
  {
    topic: "subscription_contracts/create",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    graphql_topic: "SUBSCRIPTION_CONTRACTS_CREATE",
  },
  {
    topic: "subscription_contracts/expire",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    graphql_topic: "SUBSCRIPTION_CONTRACTS_EXPIRE",
  },
  {
    topic: "subscription_contracts/fail",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    graphql_topic: "SUBSCRIPTION_CONTRACTS_FAIL",
  },
  {
    topic: "subscription_contracts/pause",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    graphql_topic: "SUBSCRIPTION_CONTRACTS_PAUSE",
  },
  {
    topic: "subscription_contracts/update",
    scopes: [
      "read_own_subscription_contracts",
      "write_own_subscription_contracts",
    ],
    graphql_topic: "SUBSCRIPTION_CONTRACTS_UPDATE",
  },
  {
    topic: "tender_transactions/create",
    scopes: ["read_orders", "write_orders"],
    graphql_topic: "TENDER_TRANSACTIONS_CREATE",
  },
  {
    topic: "themes/create",
    scopes: ["read_themes", "write_themes"],
    graphql_topic: "THEMES_CREATE",
  },
  {
    topic: "themes/delete",
    scopes: ["read_themes", "write_themes"],
    graphql_topic: "THEMES_DELETE",
  },
  {
    topic: "themes/publish",
    scopes: ["read_themes", "write_themes"],
    graphql_topic: "THEMES_PUBLISH",
  },
  {
    topic: "themes/update",
    scopes: ["read_themes", "write_themes"],
    graphql_topic: "THEMES_UPDATE",
  },
  {
    topic: "variants/in_stock",
    scopes: ["read_products", "write_products"],
    approval: true,
    graphql_topic: "VARIANTS_IN_STOCK",
  },
  {
    topic: "variants/out_of_stock",
    scopes: ["read_products", "write_products"],
    approval: true,
    graphql_topic: "VARIANTS_OUT_OF_STOCK",
  },
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

    // Add the comment at the top of the file
    webhookTopicFileContent = topComment + webhookTopicFileContent;

    // Add the imports to the webhookTopic file if they are not already present
    webhookImports.forEach((importStatement) => {
      const formattedImportStatement = importStatement.replace(
        "./webhooks",
        "@/utils/webhooks"
      );
      if (!webhookTopicFileContent.includes(formattedImportStatement)) {
        webhookTopicFileContent =
          topComment +
          formattedImportStatement +
          "\n" +
          webhookTopicFileContent.replace(topComment, "");
      }
    });

    // Generate the switch/case statement
    let switchCaseStatement = "switch (validateWebhook.topic) {\n";
    for (const entry of shopify.user.webhooks) {
      if (entry.url.startsWith("/api/webhooks")) {
        const handlerName = entry.callback.name;
        entry.topics.forEach((topic, index) => {
          const topicCase =
            topicsAndScopes.find((t) => t.topic === topic)?.graphql_topic ||
            topic.toUpperCase().replace("/", "_");
          switchCaseStatement += `  case "${topicCase}":\n`;
          // Add break only after the last case for this entry
          if (index === entry.topics.length - 1) {
            switchCaseStatement += `    ${handlerName}(validateWebhook.topic, shop, rawBody, webhookId, apiVersion);\n`;
            switchCaseStatement += `    break;\n`;
          }
        });
      }
    }
    switchCaseStatement += `  default:\n`;
    switchCaseStatement += `    throw new Error(\`Can't find a handler for \${topic}\`);\n`;
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
