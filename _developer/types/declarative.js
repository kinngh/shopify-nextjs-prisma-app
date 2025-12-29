/**
 * Owner types supported by this app's declarative writer.
 *
 * @typedef {'api_permission' | 'article' | 'blog' | 'carttransform' | 'collection' | 'company' | 'company_location' | 'customer' | 'delivery_customization' | 'discount' | 'draftorder' | 'fulfillment_constraint_rule' | 'gift_card_transaction' | 'location' | 'market' | 'order' | 'order_routing_location_rule' | 'page' | 'payment_customization' | 'product' | 'productvariant' | 'selling_plan' | 'shop' | 'validation'} MetafieldOwnerType
 */

/**
 * Admin access control for metafield values.
 * @typedef {"merchant_read" | "merchant_read_write"} MetafieldAccessAdmin
 */

/**
 * Storefront access control for metafield values.
 * @typedef {"public_read" | "private_read" | "none"} MetafieldAccessStorefront
 */

/**
 * Customer account access control for metafield values.
 * @typedef {"read" | "read_write" | "none"} MetafieldAccessCustomerAccount
 */

/**
 * @typedef {Object} MetafieldAccess
 * @property {MetafieldAccessAdmin} admin
 * @property {MetafieldAccessStorefront} storefront
 * @property {MetafieldAccessCustomerAccount} customer_account
 */

/**
 * Capabilities supported in TOML-based declarative metafields.
 *
 * @typedef {Object} MetafieldCapabilities
 * @property {boolean} admin_filterable
 * @property {boolean} unique_values
 */

/**
 * Validations supported in TOML-based declarative metafields.
 *
 * @typedef {Object} MetafieldValidations
 * @property {string} name
 * @property {string} value
 */

/**
 * A single app-owned metafield definition (TOML/declarative).
 *
 * @typedef {Object} DeclarativeMetafieldDefinition
 * @property {MetafieldOwnerType} owner_type
 * @property {string} key
 * @property {string} namespace
 * @property {string} name
 * @property {string} description
 * @property {'boolean' | 'color' | 'date' | 'date_time' | 'dimension' | 'id' | 'json' | 'link' | 'money' | 'multi_line_text_field' | 'number_decimal' | 'number_integer' | 'rating' | 'rich_text_field' | 'single_line_text_field' | 'url' | 'volume' | 'weight' | 'article_reference' | 'collection_reference' | 'company_reference' | 'customer_reference' | 'file_reference' | 'metaobject_reference' | 'mixed_reference' | 'page_reference' | 'product_reference' | 'product_taxonomy_value_reference' | 'variant_reference' | 'list.article_reference' | 'list.collection_reference' | 'list.color' | 'list.customer_reference' | 'list.date' | 'list.date_time' | 'list.dimension' | 'list.file_reference' | 'list.id' | 'list.link' | 'list.metaobject_reference' | 'list.mixed_reference' | 'list.number_decimal' | 'list.number_integer' | 'list.page_reference' | 'list.product_reference' | 'list.product_taxonomy_value_reference' | 'list.rating' | 'list.single_line_text_field' | 'list.url' | 'list.variant_reference' | 'list.volume' | 'list.weight'} type
 * @property {MetafieldAccess} access
 * @property {MetafieldCapabilities} capabilities
 * @property {MetafieldValidations[]} validations
 */

export {};
