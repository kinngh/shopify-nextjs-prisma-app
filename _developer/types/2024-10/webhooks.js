/**
 * @typedef {Object} RETURNS_APPROVE_order
 * @property {number} id
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} RETURNS_APPROVE_return_line_items_fulfillment_line_item_line_item
 * @property {number} id
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} RETURNS_APPROVE_return_line_items_fulfillment_line_item
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {RETURNS_APPROVE_return_line_items_fulfillment_line_item_line_item} line_item
 */
/**
 * @typedef {Object} RETURNS_APPROVE_return_line_items_restocking_fee_price_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} RETURNS_APPROVE_return_line_items_restocking_fee_price_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} RETURNS_APPROVE_return_line_items_restocking_fee_price
 * @property {RETURNS_APPROVE_return_line_items_restocking_fee_price_shop_money} shop_money
 * @property {RETURNS_APPROVE_return_line_items_restocking_fee_price_presentment_money} presentment_money
 */
/**
 * @typedef {Object} RETURNS_APPROVE_return_line_items_restocking_fee
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {RETURNS_APPROVE_return_line_items_restocking_fee_price} price
 */
/**
 * @typedef {Object} RETURNS_APPROVE_return_line_items
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {RETURNS_APPROVE_return_line_items_fulfillment_line_item} fulfillment_line_item
 * @property {number} quantity
 * @property {string} return_reason
 * @property {string} return_reason_note
 * @property {null|string} customer_note
 * @property {RETURNS_APPROVE_return_line_items_restocking_fee} restocking_fee
 */
/**
 * @typedef {Object} RETURNS_APPROVE_return_shipping_fees_price_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} RETURNS_APPROVE_return_shipping_fees_price_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} RETURNS_APPROVE_return_shipping_fees_price
 * @property {RETURNS_APPROVE_return_shipping_fees_price_shop_money} shop_money
 * @property {RETURNS_APPROVE_return_shipping_fees_price_presentment_money} presentment_money
 */
/**
 * @typedef {Object} RETURNS_APPROVE_return_shipping_fees
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {RETURNS_APPROVE_return_shipping_fees_price} price
 */
/**
 * @typedef {Object} RETURNS_APPROVE_exchange_line_items
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {null|string} line_item
 */
/**
 * @typedef {Object} RETURNS_APPROVE
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {string} status
 * @property {RETURNS_APPROVE_order} order
 * @property {number} total_return_line_items
 * @property {null|string} name
 * @property {Array<RETURNS_APPROVE_return_line_items>} return_line_items
 * @property {Array<RETURNS_APPROVE_return_shipping_fees>} return_shipping_fees
 * @property {Array<RETURNS_APPROVE_exchange_line_items>} exchange_line_items
 * @property {number} total_exchange_line_items
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_CANCELLATION_REQUEST_REJECTED_fulfillment_order
 * @property {string} id
 * @property {string} status
 * @property {string} request_status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_CANCELLATION_REQUEST_REJECTED
 * @property {FULFILLMENT_ORDERS_CANCELLATION_REQUEST_REJECTED_fulfillment_order} fulfillment_order
 * @property {string} message
 */
/**
 * @typedef {Object} METAOBJECTS_DELETE
 * @property {string} id
 * @property {string} type
 * @property {string} handle
 * @property {string} created_by_app_id
 */
/**
 * @typedef {Object} CUSTOMERS_MERGE_errors
 * @property {Array<number>} customer_ids
 * @property {string} field
 * @property {string} message
 */
/**
 * @typedef {Object} CUSTOMERS_MERGE
 * @property {string} admin_graphql_api_customer_kept_id
 * @property {string} admin_graphql_api_customer_deleted_id
 * @property {null|string} admin_graphql_api_job_id
 * @property {string} status
 * @property {Array<CUSTOMERS_MERGE_errors>} errors
 */
/**
 * @typedef {Object} SUBSCRIPTION_BILLING_ATTEMPTS_CHALLENGED
 * @property {null|string} id
 * @property {null|string} admin_graphql_api_id
 * @property {string} idempotency_key
 * @property {number} order_id
 * @property {string} admin_graphql_api_order_id
 * @property {number} subscription_contract_id
 * @property {string} admin_graphql_api_subscription_contract_id
 * @property {boolean} ready
 * @property {null|string} error_message
 * @property {null|string} error_code
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_HOLD_RELEASED_fulfillment_order
 * @property {string} id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_HOLD_RELEASED
 * @property {FULFILLMENT_ORDERS_HOLD_RELEASED_fulfillment_order} fulfillment_order
 */
/**
 * @typedef {Object} PAYMENT_TERMS_UPDATE_payment_schedules
 * @property {number} id
 * @property {number} payment_terms_id
 * @property {string} amount
 * @property {string} currency
 * @property {string} issued_at
 * @property {string} due_at
 * @property {string} completed_at
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} PAYMENT_TERMS_UPDATE
 * @property {number} id
 * @property {string} payment_terms_name
 * @property {string} payment_terms_type
 * @property {number} due_in_days
 * @property {string} created_at
 * @property {string} updated_at
 * @property {Array<PAYMENT_TERMS_UPDATE_payment_schedules>} payment_schedules
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_FULFILLMENT_SERVICE_FAILED_TO_COMPLETE_fulfillment_order
 * @property {string} id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_FULFILLMENT_SERVICE_FAILED_TO_COMPLETE
 * @property {FULFILLMENT_ORDERS_FULFILLMENT_SERVICE_FAILED_TO_COMPLETE_fulfillment_order} fulfillment_order
 * @property {string} message
 */
/**
 * @typedef {Object} INVENTORY_LEVELS_DISCONNECT
 * @property {number} inventory_item_id
 * @property {number} location_id
 */
/**
 * @typedef {Object} CHECKOUTS_CREATE_line_items_tax_lines
 * @property {string} price
 * @property {number} position
 * @property {number} rate
 * @property {string} title
 * @property {string} source
 * @property {string} zone
 * @property {null|string} jurisdiction_id
 * @property {null|string} jurisdiction_type
 * @property {null|string} jurisdiction_source
 * @property {null|string} reporting_taxable_amount
 * @property {null|string} reporting_non_taxable_amount
 * @property {null|string} reporting_exempt_amount
 * @property {null|string} reporting_jurisdiction_name
 * @property {null|string} reporting_jurisdiction_type
 * @property {null|string} reporting_jurisdiction_code
 * @property {null|string} tax_api_client_id
 * @property {string} tax_calculation_price
 * @property {null|string} tax_registration_id
 * @property {number} compare_at
 * @property {boolean} channel_liable
 */
/**
 * @typedef {Object} CHECKOUTS_CREATE_line_items_unit_price_measurement
 * @property {null|string} measured_type
 * @property {null|string} quantity_value
 * @property {null|string} quantity_unit
 * @property {null|string} reference_value
 * @property {null|string} reference_unit
 */
/**
 * @typedef {Object} CHECKOUTS_CREATE_line_items
 * @property {Array} applied_discounts
 * @property {Array} discount_allocations
 * @property {string} key
 * @property {number} destination_location_id
 * @property {string} fulfillment_service
 * @property {boolean} gift_card
 * @property {number} grams
 * @property {number} origin_location_id
 * @property {string} presentment_title
 * @property {string} presentment_variant_title
 * @property {number} product_id
 * @property {null|string} properties
 * @property {number} quantity
 * @property {boolean} requires_shipping
 * @property {string} sku
 * @property {Array<CHECKOUTS_CREATE_line_items_tax_lines>} tax_lines
 * @property {boolean} taxable
 * @property {string} title
 * @property {number} variant_id
 * @property {string} variant_title
 * @property {string} variant_price
 * @property {string} vendor
 * @property {null|string} user_id
 * @property {CHECKOUTS_CREATE_line_items_unit_price_measurement} unit_price_measurement
 * @property {null|string} rank
 * @property {null|string} compare_at_price
 * @property {string} line_price
 * @property {string} price
 */
/**
 * @typedef {Object} CHECKOUTS_CREATE_tax_lines
 * @property {string} price
 * @property {number} rate
 * @property {string} title
 * @property {boolean} channel_liable
 */
/**
 * @typedef {Object} CHECKOUTS_CREATE_billing_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} CHECKOUTS_CREATE_shipping_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} CHECKOUTS_CREATE_customer_email_marketing_consent
 * @property {string} state
 * @property {null|string} opt_in_level
 * @property {null|string} consent_updated_at
 */
/**
 * @typedef {Object} CHECKOUTS_CREATE_customer_default_address
 * @property {null|string} id
 * @property {number} customer_id
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} company
 * @property {string} address1
 * @property {null|string} address2
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} phone
 * @property {string} name
 * @property {string} province_code
 * @property {string} country_code
 * @property {string} country_name
 * @property {boolean} default
 */
/**
 * @typedef {Object} CHECKOUTS_CREATE_customer
 * @property {number} id
 * @property {string} email
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {string} first_name
 * @property {string} last_name
 * @property {number} orders_count
 * @property {string} state
 * @property {string} total_spent
 * @property {null|string} last_order_id
 * @property {null|string} note
 * @property {boolean} verified_email
 * @property {null|string} multipass_identifier
 * @property {boolean} tax_exempt
 * @property {string} tags
 * @property {null|string} last_order_name
 * @property {string} currency
 * @property {null|string} phone
 * @property {Array} tax_exemptions
 * @property {CHECKOUTS_CREATE_customer_email_marketing_consent} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} admin_graphql_api_id
 * @property {CHECKOUTS_CREATE_customer_default_address} default_address
 */
/**
 * @typedef {Object} CHECKOUTS_CREATE
 * @property {number} id
 * @property {string} token
 * @property {string} cart_token
 * @property {string} email
 * @property {null|string} gateway
 * @property {boolean} buyer_accepts_marketing
 * @property {string} created_at
 * @property {string} updated_at
 * @property {null|string} landing_site
 * @property {null|string} note
 * @property {Array} note_attributes
 * @property {null|string} referring_site
 * @property {Array} shipping_lines
 * @property {boolean} taxes_included
 * @property {number} total_weight
 * @property {string} currency
 * @property {null|string} completed_at
 * @property {null|string} closed_at
 * @property {null|string} user_id
 * @property {null|string} location_id
 * @property {null|string} source_identifier
 * @property {null|string} source_url
 * @property {null|string} device_id
 * @property {null|string} phone
 * @property {null|string} customer_locale
 * @property {Array<CHECKOUTS_CREATE_line_items>} line_items
 * @property {string} name
 * @property {null|string} source
 * @property {string} abandoned_checkout_url
 * @property {Array} discount_codes
 * @property {Array<CHECKOUTS_CREATE_tax_lines>} tax_lines
 * @property {string} source_name
 * @property {string} presentment_currency
 * @property {boolean} buyer_accepts_sms_marketing
 * @property {null|string} sms_marketing_phone
 * @property {string} total_discounts
 * @property {string} total_line_items_price
 * @property {string} total_price
 * @property {string} total_tax
 * @property {string} subtotal_price
 * @property {null|string} total_duties
 * @property {null|string} reservation_token
 * @property {CHECKOUTS_CREATE_billing_address} billing_address
 * @property {CHECKOUTS_CREATE_shipping_address} shipping_address
 * @property {CHECKOUTS_CREATE_customer} customer
 */
/**
 * @typedef {Object} ORDERS_RISK_ASSESSMENT_CHANGED
 * @property {null|string} provider_id
 * @property {null|string} provider_title
 * @property {string} risk_level
 * @property {null|string} created_at
 * @property {null|string} order_id
 * @property {null|string} admin_graphql_api_order_id
 */
/**
 * @typedef {Object} RETURNS_DECLINE_decline
 * @property {string} reason
 * @property {string} note
 */
/**
 * @typedef {Object} RETURNS_DECLINE
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {string} status
 * @property {RETURNS_DECLINE_decline} decline
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_metadata
 * @property {string} action
 * @property {string} type
 * @property {string} resource
 * @property {string} fullSyncId
 * @property {Array} truncatedFields
 * @property {string} occurred_at
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_productFeed
 * @property {string} id
 * @property {string} shop_id
 * @property {string} country
 * @property {string} language
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_product_images_edges_node
 * @property {string} id
 * @property {string} url
 * @property {number} height
 * @property {number} width
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_product_images_edges
 * @property {PRODUCT_FEEDS_FULL_SYNC_product_images_edges_node} node
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_product_images
 * @property {Array<PRODUCT_FEEDS_FULL_SYNC_product_images_edges>} edges
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_product_options
 * @property {string} name
 * @property {Array<string>} values
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_product_seo
 * @property {string} title
 * @property {string} description
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_product_variants_edges_node_price
 * @property {string} amount
 * @property {string} currencyCode
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_product_variants_edges_node_image
 * @property {string} id
 * @property {string} url
 * @property {number} height
 * @property {number} width
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_product_variants_edges_node_selectedOptions
 * @property {string} name
 * @property {string} value
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_product_variants_edges_node
 * @property {string} id
 * @property {string} title
 * @property {PRODUCT_FEEDS_FULL_SYNC_product_variants_edges_node_price} price
 * @property {null|string} compareAtPrice
 * @property {string} sku
 * @property {null|string} barcode
 * @property {number} quantityAvailable
 * @property {boolean} availableForSale
 * @property {number} weight
 * @property {string} weightUnit
 * @property {boolean} requireShipping
 * @property {string} inventoryPolicy
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {PRODUCT_FEEDS_FULL_SYNC_product_variants_edges_node_image} image
 * @property {Array<PRODUCT_FEEDS_FULL_SYNC_product_variants_edges_node_selectedOptions>} selectedOptions
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_product_variants_edges
 * @property {PRODUCT_FEEDS_FULL_SYNC_product_variants_edges_node} node
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_product_variants
 * @property {Array<PRODUCT_FEEDS_FULL_SYNC_product_variants_edges>} edges
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_product
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} onlineStoreUrl
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {boolean} isPublished
 * @property {string} publishedAt
 * @property {string} productType
 * @property {string} vendor
 * @property {string} handle
 * @property {PRODUCT_FEEDS_FULL_SYNC_product_images} images
 * @property {Array<PRODUCT_FEEDS_FULL_SYNC_product_options>} options
 * @property {PRODUCT_FEEDS_FULL_SYNC_product_seo} seo
 * @property {Array<string>} tags
 * @property {PRODUCT_FEEDS_FULL_SYNC_product_variants} variants
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC
 * @property {PRODUCT_FEEDS_FULL_SYNC_metadata} metadata
 * @property {PRODUCT_FEEDS_FULL_SYNC_productFeed} productFeed
 * @property {PRODUCT_FEEDS_FULL_SYNC_product} product
 * @property {null|string} products
 */
/**
 * @typedef {Object} THEMES_CREATE
 * @property {number} id
 * @property {string} name
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} role
 * @property {number} theme_store_id
 * @property {boolean} previewable
 * @property {boolean} processing
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} ORDERS_PAID_current_shipping_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_current_shipping_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_current_shipping_price_set
 * @property {ORDERS_PAID_current_shipping_price_set_shop_money} shop_money
 * @property {ORDERS_PAID_current_shipping_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_current_subtotal_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_current_subtotal_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_current_subtotal_price_set
 * @property {ORDERS_PAID_current_subtotal_price_set_shop_money} shop_money
 * @property {ORDERS_PAID_current_subtotal_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_current_total_discounts_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_current_total_discounts_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_current_total_discounts_set
 * @property {ORDERS_PAID_current_total_discounts_set_shop_money} shop_money
 * @property {ORDERS_PAID_current_total_discounts_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_current_total_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_current_total_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_current_total_price_set
 * @property {ORDERS_PAID_current_total_price_set_shop_money} shop_money
 * @property {ORDERS_PAID_current_total_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_current_total_tax_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_current_total_tax_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_current_total_tax_set
 * @property {ORDERS_PAID_current_total_tax_set_shop_money} shop_money
 * @property {ORDERS_PAID_current_total_tax_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_subtotal_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_subtotal_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_subtotal_price_set
 * @property {ORDERS_PAID_subtotal_price_set_shop_money} shop_money
 * @property {ORDERS_PAID_subtotal_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_total_cash_rounding_payment_adjustment_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_total_cash_rounding_payment_adjustment_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_total_cash_rounding_payment_adjustment_set
 * @property {ORDERS_PAID_total_cash_rounding_payment_adjustment_set_shop_money} shop_money
 * @property {ORDERS_PAID_total_cash_rounding_payment_adjustment_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_total_cash_rounding_refund_adjustment_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_total_cash_rounding_refund_adjustment_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_total_cash_rounding_refund_adjustment_set
 * @property {ORDERS_PAID_total_cash_rounding_refund_adjustment_set_shop_money} shop_money
 * @property {ORDERS_PAID_total_cash_rounding_refund_adjustment_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_total_discounts_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_total_discounts_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_total_discounts_set
 * @property {ORDERS_PAID_total_discounts_set_shop_money} shop_money
 * @property {ORDERS_PAID_total_discounts_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_total_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_total_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_total_line_items_price_set
 * @property {ORDERS_PAID_total_line_items_price_set_shop_money} shop_money
 * @property {ORDERS_PAID_total_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_total_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_total_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_total_price_set
 * @property {ORDERS_PAID_total_price_set_shop_money} shop_money
 * @property {ORDERS_PAID_total_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_total_shipping_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_total_shipping_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_total_shipping_price_set
 * @property {ORDERS_PAID_total_shipping_price_set_shop_money} shop_money
 * @property {ORDERS_PAID_total_shipping_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_total_tax_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_total_tax_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_total_tax_set
 * @property {ORDERS_PAID_total_tax_set_shop_money} shop_money
 * @property {ORDERS_PAID_total_tax_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_billing_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} ORDERS_PAID_customer_email_marketing_consent
 * @property {string} state
 * @property {null|string} opt_in_level
 * @property {null|string} consent_updated_at
 */
/**
 * @typedef {Object} ORDERS_PAID_customer_default_address
 * @property {number} id
 * @property {number} customer_id
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} company
 * @property {string} address1
 * @property {null|string} address2
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} phone
 * @property {string} name
 * @property {string} province_code
 * @property {string} country_code
 * @property {string} country_name
 * @property {boolean} default
 */
/**
 * @typedef {Object} ORDERS_PAID_customer
 * @property {number} id
 * @property {string} email
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} state
 * @property {null|string} note
 * @property {boolean} verified_email
 * @property {null|string} multipass_identifier
 * @property {boolean} tax_exempt
 * @property {null|string} phone
 * @property {ORDERS_PAID_customer_email_marketing_consent} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} tags
 * @property {string} currency
 * @property {Array} tax_exemptions
 * @property {string} admin_graphql_api_id
 * @property {ORDERS_PAID_customer_default_address} default_address
 */
/**
 * @typedef {Object} ORDERS_PAID_line_items_attributed_staffs
 * @property {string} id
 * @property {number} quantity
 */
/**
 * @typedef {Object} ORDERS_PAID_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_line_items_price_set
 * @property {ORDERS_PAID_line_items_price_set_shop_money} shop_money
 * @property {ORDERS_PAID_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_line_items_total_discount_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_line_items_total_discount_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_line_items_total_discount_set
 * @property {ORDERS_PAID_line_items_total_discount_set_shop_money} shop_money
 * @property {ORDERS_PAID_line_items_total_discount_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_line_items
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {Array<ORDERS_PAID_line_items_attributed_staffs>} attributed_staffs
 * @property {number} current_quantity
 * @property {number} fulfillable_quantity
 * @property {string} fulfillment_service
 * @property {null|string} fulfillment_status
 * @property {boolean} gift_card
 * @property {number} grams
 * @property {string} name
 * @property {string} price
 * @property {ORDERS_PAID_line_items_price_set} price_set
 * @property {boolean} product_exists
 * @property {number} product_id
 * @property {Array} properties
 * @property {number} quantity
 * @property {boolean} requires_shipping
 * @property {string} sku
 * @property {boolean} taxable
 * @property {string} title
 * @property {string} total_discount
 * @property {ORDERS_PAID_line_items_total_discount_set} total_discount_set
 * @property {number} variant_id
 * @property {string} variant_inventory_management
 * @property {null|string} variant_title
 * @property {null|string} vendor
 * @property {Array} tax_lines
 * @property {Array} duties
 * @property {Array} discount_allocations
 */
/**
 * @typedef {Object} ORDERS_PAID_shipping_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} ORDERS_PAID_shipping_lines_current_discounted_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_shipping_lines_current_discounted_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_shipping_lines_current_discounted_price_set
 * @property {ORDERS_PAID_shipping_lines_current_discounted_price_set_shop_money} shop_money
 * @property {ORDERS_PAID_shipping_lines_current_discounted_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_shipping_lines_discounted_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_shipping_lines_discounted_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_shipping_lines_discounted_price_set
 * @property {ORDERS_PAID_shipping_lines_discounted_price_set_shop_money} shop_money
 * @property {ORDERS_PAID_shipping_lines_discounted_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_shipping_lines_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_shipping_lines_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PAID_shipping_lines_price_set
 * @property {ORDERS_PAID_shipping_lines_price_set_shop_money} shop_money
 * @property {ORDERS_PAID_shipping_lines_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PAID_shipping_lines
 * @property {number} id
 * @property {null|string} carrier_identifier
 * @property {null|string} code
 * @property {ORDERS_PAID_shipping_lines_current_discounted_price_set} current_discounted_price_set
 * @property {string} discounted_price
 * @property {ORDERS_PAID_shipping_lines_discounted_price_set} discounted_price_set
 * @property {boolean} is_removed
 * @property {null|string} phone
 * @property {string} price
 * @property {ORDERS_PAID_shipping_lines_price_set} price_set
 * @property {null|string} requested_fulfillment_service_id
 * @property {string} source
 * @property {string} title
 * @property {Array} tax_lines
 * @property {Array} discount_allocations
 */
/**
 * @typedef {Object} ORDERS_PAID
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {null|string} app_id
 * @property {null|string} browser_ip
 * @property {boolean} buyer_accepts_marketing
 * @property {string} cancel_reason
 * @property {string} cancelled_at
 * @property {null|string} cart_token
 * @property {null|string} checkout_id
 * @property {null|string} checkout_token
 * @property {null|string} client_details
 * @property {null|string} closed_at
 * @property {null|string} confirmation_number
 * @property {boolean} confirmed
 * @property {string} contact_email
 * @property {string} created_at
 * @property {string} currency
 * @property {ORDERS_PAID_current_shipping_price_set} current_shipping_price_set
 * @property {string} current_subtotal_price
 * @property {ORDERS_PAID_current_subtotal_price_set} current_subtotal_price_set
 * @property {null|string} current_total_additional_fees_set
 * @property {string} current_total_discounts
 * @property {ORDERS_PAID_current_total_discounts_set} current_total_discounts_set
 * @property {null|string} current_total_duties_set
 * @property {string} current_total_price
 * @property {ORDERS_PAID_current_total_price_set} current_total_price_set
 * @property {string} current_total_tax
 * @property {ORDERS_PAID_current_total_tax_set} current_total_tax_set
 * @property {string} customer_locale
 * @property {null|string} device_id
 * @property {Array} discount_codes
 * @property {boolean} duties_included
 * @property {string} email
 * @property {boolean} estimated_taxes
 * @property {string} financial_status
 * @property {string} fulfillment_status
 * @property {null|string} landing_site
 * @property {null|string} landing_site_ref
 * @property {null|string} location_id
 * @property {string} merchant_business_entity_id
 * @property {null|string} merchant_of_record_app_id
 * @property {string} name
 * @property {null|string} note
 * @property {Array} note_attributes
 * @property {number} number
 * @property {number} order_number
 * @property {string} order_status_url
 * @property {null|string} original_total_additional_fees_set
 * @property {null|string} original_total_duties_set
 * @property {Array<string>} payment_gateway_names
 * @property {null|string} phone
 * @property {null|string} po_number
 * @property {string} presentment_currency
 * @property {string} processed_at
 * @property {null|string} reference
 * @property {null|string} referring_site
 * @property {null|string} source_identifier
 * @property {string} source_name
 * @property {null|string} source_url
 * @property {string} subtotal_price
 * @property {ORDERS_PAID_subtotal_price_set} subtotal_price_set
 * @property {string} tags
 * @property {boolean} tax_exempt
 * @property {Array} tax_lines
 * @property {boolean} taxes_included
 * @property {boolean} test
 * @property {string} token
 * @property {ORDERS_PAID_total_cash_rounding_payment_adjustment_set} total_cash_rounding_payment_adjustment_set
 * @property {ORDERS_PAID_total_cash_rounding_refund_adjustment_set} total_cash_rounding_refund_adjustment_set
 * @property {string} total_discounts
 * @property {ORDERS_PAID_total_discounts_set} total_discounts_set
 * @property {string} total_line_items_price
 * @property {ORDERS_PAID_total_line_items_price_set} total_line_items_price_set
 * @property {string} total_outstanding
 * @property {string} total_price
 * @property {ORDERS_PAID_total_price_set} total_price_set
 * @property {ORDERS_PAID_total_shipping_price_set} total_shipping_price_set
 * @property {string} total_tax
 * @property {ORDERS_PAID_total_tax_set} total_tax_set
 * @property {string} total_tip_received
 * @property {number} total_weight
 * @property {string} updated_at
 * @property {null|string} user_id
 * @property {ORDERS_PAID_billing_address} billing_address
 * @property {ORDERS_PAID_customer} customer
 * @property {Array} discount_applications
 * @property {Array} fulfillments
 * @property {Array<ORDERS_PAID_line_items>} line_items
 * @property {null|string} payment_terms
 * @property {Array} refunds
 * @property {ORDERS_PAID_shipping_address} shipping_address
 * @property {Array<ORDERS_PAID_shipping_lines>} shipping_lines
 * @property {Array} returns
 */
/**
 * @typedef {Object} CUSTOMER_PAYMENT_METHODS_CREATE_payment_instrument
 * @property {string} last_digits
 * @property {number} month
 * @property {number} year
 * @property {string} name
 * @property {string} brand
 */
/**
 * @typedef {Object} CUSTOMER_PAYMENT_METHODS_CREATE
 * @property {string} admin_graphql_api_id
 * @property {string} token
 * @property {number} customer_id
 * @property {string} admin_graphql_api_customer_id
 * @property {string} instrument_type
 * @property {CUSTOMER_PAYMENT_METHODS_CREATE_payment_instrument} payment_instrument
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_PAUSE_billing_policy
 * @property {string} interval
 * @property {number} interval_count
 * @property {number} min_cycles
 * @property {number} max_cycles
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_PAUSE_delivery_policy
 * @property {string} interval
 * @property {number} interval_count
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_PAUSE
 * @property {string} admin_graphql_api_id
 * @property {number} id
 * @property {SUBSCRIPTION_CONTRACTS_PAUSE_billing_policy} billing_policy
 * @property {string} currency_code
 * @property {number} customer_id
 * @property {string} admin_graphql_api_customer_id
 * @property {SUBSCRIPTION_CONTRACTS_PAUSE_delivery_policy} delivery_policy
 * @property {string} status
 * @property {string} admin_graphql_api_origin_order_id
 * @property {number} origin_order_id
 * @property {string} revision_id
 */
/**
 * @typedef {Object} COMPANIES_DELETE
 * @property {string} name
 * @property {string} note
 * @property {string} external_id
 * @property {string} main_contact_admin_graphql_api_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} customer_since
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_CONTACTS_CREATE_company
 * @property {string} name
 * @property {string} note
 * @property {string} external_id
 * @property {string} main_contact_admin_graphql_api_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} customer_since
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_CONTACTS_CREATE
 * @property {string} customer_admin_graphql_api_id
 * @property {string} title
 * @property {string} locale
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {COMPANY_CONTACTS_CREATE_company} company
 */
/**
 * @typedef {Object} ORDERS_EDITED_order_edit_line_items_additions
 * @property {number} id
 * @property {number} delta
 */
/**
 * @typedef {Object} ORDERS_EDITED_order_edit_line_items_removals
 * @property {number} id
 * @property {number} delta
 */
/**
 * @typedef {Object} ORDERS_EDITED_order_edit_line_items
 * @property {Array<ORDERS_EDITED_order_edit_line_items_additions>} additions
 * @property {Array<ORDERS_EDITED_order_edit_line_items_removals>} removals
 */
/**
 * @typedef {Object} ORDERS_EDITED_order_edit_discounts_line_item
 * @property {Array} additions
 * @property {Array} removals
 */
/**
 * @typedef {Object} ORDERS_EDITED_order_edit_discounts
 * @property {ORDERS_EDITED_order_edit_discounts_line_item} line_item
 */
/**
 * @typedef {Object} ORDERS_EDITED_order_edit_shipping_lines
 * @property {Array} additions
 * @property {Array} removals
 */
/**
 * @typedef {Object} ORDERS_EDITED_order_edit
 * @property {number} id
 * @property {null|string} app_id
 * @property {string} created_at
 * @property {string} committed_at
 * @property {boolean} notify_customer
 * @property {number} order_id
 * @property {string} staff_note
 * @property {null|string} user_id
 * @property {ORDERS_EDITED_order_edit_line_items} line_items
 * @property {ORDERS_EDITED_order_edit_discounts} discounts
 * @property {ORDERS_EDITED_order_edit_shipping_lines} shipping_lines
 */
/**
 * @typedef {Object} ORDERS_EDITED
 * @property {ORDERS_EDITED_order_edit} order_edit
 */
/**
 * @typedef {Object} PAYMENT_SCHEDULES_DUE
 * @property {number} id
 * @property {number} payment_terms_id
 * @property {string} amount
 * @property {string} currency
 * @property {string} issued_at
 * @property {string} due_at
 * @property {string} completed_at
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} APP_PURCHASES_ONE_TIME_UPDATE_app_purchase_one_time
 * @property {string} admin_graphql_api_id
 * @property {string} name
 * @property {string} status
 * @property {string} admin_graphql_api_shop_id
 * @property {string} created_at
 * @property {string} updated_at
 */
/**
 * @typedef {Object} APP_PURCHASES_ONE_TIME_UPDATE
 * @property {APP_PURCHASES_ONE_TIME_UPDATE_app_purchase_one_time} app_purchase_one_time
 */
/**
 * @typedef {Object} SELLING_PLAN_GROUPS_CREATE_selling_plans_billing_policy
 * @property {string} interval
 * @property {number} interval_count
 * @property {null|string} min_cycles
 * @property {null|string} max_cycles
 */
/**
 * @typedef {Object} SELLING_PLAN_GROUPS_CREATE_selling_plans_delivery_policy
 * @property {string} interval
 * @property {number} interval_count
 * @property {Array} anchors
 * @property {null|string} cutoff
 * @property {string} pre_anchor_behavior
 */
/**
 * @typedef {Object} SELLING_PLAN_GROUPS_CREATE_selling_plans
 * @property {string} name
 * @property {Array<string>} options
 * @property {null|string} position
 * @property {null|string} description
 * @property {SELLING_PLAN_GROUPS_CREATE_selling_plans_billing_policy} billing_policy
 * @property {SELLING_PLAN_GROUPS_CREATE_selling_plans_delivery_policy} delivery_policy
 * @property {Array} pricing_policies
 */
/**
 * @typedef {Object} SELLING_PLAN_GROUPS_CREATE
 * @property {string} admin_graphql_api_id
 * @property {number} id
 * @property {string} name
 * @property {string} merchant_code
 * @property {string} admin_graphql_api_app
 * @property {null|string} app_id
 * @property {null|string} description
 * @property {Array<string>} options
 * @property {null|string} position
 * @property {string} summary
 * @property {Array<SELLING_PLAN_GROUPS_CREATE_selling_plans>} selling_plans
 * @property {Array} product_variants
 * @property {Array} products
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_DELETE_company
 * @property {string} name
 * @property {string} note
 * @property {string} external_id
 * @property {string} main_contact_admin_graphql_api_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} customer_since
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_DELETE_billing_address
 * @property {string} address1
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} recipient
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} address2
 * @property {string} phone
 * @property {string} zone_code
 * @property {string} country_code
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {string} company_admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_DELETE_shipping_address
 * @property {string} address1
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} recipient
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} address2
 * @property {string} phone
 * @property {string} zone_code
 * @property {string} country_code
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {string} company_admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_DELETE_tax_registration
 * @property {string} tax_id
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_DELETE
 * @property {string} name
 * @property {string} external_id
 * @property {string} phone
 * @property {string} locale
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} note
 * @property {null|string} buyer_experience_configuration
 * @property {string} admin_graphql_api_id
 * @property {Array<string>} tax_exemptions
 * @property {COMPANY_LOCATIONS_DELETE_company} company
 * @property {COMPANY_LOCATIONS_DELETE_billing_address} billing_address
 * @property {COMPANY_LOCATIONS_DELETE_shipping_address} shipping_address
 * @property {COMPANY_LOCATIONS_DELETE_tax_registration} tax_registration
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_shipping_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_shipping_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_shipping_price_set
 * @property {ORDERS_FULFILLED_current_shipping_price_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_current_shipping_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_subtotal_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_subtotal_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_subtotal_price_set
 * @property {ORDERS_FULFILLED_current_subtotal_price_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_current_subtotal_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_total_discounts_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_total_discounts_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_total_discounts_set
 * @property {ORDERS_FULFILLED_current_total_discounts_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_current_total_discounts_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_total_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_total_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_total_price_set
 * @property {ORDERS_FULFILLED_current_total_price_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_current_total_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_total_tax_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_total_tax_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_current_total_tax_set
 * @property {ORDERS_FULFILLED_current_total_tax_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_current_total_tax_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_subtotal_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_subtotal_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_subtotal_price_set
 * @property {ORDERS_FULFILLED_subtotal_price_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_subtotal_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_cash_rounding_payment_adjustment_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_cash_rounding_payment_adjustment_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_cash_rounding_payment_adjustment_set
 * @property {ORDERS_FULFILLED_total_cash_rounding_payment_adjustment_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_total_cash_rounding_payment_adjustment_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_cash_rounding_refund_adjustment_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_cash_rounding_refund_adjustment_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_cash_rounding_refund_adjustment_set
 * @property {ORDERS_FULFILLED_total_cash_rounding_refund_adjustment_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_total_cash_rounding_refund_adjustment_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_discounts_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_discounts_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_discounts_set
 * @property {ORDERS_FULFILLED_total_discounts_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_total_discounts_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_line_items_price_set
 * @property {ORDERS_FULFILLED_total_line_items_price_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_total_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_price_set
 * @property {ORDERS_FULFILLED_total_price_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_total_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_shipping_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_shipping_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_shipping_price_set
 * @property {ORDERS_FULFILLED_total_shipping_price_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_total_shipping_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_tax_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_tax_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_total_tax_set
 * @property {ORDERS_FULFILLED_total_tax_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_total_tax_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_billing_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_customer_email_marketing_consent
 * @property {string} state
 * @property {null|string} opt_in_level
 * @property {null|string} consent_updated_at
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_customer_default_address
 * @property {number} id
 * @property {number} customer_id
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} company
 * @property {string} address1
 * @property {null|string} address2
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} phone
 * @property {string} name
 * @property {string} province_code
 * @property {string} country_code
 * @property {string} country_name
 * @property {boolean} default
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_customer
 * @property {number} id
 * @property {string} email
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} state
 * @property {null|string} note
 * @property {boolean} verified_email
 * @property {null|string} multipass_identifier
 * @property {boolean} tax_exempt
 * @property {null|string} phone
 * @property {ORDERS_FULFILLED_customer_email_marketing_consent} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} tags
 * @property {string} currency
 * @property {Array} tax_exemptions
 * @property {string} admin_graphql_api_id
 * @property {ORDERS_FULFILLED_customer_default_address} default_address
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_line_items_attributed_staffs
 * @property {string} id
 * @property {number} quantity
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_line_items_price_set
 * @property {ORDERS_FULFILLED_line_items_price_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_line_items_total_discount_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_line_items_total_discount_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_line_items_total_discount_set
 * @property {ORDERS_FULFILLED_line_items_total_discount_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_line_items_total_discount_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_line_items
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {Array<ORDERS_FULFILLED_line_items_attributed_staffs>} attributed_staffs
 * @property {number} current_quantity
 * @property {number} fulfillable_quantity
 * @property {string} fulfillment_service
 * @property {null|string} fulfillment_status
 * @property {boolean} gift_card
 * @property {number} grams
 * @property {string} name
 * @property {string} price
 * @property {ORDERS_FULFILLED_line_items_price_set} price_set
 * @property {boolean} product_exists
 * @property {number} product_id
 * @property {Array} properties
 * @property {number} quantity
 * @property {boolean} requires_shipping
 * @property {string} sku
 * @property {boolean} taxable
 * @property {string} title
 * @property {string} total_discount
 * @property {ORDERS_FULFILLED_line_items_total_discount_set} total_discount_set
 * @property {number} variant_id
 * @property {string} variant_inventory_management
 * @property {null|string} variant_title
 * @property {null|string} vendor
 * @property {Array} tax_lines
 * @property {Array} duties
 * @property {Array} discount_allocations
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_shipping_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_shipping_lines_current_discounted_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_shipping_lines_current_discounted_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_shipping_lines_current_discounted_price_set
 * @property {ORDERS_FULFILLED_shipping_lines_current_discounted_price_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_shipping_lines_current_discounted_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_shipping_lines_discounted_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_shipping_lines_discounted_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_shipping_lines_discounted_price_set
 * @property {ORDERS_FULFILLED_shipping_lines_discounted_price_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_shipping_lines_discounted_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_shipping_lines_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_shipping_lines_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_shipping_lines_price_set
 * @property {ORDERS_FULFILLED_shipping_lines_price_set_shop_money} shop_money
 * @property {ORDERS_FULFILLED_shipping_lines_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_FULFILLED_shipping_lines
 * @property {number} id
 * @property {null|string} carrier_identifier
 * @property {null|string} code
 * @property {ORDERS_FULFILLED_shipping_lines_current_discounted_price_set} current_discounted_price_set
 * @property {string} discounted_price
 * @property {ORDERS_FULFILLED_shipping_lines_discounted_price_set} discounted_price_set
 * @property {boolean} is_removed
 * @property {null|string} phone
 * @property {string} price
 * @property {ORDERS_FULFILLED_shipping_lines_price_set} price_set
 * @property {null|string} requested_fulfillment_service_id
 * @property {string} source
 * @property {string} title
 * @property {Array} tax_lines
 * @property {Array} discount_allocations
 */
/**
 * @typedef {Object} ORDERS_FULFILLED
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {null|string} app_id
 * @property {null|string} browser_ip
 * @property {boolean} buyer_accepts_marketing
 * @property {string} cancel_reason
 * @property {string} cancelled_at
 * @property {null|string} cart_token
 * @property {null|string} checkout_id
 * @property {null|string} checkout_token
 * @property {null|string} client_details
 * @property {null|string} closed_at
 * @property {null|string} confirmation_number
 * @property {boolean} confirmed
 * @property {string} contact_email
 * @property {string} created_at
 * @property {string} currency
 * @property {ORDERS_FULFILLED_current_shipping_price_set} current_shipping_price_set
 * @property {string} current_subtotal_price
 * @property {ORDERS_FULFILLED_current_subtotal_price_set} current_subtotal_price_set
 * @property {null|string} current_total_additional_fees_set
 * @property {string} current_total_discounts
 * @property {ORDERS_FULFILLED_current_total_discounts_set} current_total_discounts_set
 * @property {null|string} current_total_duties_set
 * @property {string} current_total_price
 * @property {ORDERS_FULFILLED_current_total_price_set} current_total_price_set
 * @property {string} current_total_tax
 * @property {ORDERS_FULFILLED_current_total_tax_set} current_total_tax_set
 * @property {string} customer_locale
 * @property {null|string} device_id
 * @property {Array} discount_codes
 * @property {boolean} duties_included
 * @property {string} email
 * @property {boolean} estimated_taxes
 * @property {string} financial_status
 * @property {string} fulfillment_status
 * @property {null|string} landing_site
 * @property {null|string} landing_site_ref
 * @property {null|string} location_id
 * @property {string} merchant_business_entity_id
 * @property {null|string} merchant_of_record_app_id
 * @property {string} name
 * @property {null|string} note
 * @property {Array} note_attributes
 * @property {number} number
 * @property {number} order_number
 * @property {string} order_status_url
 * @property {null|string} original_total_additional_fees_set
 * @property {null|string} original_total_duties_set
 * @property {Array<string>} payment_gateway_names
 * @property {null|string} phone
 * @property {null|string} po_number
 * @property {string} presentment_currency
 * @property {string} processed_at
 * @property {null|string} reference
 * @property {null|string} referring_site
 * @property {null|string} source_identifier
 * @property {string} source_name
 * @property {null|string} source_url
 * @property {string} subtotal_price
 * @property {ORDERS_FULFILLED_subtotal_price_set} subtotal_price_set
 * @property {string} tags
 * @property {boolean} tax_exempt
 * @property {Array} tax_lines
 * @property {boolean} taxes_included
 * @property {boolean} test
 * @property {string} token
 * @property {ORDERS_FULFILLED_total_cash_rounding_payment_adjustment_set} total_cash_rounding_payment_adjustment_set
 * @property {ORDERS_FULFILLED_total_cash_rounding_refund_adjustment_set} total_cash_rounding_refund_adjustment_set
 * @property {string} total_discounts
 * @property {ORDERS_FULFILLED_total_discounts_set} total_discounts_set
 * @property {string} total_line_items_price
 * @property {ORDERS_FULFILLED_total_line_items_price_set} total_line_items_price_set
 * @property {string} total_outstanding
 * @property {string} total_price
 * @property {ORDERS_FULFILLED_total_price_set} total_price_set
 * @property {ORDERS_FULFILLED_total_shipping_price_set} total_shipping_price_set
 * @property {string} total_tax
 * @property {ORDERS_FULFILLED_total_tax_set} total_tax_set
 * @property {string} total_tip_received
 * @property {number} total_weight
 * @property {string} updated_at
 * @property {null|string} user_id
 * @property {ORDERS_FULFILLED_billing_address} billing_address
 * @property {ORDERS_FULFILLED_customer} customer
 * @property {Array} discount_applications
 * @property {Array} fulfillments
 * @property {Array<ORDERS_FULFILLED_line_items>} line_items
 * @property {null|string} payment_terms
 * @property {Array} refunds
 * @property {ORDERS_FULFILLED_shipping_address} shipping_address
 * @property {Array<ORDERS_FULFILLED_shipping_lines>} shipping_lines
 * @property {Array} returns
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP_fulfillment_order_delivery_method
 * @property {string} method_type
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP_fulfillment_order
 * @property {string} id
 * @property {string} status
 * @property {boolean} preparable
 * @property {FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP_fulfillment_order_delivery_method} delivery_method
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP
 * @property {FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP_fulfillment_order} fulfillment_order
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_SPLIT_split_line_items
 * @property {string} id
 * @property {number} quantity
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_SPLIT_fulfillment_order
 * @property {string} id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_SPLIT_remaining_fulfillment_order
 * @property {string} id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_SPLIT_replacement_fulfillment_order
 * @property {string} id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_SPLIT
 * @property {Array<FULFILLMENT_ORDERS_SPLIT_split_line_items>} split_line_items
 * @property {FULFILLMENT_ORDERS_SPLIT_fulfillment_order} fulfillment_order
 * @property {FULFILLMENT_ORDERS_SPLIT_remaining_fulfillment_order} remaining_fulfillment_order
 * @property {FULFILLMENT_ORDERS_SPLIT_replacement_fulfillment_order} replacement_fulfillment_order
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_shipping_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_shipping_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_shipping_price_set
 * @property {ORDERS_PARTIALLY_FULFILLED_current_shipping_price_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_current_shipping_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_subtotal_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_subtotal_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_subtotal_price_set
 * @property {ORDERS_PARTIALLY_FULFILLED_current_subtotal_price_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_current_subtotal_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_total_discounts_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_total_discounts_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_total_discounts_set
 * @property {ORDERS_PARTIALLY_FULFILLED_current_total_discounts_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_current_total_discounts_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_total_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_total_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_total_price_set
 * @property {ORDERS_PARTIALLY_FULFILLED_current_total_price_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_current_total_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_total_tax_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_total_tax_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_current_total_tax_set
 * @property {ORDERS_PARTIALLY_FULFILLED_current_total_tax_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_current_total_tax_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_subtotal_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_subtotal_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_subtotal_price_set
 * @property {ORDERS_PARTIALLY_FULFILLED_subtotal_price_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_subtotal_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_cash_rounding_payment_adjustment_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_cash_rounding_payment_adjustment_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_cash_rounding_payment_adjustment_set
 * @property {ORDERS_PARTIALLY_FULFILLED_total_cash_rounding_payment_adjustment_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_total_cash_rounding_payment_adjustment_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_cash_rounding_refund_adjustment_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_cash_rounding_refund_adjustment_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_cash_rounding_refund_adjustment_set
 * @property {ORDERS_PARTIALLY_FULFILLED_total_cash_rounding_refund_adjustment_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_total_cash_rounding_refund_adjustment_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_discounts_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_discounts_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_discounts_set
 * @property {ORDERS_PARTIALLY_FULFILLED_total_discounts_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_total_discounts_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_line_items_price_set
 * @property {ORDERS_PARTIALLY_FULFILLED_total_line_items_price_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_total_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_price_set
 * @property {ORDERS_PARTIALLY_FULFILLED_total_price_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_total_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_shipping_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_shipping_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_shipping_price_set
 * @property {ORDERS_PARTIALLY_FULFILLED_total_shipping_price_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_total_shipping_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_tax_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_tax_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_total_tax_set
 * @property {ORDERS_PARTIALLY_FULFILLED_total_tax_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_total_tax_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_billing_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_customer_email_marketing_consent
 * @property {string} state
 * @property {null|string} opt_in_level
 * @property {null|string} consent_updated_at
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_customer_default_address
 * @property {number} id
 * @property {number} customer_id
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} company
 * @property {string} address1
 * @property {null|string} address2
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} phone
 * @property {string} name
 * @property {string} province_code
 * @property {string} country_code
 * @property {string} country_name
 * @property {boolean} default
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_customer
 * @property {number} id
 * @property {string} email
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} state
 * @property {null|string} note
 * @property {boolean} verified_email
 * @property {null|string} multipass_identifier
 * @property {boolean} tax_exempt
 * @property {null|string} phone
 * @property {ORDERS_PARTIALLY_FULFILLED_customer_email_marketing_consent} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} tags
 * @property {string} currency
 * @property {Array} tax_exemptions
 * @property {string} admin_graphql_api_id
 * @property {ORDERS_PARTIALLY_FULFILLED_customer_default_address} default_address
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_line_items_attributed_staffs
 * @property {string} id
 * @property {number} quantity
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_line_items_price_set
 * @property {ORDERS_PARTIALLY_FULFILLED_line_items_price_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_line_items_total_discount_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_line_items_total_discount_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_line_items_total_discount_set
 * @property {ORDERS_PARTIALLY_FULFILLED_line_items_total_discount_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_line_items_total_discount_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_line_items
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {Array<ORDERS_PARTIALLY_FULFILLED_line_items_attributed_staffs>} attributed_staffs
 * @property {number} current_quantity
 * @property {number} fulfillable_quantity
 * @property {string} fulfillment_service
 * @property {null|string} fulfillment_status
 * @property {boolean} gift_card
 * @property {number} grams
 * @property {string} name
 * @property {string} price
 * @property {ORDERS_PARTIALLY_FULFILLED_line_items_price_set} price_set
 * @property {boolean} product_exists
 * @property {number} product_id
 * @property {Array} properties
 * @property {number} quantity
 * @property {boolean} requires_shipping
 * @property {string} sku
 * @property {boolean} taxable
 * @property {string} title
 * @property {string} total_discount
 * @property {ORDERS_PARTIALLY_FULFILLED_line_items_total_discount_set} total_discount_set
 * @property {number} variant_id
 * @property {string} variant_inventory_management
 * @property {null|string} variant_title
 * @property {null|string} vendor
 * @property {Array} tax_lines
 * @property {Array} duties
 * @property {Array} discount_allocations
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_shipping_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_shipping_lines_current_discounted_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_shipping_lines_current_discounted_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_shipping_lines_current_discounted_price_set
 * @property {ORDERS_PARTIALLY_FULFILLED_shipping_lines_current_discounted_price_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_shipping_lines_current_discounted_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_shipping_lines_discounted_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_shipping_lines_discounted_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_shipping_lines_discounted_price_set
 * @property {ORDERS_PARTIALLY_FULFILLED_shipping_lines_discounted_price_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_shipping_lines_discounted_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_shipping_lines_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_shipping_lines_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_shipping_lines_price_set
 * @property {ORDERS_PARTIALLY_FULFILLED_shipping_lines_price_set_shop_money} shop_money
 * @property {ORDERS_PARTIALLY_FULFILLED_shipping_lines_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED_shipping_lines
 * @property {number} id
 * @property {null|string} carrier_identifier
 * @property {null|string} code
 * @property {ORDERS_PARTIALLY_FULFILLED_shipping_lines_current_discounted_price_set} current_discounted_price_set
 * @property {string} discounted_price
 * @property {ORDERS_PARTIALLY_FULFILLED_shipping_lines_discounted_price_set} discounted_price_set
 * @property {boolean} is_removed
 * @property {null|string} phone
 * @property {string} price
 * @property {ORDERS_PARTIALLY_FULFILLED_shipping_lines_price_set} price_set
 * @property {null|string} requested_fulfillment_service_id
 * @property {string} source
 * @property {string} title
 * @property {Array} tax_lines
 * @property {Array} discount_allocations
 */
/**
 * @typedef {Object} ORDERS_PARTIALLY_FULFILLED
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {null|string} app_id
 * @property {null|string} browser_ip
 * @property {boolean} buyer_accepts_marketing
 * @property {string} cancel_reason
 * @property {string} cancelled_at
 * @property {null|string} cart_token
 * @property {null|string} checkout_id
 * @property {null|string} checkout_token
 * @property {null|string} client_details
 * @property {null|string} closed_at
 * @property {null|string} confirmation_number
 * @property {boolean} confirmed
 * @property {string} contact_email
 * @property {string} created_at
 * @property {string} currency
 * @property {ORDERS_PARTIALLY_FULFILLED_current_shipping_price_set} current_shipping_price_set
 * @property {string} current_subtotal_price
 * @property {ORDERS_PARTIALLY_FULFILLED_current_subtotal_price_set} current_subtotal_price_set
 * @property {null|string} current_total_additional_fees_set
 * @property {string} current_total_discounts
 * @property {ORDERS_PARTIALLY_FULFILLED_current_total_discounts_set} current_total_discounts_set
 * @property {null|string} current_total_duties_set
 * @property {string} current_total_price
 * @property {ORDERS_PARTIALLY_FULFILLED_current_total_price_set} current_total_price_set
 * @property {string} current_total_tax
 * @property {ORDERS_PARTIALLY_FULFILLED_current_total_tax_set} current_total_tax_set
 * @property {string} customer_locale
 * @property {null|string} device_id
 * @property {Array} discount_codes
 * @property {boolean} duties_included
 * @property {string} email
 * @property {boolean} estimated_taxes
 * @property {string} financial_status
 * @property {string} fulfillment_status
 * @property {null|string} landing_site
 * @property {null|string} landing_site_ref
 * @property {null|string} location_id
 * @property {string} merchant_business_entity_id
 * @property {null|string} merchant_of_record_app_id
 * @property {string} name
 * @property {null|string} note
 * @property {Array} note_attributes
 * @property {number} number
 * @property {number} order_number
 * @property {string} order_status_url
 * @property {null|string} original_total_additional_fees_set
 * @property {null|string} original_total_duties_set
 * @property {Array<string>} payment_gateway_names
 * @property {null|string} phone
 * @property {null|string} po_number
 * @property {string} presentment_currency
 * @property {string} processed_at
 * @property {null|string} reference
 * @property {null|string} referring_site
 * @property {null|string} source_identifier
 * @property {string} source_name
 * @property {null|string} source_url
 * @property {string} subtotal_price
 * @property {ORDERS_PARTIALLY_FULFILLED_subtotal_price_set} subtotal_price_set
 * @property {string} tags
 * @property {boolean} tax_exempt
 * @property {Array} tax_lines
 * @property {boolean} taxes_included
 * @property {boolean} test
 * @property {string} token
 * @property {ORDERS_PARTIALLY_FULFILLED_total_cash_rounding_payment_adjustment_set} total_cash_rounding_payment_adjustment_set
 * @property {ORDERS_PARTIALLY_FULFILLED_total_cash_rounding_refund_adjustment_set} total_cash_rounding_refund_adjustment_set
 * @property {string} total_discounts
 * @property {ORDERS_PARTIALLY_FULFILLED_total_discounts_set} total_discounts_set
 * @property {string} total_line_items_price
 * @property {ORDERS_PARTIALLY_FULFILLED_total_line_items_price_set} total_line_items_price_set
 * @property {string} total_outstanding
 * @property {string} total_price
 * @property {ORDERS_PARTIALLY_FULFILLED_total_price_set} total_price_set
 * @property {ORDERS_PARTIALLY_FULFILLED_total_shipping_price_set} total_shipping_price_set
 * @property {string} total_tax
 * @property {ORDERS_PARTIALLY_FULFILLED_total_tax_set} total_tax_set
 * @property {string} total_tip_received
 * @property {number} total_weight
 * @property {string} updated_at
 * @property {null|string} user_id
 * @property {ORDERS_PARTIALLY_FULFILLED_billing_address} billing_address
 * @property {ORDERS_PARTIALLY_FULFILLED_customer} customer
 * @property {Array} discount_applications
 * @property {Array} fulfillments
 * @property {Array<ORDERS_PARTIALLY_FULFILLED_line_items>} line_items
 * @property {null|string} payment_terms
 * @property {Array} refunds
 * @property {ORDERS_PARTIALLY_FULFILLED_shipping_address} shipping_address
 * @property {Array<ORDERS_PARTIALLY_FULFILLED_shipping_lines>} shipping_lines
 * @property {Array} returns
 */
/**
 * @typedef {Object} LOCALES_CREATE
 * @property {string} locale
 * @property {boolean} published
 */
/**
 * @typedef {Object} DISPUTES_CREATE
 * @property {number} id
 * @property {number} order_id
 * @property {string} type
 * @property {string} amount
 * @property {string} currency
 * @property {string} reason
 * @property {string} network_reason_code
 * @property {string} status
 * @property {string} evidence_due_by
 * @property {null|string} evidence_sent_on
 * @property {null|string} finalized_on
 * @property {string} initiated_at
 */
/**
 * @typedef {Object} SEGMENTS_UPDATE
 * @property {number} id
 * @property {string} name
 * @property {string} query
 * @property {string} creationDate
 * @property {string} lastEditDate
 */
/**
 * @typedef {Object} FULFILLMENT_EVENTS_CREATE
 * @property {number} id
 * @property {number} fulfillment_id
 * @property {string} status
 * @property {string} message
 * @property {string} happened_at
 * @property {null|string} city
 * @property {null|string} province
 * @property {string} country
 * @property {null|string} zip
 * @property {null|string} address1
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {number} shop_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {null|string} estimated_delivery_at
 * @property {number} order_id
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_ASSIGN_company_contact_company
 * @property {string} name
 * @property {string} note
 * @property {string} external_id
 * @property {string} main_contact_admin_graphql_api_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} customer_since
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_ASSIGN_company_contact
 * @property {string} customer_admin_graphql_api_id
 * @property {string} title
 * @property {string} locale
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {COMPANY_CONTACT_ROLES_ASSIGN_company_contact_company} company
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_ASSIGN_company_location_company
 * @property {string} name
 * @property {string} note
 * @property {string} external_id
 * @property {string} main_contact_admin_graphql_api_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} customer_since
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_ASSIGN_company_location_billing_address
 * @property {string} address1
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} recipient
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} address2
 * @property {string} phone
 * @property {string} zone_code
 * @property {string} country_code
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {string} company_admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_ASSIGN_company_location_shipping_address
 * @property {string} address1
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} recipient
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} address2
 * @property {string} phone
 * @property {string} zone_code
 * @property {string} country_code
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {string} company_admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_ASSIGN_company_location_tax_registration
 * @property {string} tax_id
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_ASSIGN_company_location
 * @property {string} name
 * @property {string} external_id
 * @property {string} phone
 * @property {string} locale
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} note
 * @property {null|string} buyer_experience_configuration
 * @property {string} admin_graphql_api_id
 * @property {Array<string>} tax_exemptions
 * @property {COMPANY_CONTACT_ROLES_ASSIGN_company_location_company} company
 * @property {COMPANY_CONTACT_ROLES_ASSIGN_company_location_billing_address} billing_address
 * @property {COMPANY_CONTACT_ROLES_ASSIGN_company_location_shipping_address} shipping_address
 * @property {COMPANY_CONTACT_ROLES_ASSIGN_company_location_tax_registration} tax_registration
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_ASSIGN_company_contact_role
 * @property {string} name
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_ASSIGN
 * @property {COMPANY_CONTACT_ROLES_ASSIGN_company_contact} company_contact
 * @property {COMPANY_CONTACT_ROLES_ASSIGN_company_location} company_location
 * @property {COMPANY_CONTACT_ROLES_ASSIGN_company_contact_role} company_contact_role
 */
/**
 * @typedef {Object} CUSTOMER_GROUPS_CREATE
 * @property {number} id
 * @property {string} name
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} query
 */
/**
 * @typedef {Object} MARKETS_UPDATE_regions
 * @property {string} country_code
 */
/**
 * @typedef {Object} MARKETS_UPDATE
 * @property {number} id
 * @property {string} name
 * @property {boolean} enabled
 * @property {Array<MARKETS_UPDATE_regions>} regions
 */
/**
 * @typedef {Object} PRODUCT_PUBLICATIONS_DELETE
 * @property {null|string} id
 */
/**
 * @typedef {Object} RETURNS_REQUEST_order
 * @property {number} id
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} RETURNS_REQUEST_return_line_items_fulfillment_line_item_line_item
 * @property {number} id
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} RETURNS_REQUEST_return_line_items_fulfillment_line_item
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {RETURNS_REQUEST_return_line_items_fulfillment_line_item_line_item} line_item
 */
/**
 * @typedef {Object} RETURNS_REQUEST_return_line_items
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {RETURNS_REQUEST_return_line_items_fulfillment_line_item} fulfillment_line_item
 * @property {number} quantity
 * @property {string} return_reason
 * @property {string} return_reason_note
 * @property {null|string} customer_note
 * @property {null|string} restocking_fee
 */
/**
 * @typedef {Object} RETURNS_REQUEST
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {string} status
 * @property {RETURNS_REQUEST_order} order
 * @property {number} total_return_line_items
 * @property {null|string} name
 * @property {Array<RETURNS_REQUEST_return_line_items>} return_line_items
 * @property {Array} return_shipping_fees
 * @property {Array} exchange_line_items
 * @property {number} total_exchange_line_items
 */
/**
 * @typedef {Object} DRAFT_ORDERS_CREATE_line_items
 * @property {number} id
 * @property {number} variant_id
 * @property {number} product_id
 * @property {string} title
 * @property {string} variant_title
 * @property {string} sku
 * @property {string} vendor
 * @property {number} quantity
 * @property {boolean} requires_shipping
 * @property {boolean} taxable
 * @property {boolean} gift_card
 * @property {string} fulfillment_service
 * @property {number} grams
 * @property {Array} tax_lines
 * @property {null|string} applied_discount
 * @property {string} name
 * @property {Array} properties
 * @property {boolean} custom
 * @property {string} price
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} DRAFT_ORDERS_CREATE_shipping_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} DRAFT_ORDERS_CREATE_billing_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} DRAFT_ORDERS_CREATE_applied_discount
 * @property {string} description
 * @property {string} value
 * @property {string} title
 * @property {string} amount
 * @property {string} value_type
 */
/**
 * @typedef {Object} DRAFT_ORDERS_CREATE_shipping_line
 * @property {string} title
 * @property {boolean} custom
 * @property {null|string} handle
 * @property {string} price
 */
/**
 * @typedef {Object} DRAFT_ORDERS_CREATE_tax_lines
 * @property {number} rate
 * @property {string} title
 * @property {string} price
 */
/**
 * @typedef {Object} DRAFT_ORDERS_CREATE_payment_terms_payment_schedules
 * @property {number} id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {number} payment_terms_id
 * @property {number} reference_id
 * @property {string} reference_type
 * @property {string} issued_at
 * @property {string} due_at
 * @property {string} completed_at
 * @property {string} amount
 * @property {string} currency
 * @property {string} total_price
 * @property {string} total_price_currency
 * @property {string} balance_due
 * @property {string} balance_due_currency
 * @property {string} outstanding_balance
 * @property {string} outstanding_balance_currency
 */
/**
 * @typedef {Object} DRAFT_ORDERS_CREATE_payment_terms
 * @property {number} id
 * @property {string} payment_terms_name
 * @property {string} payment_terms_type
 * @property {number} due_in_days
 * @property {string} created_at
 * @property {string} updated_at
 * @property {Array<DRAFT_ORDERS_CREATE_payment_terms_payment_schedules>} payment_schedules
 * @property {boolean} can_pay_early
 */
/**
 * @typedef {Object} DRAFT_ORDERS_CREATE_customer_email_marketing_consent
 * @property {string} state
 * @property {null|string} opt_in_level
 * @property {null|string} consent_updated_at
 */
/**
 * @typedef {Object} DRAFT_ORDERS_CREATE_customer_default_address
 * @property {null|string} id
 * @property {number} customer_id
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} company
 * @property {string} address1
 * @property {null|string} address2
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} phone
 * @property {string} name
 * @property {string} province_code
 * @property {string} country_code
 * @property {string} country_name
 * @property {boolean} default
 */
/**
 * @typedef {Object} DRAFT_ORDERS_CREATE_customer
 * @property {number} id
 * @property {string} email
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {string} first_name
 * @property {string} last_name
 * @property {number} orders_count
 * @property {string} state
 * @property {string} total_spent
 * @property {null|string} last_order_id
 * @property {null|string} note
 * @property {boolean} verified_email
 * @property {null|string} multipass_identifier
 * @property {boolean} tax_exempt
 * @property {string} tags
 * @property {null|string} last_order_name
 * @property {string} currency
 * @property {null|string} phone
 * @property {Array} tax_exemptions
 * @property {DRAFT_ORDERS_CREATE_customer_email_marketing_consent} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} admin_graphql_api_id
 * @property {DRAFT_ORDERS_CREATE_customer_default_address} default_address
 */
/**
 * @typedef {Object} DRAFT_ORDERS_CREATE
 * @property {number} id
 * @property {null|string} note
 * @property {string} email
 * @property {boolean} taxes_included
 * @property {string} currency
 * @property {null|string} invoice_sent_at
 * @property {string} created_at
 * @property {string} updated_at
 * @property {boolean} tax_exempt
 * @property {null|string} completed_at
 * @property {string} name
 * @property {string} status
 * @property {Array<DRAFT_ORDERS_CREATE_line_items>} line_items
 * @property {DRAFT_ORDERS_CREATE_shipping_address} shipping_address
 * @property {DRAFT_ORDERS_CREATE_billing_address} billing_address
 * @property {string} invoice_url
 * @property {DRAFT_ORDERS_CREATE_applied_discount} applied_discount
 * @property {null|string} order_id
 * @property {DRAFT_ORDERS_CREATE_shipping_line} shipping_line
 * @property {Array<DRAFT_ORDERS_CREATE_tax_lines>} tax_lines
 * @property {string} tags
 * @property {Array} note_attributes
 * @property {string} total_price
 * @property {string} subtotal_price
 * @property {string} total_tax
 * @property {DRAFT_ORDERS_CREATE_payment_terms} payment_terms
 * @property {string} admin_graphql_api_id
 * @property {DRAFT_ORDERS_CREATE_customer} customer
 */
/**
 * @typedef {Object} VARIANTS_IN_STOCK
 * @property {number} id
 * @property {number} product_id
 * @property {string} title
 * @property {string} price
 * @property {number} position
 * @property {string} inventory_policy
 * @property {string} compare_at_price
 * @property {string} option1
 * @property {null|string} option2
 * @property {null|string} option3
 * @property {string} created_at
 * @property {string} updated_at
 * @property {boolean} taxable
 * @property {null|string} barcode
 * @property {null|string} sku
 * @property {number} inventory_quantity
 * @property {number} old_inventory_quantity
 * @property {string} admin_graphql_api_id
 * @property {null|string} image_id
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_shipping_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_shipping_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_shipping_price_set
 * @property {ORDERS_CREATE_current_shipping_price_set_shop_money} shop_money
 * @property {ORDERS_CREATE_current_shipping_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_subtotal_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_subtotal_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_subtotal_price_set
 * @property {ORDERS_CREATE_current_subtotal_price_set_shop_money} shop_money
 * @property {ORDERS_CREATE_current_subtotal_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_total_discounts_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_total_discounts_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_total_discounts_set
 * @property {ORDERS_CREATE_current_total_discounts_set_shop_money} shop_money
 * @property {ORDERS_CREATE_current_total_discounts_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_total_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_total_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_total_price_set
 * @property {ORDERS_CREATE_current_total_price_set_shop_money} shop_money
 * @property {ORDERS_CREATE_current_total_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_total_tax_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_total_tax_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_current_total_tax_set
 * @property {ORDERS_CREATE_current_total_tax_set_shop_money} shop_money
 * @property {ORDERS_CREATE_current_total_tax_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_subtotal_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_subtotal_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_subtotal_price_set
 * @property {ORDERS_CREATE_subtotal_price_set_shop_money} shop_money
 * @property {ORDERS_CREATE_subtotal_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_cash_rounding_payment_adjustment_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_cash_rounding_payment_adjustment_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_cash_rounding_payment_adjustment_set
 * @property {ORDERS_CREATE_total_cash_rounding_payment_adjustment_set_shop_money} shop_money
 * @property {ORDERS_CREATE_total_cash_rounding_payment_adjustment_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_cash_rounding_refund_adjustment_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_cash_rounding_refund_adjustment_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_cash_rounding_refund_adjustment_set
 * @property {ORDERS_CREATE_total_cash_rounding_refund_adjustment_set_shop_money} shop_money
 * @property {ORDERS_CREATE_total_cash_rounding_refund_adjustment_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_discounts_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_discounts_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_discounts_set
 * @property {ORDERS_CREATE_total_discounts_set_shop_money} shop_money
 * @property {ORDERS_CREATE_total_discounts_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_line_items_price_set
 * @property {ORDERS_CREATE_total_line_items_price_set_shop_money} shop_money
 * @property {ORDERS_CREATE_total_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_price_set
 * @property {ORDERS_CREATE_total_price_set_shop_money} shop_money
 * @property {ORDERS_CREATE_total_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_shipping_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_shipping_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_shipping_price_set
 * @property {ORDERS_CREATE_total_shipping_price_set_shop_money} shop_money
 * @property {ORDERS_CREATE_total_shipping_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_tax_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_tax_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_total_tax_set
 * @property {ORDERS_CREATE_total_tax_set_shop_money} shop_money
 * @property {ORDERS_CREATE_total_tax_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_billing_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_customer_email_marketing_consent
 * @property {string} state
 * @property {null|string} opt_in_level
 * @property {null|string} consent_updated_at
 */
/**
 * @typedef {Object} ORDERS_CREATE_customer_default_address
 * @property {number} id
 * @property {number} customer_id
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} company
 * @property {string} address1
 * @property {null|string} address2
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} phone
 * @property {string} name
 * @property {string} province_code
 * @property {string} country_code
 * @property {string} country_name
 * @property {boolean} default
 */
/**
 * @typedef {Object} ORDERS_CREATE_customer
 * @property {number} id
 * @property {string} email
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} state
 * @property {null|string} note
 * @property {boolean} verified_email
 * @property {null|string} multipass_identifier
 * @property {boolean} tax_exempt
 * @property {null|string} phone
 * @property {ORDERS_CREATE_customer_email_marketing_consent} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} tags
 * @property {string} currency
 * @property {Array} tax_exemptions
 * @property {string} admin_graphql_api_id
 * @property {ORDERS_CREATE_customer_default_address} default_address
 */
/**
 * @typedef {Object} ORDERS_CREATE_line_items_attributed_staffs
 * @property {string} id
 * @property {number} quantity
 */
/**
 * @typedef {Object} ORDERS_CREATE_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_line_items_price_set
 * @property {ORDERS_CREATE_line_items_price_set_shop_money} shop_money
 * @property {ORDERS_CREATE_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_line_items_total_discount_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_line_items_total_discount_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_line_items_total_discount_set
 * @property {ORDERS_CREATE_line_items_total_discount_set_shop_money} shop_money
 * @property {ORDERS_CREATE_line_items_total_discount_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_line_items
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {Array<ORDERS_CREATE_line_items_attributed_staffs>} attributed_staffs
 * @property {number} current_quantity
 * @property {number} fulfillable_quantity
 * @property {string} fulfillment_service
 * @property {null|string} fulfillment_status
 * @property {boolean} gift_card
 * @property {number} grams
 * @property {string} name
 * @property {string} price
 * @property {ORDERS_CREATE_line_items_price_set} price_set
 * @property {boolean} product_exists
 * @property {number} product_id
 * @property {Array} properties
 * @property {number} quantity
 * @property {boolean} requires_shipping
 * @property {string} sku
 * @property {boolean} taxable
 * @property {string} title
 * @property {string} total_discount
 * @property {ORDERS_CREATE_line_items_total_discount_set} total_discount_set
 * @property {number} variant_id
 * @property {string} variant_inventory_management
 * @property {null|string} variant_title
 * @property {null|string} vendor
 * @property {Array} tax_lines
 * @property {Array} duties
 * @property {Array} discount_allocations
 */
/**
 * @typedef {Object} ORDERS_CREATE_shipping_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_shipping_lines_current_discounted_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_shipping_lines_current_discounted_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_shipping_lines_current_discounted_price_set
 * @property {ORDERS_CREATE_shipping_lines_current_discounted_price_set_shop_money} shop_money
 * @property {ORDERS_CREATE_shipping_lines_current_discounted_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_shipping_lines_discounted_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_shipping_lines_discounted_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_shipping_lines_discounted_price_set
 * @property {ORDERS_CREATE_shipping_lines_discounted_price_set_shop_money} shop_money
 * @property {ORDERS_CREATE_shipping_lines_discounted_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_shipping_lines_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_shipping_lines_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CREATE_shipping_lines_price_set
 * @property {ORDERS_CREATE_shipping_lines_price_set_shop_money} shop_money
 * @property {ORDERS_CREATE_shipping_lines_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CREATE_shipping_lines
 * @property {number} id
 * @property {null|string} carrier_identifier
 * @property {null|string} code
 * @property {ORDERS_CREATE_shipping_lines_current_discounted_price_set} current_discounted_price_set
 * @property {string} discounted_price
 * @property {ORDERS_CREATE_shipping_lines_discounted_price_set} discounted_price_set
 * @property {boolean} is_removed
 * @property {null|string} phone
 * @property {string} price
 * @property {ORDERS_CREATE_shipping_lines_price_set} price_set
 * @property {null|string} requested_fulfillment_service_id
 * @property {string} source
 * @property {string} title
 * @property {Array} tax_lines
 * @property {Array} discount_allocations
 */
/**
 * @typedef {Object} ORDERS_CREATE
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {null|string} app_id
 * @property {null|string} browser_ip
 * @property {boolean} buyer_accepts_marketing
 * @property {string} cancel_reason
 * @property {string} cancelled_at
 * @property {null|string} cart_token
 * @property {null|string} checkout_id
 * @property {null|string} checkout_token
 * @property {null|string} client_details
 * @property {null|string} closed_at
 * @property {null|string} confirmation_number
 * @property {boolean} confirmed
 * @property {string} contact_email
 * @property {string} created_at
 * @property {string} currency
 * @property {ORDERS_CREATE_current_shipping_price_set} current_shipping_price_set
 * @property {string} current_subtotal_price
 * @property {ORDERS_CREATE_current_subtotal_price_set} current_subtotal_price_set
 * @property {null|string} current_total_additional_fees_set
 * @property {string} current_total_discounts
 * @property {ORDERS_CREATE_current_total_discounts_set} current_total_discounts_set
 * @property {null|string} current_total_duties_set
 * @property {string} current_total_price
 * @property {ORDERS_CREATE_current_total_price_set} current_total_price_set
 * @property {string} current_total_tax
 * @property {ORDERS_CREATE_current_total_tax_set} current_total_tax_set
 * @property {string} customer_locale
 * @property {null|string} device_id
 * @property {Array} discount_codes
 * @property {boolean} duties_included
 * @property {string} email
 * @property {boolean} estimated_taxes
 * @property {string} financial_status
 * @property {string} fulfillment_status
 * @property {null|string} landing_site
 * @property {null|string} landing_site_ref
 * @property {null|string} location_id
 * @property {string} merchant_business_entity_id
 * @property {null|string} merchant_of_record_app_id
 * @property {string} name
 * @property {null|string} note
 * @property {Array} note_attributes
 * @property {number} number
 * @property {number} order_number
 * @property {string} order_status_url
 * @property {null|string} original_total_additional_fees_set
 * @property {null|string} original_total_duties_set
 * @property {Array<string>} payment_gateway_names
 * @property {null|string} phone
 * @property {null|string} po_number
 * @property {string} presentment_currency
 * @property {string} processed_at
 * @property {null|string} reference
 * @property {null|string} referring_site
 * @property {null|string} source_identifier
 * @property {string} source_name
 * @property {null|string} source_url
 * @property {string} subtotal_price
 * @property {ORDERS_CREATE_subtotal_price_set} subtotal_price_set
 * @property {string} tags
 * @property {boolean} tax_exempt
 * @property {Array} tax_lines
 * @property {boolean} taxes_included
 * @property {boolean} test
 * @property {string} token
 * @property {ORDERS_CREATE_total_cash_rounding_payment_adjustment_set} total_cash_rounding_payment_adjustment_set
 * @property {ORDERS_CREATE_total_cash_rounding_refund_adjustment_set} total_cash_rounding_refund_adjustment_set
 * @property {string} total_discounts
 * @property {ORDERS_CREATE_total_discounts_set} total_discounts_set
 * @property {string} total_line_items_price
 * @property {ORDERS_CREATE_total_line_items_price_set} total_line_items_price_set
 * @property {string} total_outstanding
 * @property {string} total_price
 * @property {ORDERS_CREATE_total_price_set} total_price_set
 * @property {ORDERS_CREATE_total_shipping_price_set} total_shipping_price_set
 * @property {string} total_tax
 * @property {ORDERS_CREATE_total_tax_set} total_tax_set
 * @property {string} total_tip_received
 * @property {number} total_weight
 * @property {string} updated_at
 * @property {null|string} user_id
 * @property {ORDERS_CREATE_billing_address} billing_address
 * @property {ORDERS_CREATE_customer} customer
 * @property {Array} discount_applications
 * @property {Array} fulfillments
 * @property {Array<ORDERS_CREATE_line_items>} line_items
 * @property {null|string} payment_terms
 * @property {Array} refunds
 * @property {ORDERS_CREATE_shipping_address} shipping_address
 * @property {Array<ORDERS_CREATE_shipping_lines>} shipping_lines
 * @property {Array} returns
 */
/**
 * @typedef {Object} DOMAINS_DESTROY_localization
 * @property {null|string} country
 * @property {string} default_locale
 * @property {Array} alternate_locales
 */
/**
 * @typedef {Object} DOMAINS_DESTROY
 * @property {number} id
 * @property {string} host
 * @property {boolean} ssl_enabled
 * @property {DOMAINS_DESTROY_localization} localization
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_MOVED_original_fulfillment_order
 * @property {string} id
 * @property {string} status
 * @property {string} assigned_location_id
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_MOVED_moved_fulfillment_order
 * @property {string} id
 * @property {string} status
 * @property {string} assigned_location_id
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_MOVED_fulfillment_order_line_items_requested
 * @property {string} id
 * @property {number} quantity
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_MOVED_source_location
 * @property {string} id
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_MOVED
 * @property {FULFILLMENT_ORDERS_MOVED_original_fulfillment_order} original_fulfillment_order
 * @property {FULFILLMENT_ORDERS_MOVED_moved_fulfillment_order} moved_fulfillment_order
 * @property {string} destination_location_id
 * @property {Array<FULFILLMENT_ORDERS_MOVED_fulfillment_order_line_items_requested>} fulfillment_order_line_items_requested
 * @property {FULFILLMENT_ORDERS_MOVED_source_location} source_location
 */
/**
 * @typedef {Object} APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT_app_subscription
 * @property {string} admin_graphql_api_id
 * @property {string} name
 * @property {number} balance_used
 * @property {string} capped_amount
 * @property {string} currency_code
 * @property {string} admin_graphql_api_shop_id
 * @property {string} created_at
 * @property {string} updated_at
 */
/**
 * @typedef {Object} APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT
 * @property {APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT_app_subscription} app_subscription
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_shipping_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_shipping_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_shipping_price_set
 * @property {ORDERS_UPDATED_current_shipping_price_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_current_shipping_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_subtotal_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_subtotal_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_subtotal_price_set
 * @property {ORDERS_UPDATED_current_subtotal_price_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_current_subtotal_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_total_discounts_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_total_discounts_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_total_discounts_set
 * @property {ORDERS_UPDATED_current_total_discounts_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_current_total_discounts_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_total_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_total_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_total_price_set
 * @property {ORDERS_UPDATED_current_total_price_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_current_total_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_total_tax_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_total_tax_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_current_total_tax_set
 * @property {ORDERS_UPDATED_current_total_tax_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_current_total_tax_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_subtotal_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_subtotal_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_subtotal_price_set
 * @property {ORDERS_UPDATED_subtotal_price_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_subtotal_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_cash_rounding_payment_adjustment_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_cash_rounding_payment_adjustment_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_cash_rounding_payment_adjustment_set
 * @property {ORDERS_UPDATED_total_cash_rounding_payment_adjustment_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_total_cash_rounding_payment_adjustment_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_cash_rounding_refund_adjustment_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_cash_rounding_refund_adjustment_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_cash_rounding_refund_adjustment_set
 * @property {ORDERS_UPDATED_total_cash_rounding_refund_adjustment_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_total_cash_rounding_refund_adjustment_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_discounts_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_discounts_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_discounts_set
 * @property {ORDERS_UPDATED_total_discounts_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_total_discounts_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_line_items_price_set
 * @property {ORDERS_UPDATED_total_line_items_price_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_total_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_price_set
 * @property {ORDERS_UPDATED_total_price_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_total_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_shipping_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_shipping_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_shipping_price_set
 * @property {ORDERS_UPDATED_total_shipping_price_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_total_shipping_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_tax_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_tax_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_total_tax_set
 * @property {ORDERS_UPDATED_total_tax_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_total_tax_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_billing_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_customer_email_marketing_consent
 * @property {string} state
 * @property {null|string} opt_in_level
 * @property {null|string} consent_updated_at
 */
/**
 * @typedef {Object} ORDERS_UPDATED_customer_default_address
 * @property {number} id
 * @property {number} customer_id
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} company
 * @property {string} address1
 * @property {null|string} address2
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} phone
 * @property {string} name
 * @property {string} province_code
 * @property {string} country_code
 * @property {string} country_name
 * @property {boolean} default
 */
/**
 * @typedef {Object} ORDERS_UPDATED_customer
 * @property {number} id
 * @property {string} email
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} state
 * @property {null|string} note
 * @property {boolean} verified_email
 * @property {null|string} multipass_identifier
 * @property {boolean} tax_exempt
 * @property {null|string} phone
 * @property {ORDERS_UPDATED_customer_email_marketing_consent} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} tags
 * @property {string} currency
 * @property {Array} tax_exemptions
 * @property {string} admin_graphql_api_id
 * @property {ORDERS_UPDATED_customer_default_address} default_address
 */
/**
 * @typedef {Object} ORDERS_UPDATED_line_items_attributed_staffs
 * @property {string} id
 * @property {number} quantity
 */
/**
 * @typedef {Object} ORDERS_UPDATED_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_line_items_price_set
 * @property {ORDERS_UPDATED_line_items_price_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_line_items_total_discount_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_line_items_total_discount_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_line_items_total_discount_set
 * @property {ORDERS_UPDATED_line_items_total_discount_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_line_items_total_discount_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_line_items
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {Array<ORDERS_UPDATED_line_items_attributed_staffs>} attributed_staffs
 * @property {number} current_quantity
 * @property {number} fulfillable_quantity
 * @property {string} fulfillment_service
 * @property {null|string} fulfillment_status
 * @property {boolean} gift_card
 * @property {number} grams
 * @property {string} name
 * @property {string} price
 * @property {ORDERS_UPDATED_line_items_price_set} price_set
 * @property {boolean} product_exists
 * @property {number} product_id
 * @property {Array} properties
 * @property {number} quantity
 * @property {boolean} requires_shipping
 * @property {string} sku
 * @property {boolean} taxable
 * @property {string} title
 * @property {string} total_discount
 * @property {ORDERS_UPDATED_line_items_total_discount_set} total_discount_set
 * @property {number} variant_id
 * @property {string} variant_inventory_management
 * @property {null|string} variant_title
 * @property {null|string} vendor
 * @property {Array} tax_lines
 * @property {Array} duties
 * @property {Array} discount_allocations
 */
/**
 * @typedef {Object} ORDERS_UPDATED_shipping_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_shipping_lines_current_discounted_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_shipping_lines_current_discounted_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_shipping_lines_current_discounted_price_set
 * @property {ORDERS_UPDATED_shipping_lines_current_discounted_price_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_shipping_lines_current_discounted_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_shipping_lines_discounted_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_shipping_lines_discounted_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_shipping_lines_discounted_price_set
 * @property {ORDERS_UPDATED_shipping_lines_discounted_price_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_shipping_lines_discounted_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_shipping_lines_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_shipping_lines_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_UPDATED_shipping_lines_price_set
 * @property {ORDERS_UPDATED_shipping_lines_price_set_shop_money} shop_money
 * @property {ORDERS_UPDATED_shipping_lines_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_UPDATED_shipping_lines
 * @property {number} id
 * @property {null|string} carrier_identifier
 * @property {null|string} code
 * @property {ORDERS_UPDATED_shipping_lines_current_discounted_price_set} current_discounted_price_set
 * @property {string} discounted_price
 * @property {ORDERS_UPDATED_shipping_lines_discounted_price_set} discounted_price_set
 * @property {boolean} is_removed
 * @property {null|string} phone
 * @property {string} price
 * @property {ORDERS_UPDATED_shipping_lines_price_set} price_set
 * @property {null|string} requested_fulfillment_service_id
 * @property {string} source
 * @property {string} title
 * @property {Array} tax_lines
 * @property {Array} discount_allocations
 */
/**
 * @typedef {Object} ORDERS_UPDATED
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {null|string} app_id
 * @property {null|string} browser_ip
 * @property {boolean} buyer_accepts_marketing
 * @property {string} cancel_reason
 * @property {string} cancelled_at
 * @property {null|string} cart_token
 * @property {null|string} checkout_id
 * @property {null|string} checkout_token
 * @property {null|string} client_details
 * @property {null|string} closed_at
 * @property {null|string} confirmation_number
 * @property {boolean} confirmed
 * @property {string} contact_email
 * @property {string} created_at
 * @property {string} currency
 * @property {ORDERS_UPDATED_current_shipping_price_set} current_shipping_price_set
 * @property {string} current_subtotal_price
 * @property {ORDERS_UPDATED_current_subtotal_price_set} current_subtotal_price_set
 * @property {null|string} current_total_additional_fees_set
 * @property {string} current_total_discounts
 * @property {ORDERS_UPDATED_current_total_discounts_set} current_total_discounts_set
 * @property {null|string} current_total_duties_set
 * @property {string} current_total_price
 * @property {ORDERS_UPDATED_current_total_price_set} current_total_price_set
 * @property {string} current_total_tax
 * @property {ORDERS_UPDATED_current_total_tax_set} current_total_tax_set
 * @property {string} customer_locale
 * @property {null|string} device_id
 * @property {Array} discount_codes
 * @property {boolean} duties_included
 * @property {string} email
 * @property {boolean} estimated_taxes
 * @property {string} financial_status
 * @property {string} fulfillment_status
 * @property {null|string} landing_site
 * @property {null|string} landing_site_ref
 * @property {null|string} location_id
 * @property {string} merchant_business_entity_id
 * @property {null|string} merchant_of_record_app_id
 * @property {string} name
 * @property {null|string} note
 * @property {Array} note_attributes
 * @property {number} number
 * @property {number} order_number
 * @property {string} order_status_url
 * @property {null|string} original_total_additional_fees_set
 * @property {null|string} original_total_duties_set
 * @property {Array<string>} payment_gateway_names
 * @property {null|string} phone
 * @property {null|string} po_number
 * @property {string} presentment_currency
 * @property {string} processed_at
 * @property {null|string} reference
 * @property {null|string} referring_site
 * @property {null|string} source_identifier
 * @property {string} source_name
 * @property {null|string} source_url
 * @property {string} subtotal_price
 * @property {ORDERS_UPDATED_subtotal_price_set} subtotal_price_set
 * @property {string} tags
 * @property {boolean} tax_exempt
 * @property {Array} tax_lines
 * @property {boolean} taxes_included
 * @property {boolean} test
 * @property {string} token
 * @property {ORDERS_UPDATED_total_cash_rounding_payment_adjustment_set} total_cash_rounding_payment_adjustment_set
 * @property {ORDERS_UPDATED_total_cash_rounding_refund_adjustment_set} total_cash_rounding_refund_adjustment_set
 * @property {string} total_discounts
 * @property {ORDERS_UPDATED_total_discounts_set} total_discounts_set
 * @property {string} total_line_items_price
 * @property {ORDERS_UPDATED_total_line_items_price_set} total_line_items_price_set
 * @property {string} total_outstanding
 * @property {string} total_price
 * @property {ORDERS_UPDATED_total_price_set} total_price_set
 * @property {ORDERS_UPDATED_total_shipping_price_set} total_shipping_price_set
 * @property {string} total_tax
 * @property {ORDERS_UPDATED_total_tax_set} total_tax_set
 * @property {string} total_tip_received
 * @property {number} total_weight
 * @property {string} updated_at
 * @property {null|string} user_id
 * @property {ORDERS_UPDATED_billing_address} billing_address
 * @property {ORDERS_UPDATED_customer} customer
 * @property {Array} discount_applications
 * @property {Array} fulfillments
 * @property {Array<ORDERS_UPDATED_line_items>} line_items
 * @property {null|string} payment_terms
 * @property {Array} refunds
 * @property {ORDERS_UPDATED_shipping_address} shipping_address
 * @property {Array<ORDERS_UPDATED_shipping_lines>} shipping_lines
 * @property {Array} returns
 */
/**
 * @typedef {Object} DISCOUNTS_CREATE
 * @property {string} admin_graphql_api_id
 * @property {string} title
 * @property {string} status
 * @property {string} created_at
 * @property {string} updated_at
 */
/**
 * @typedef {Object} ORDER_TRANSACTIONS_CREATE_payment_details
 * @property {null|string} credit_card_bin
 * @property {null|string} avs_result_code
 * @property {null|string} cvv_result_code
 * @property {string} credit_card_number
 * @property {string} credit_card_company
 * @property {null|string} buyer_action_info
 * @property {null|string} credit_card_name
 * @property {null|string} credit_card_wallet
 * @property {null|string} credit_card_expiration_month
 * @property {null|string} credit_card_expiration_year
 * @property {string} payment_method_name
 */
/**
 * @typedef {Object} ORDER_TRANSACTIONS_CREATE_receipt
 */
/**
 * @typedef {Object} ORDER_TRANSACTIONS_CREATE_total_unsettled_set_presentment_money
 * @property {string} amount
 * @property {string} currency
 */
/**
 * @typedef {Object} ORDER_TRANSACTIONS_CREATE_total_unsettled_set_shop_money
 * @property {string} amount
 * @property {string} currency
 */
/**
 * @typedef {Object} ORDER_TRANSACTIONS_CREATE_total_unsettled_set
 * @property {ORDER_TRANSACTIONS_CREATE_total_unsettled_set_presentment_money} presentment_money
 * @property {ORDER_TRANSACTIONS_CREATE_total_unsettled_set_shop_money} shop_money
 */
/**
 * @typedef {Object} ORDER_TRANSACTIONS_CREATE
 * @property {number} id
 * @property {number} order_id
 * @property {string} kind
 * @property {string} gateway
 * @property {string} status
 * @property {null|string} message
 * @property {string} created_at
 * @property {boolean} test
 * @property {string} authorization
 * @property {null|string} location_id
 * @property {null|string} user_id
 * @property {null|string} parent_id
 * @property {null|string} processed_at
 * @property {null|string} device_id
 * @property {null|string} error_code
 * @property {string} source_name
 * @property {ORDER_TRANSACTIONS_CREATE_payment_details} payment_details
 * @property {ORDER_TRANSACTIONS_CREATE_receipt} receipt
 * @property {string} amount
 * @property {string} currency
 * @property {string} payment_id
 * @property {ORDER_TRANSACTIONS_CREATE_total_unsettled_set} total_unsettled_set
 * @property {boolean} manual_payment_gateway
 * @property {null|string} amount_rounding
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} DOMAINS_CREATE_localization
 * @property {null|string} country
 * @property {string} default_locale
 * @property {Array} alternate_locales
 */
/**
 * @typedef {Object} DOMAINS_CREATE
 * @property {number} id
 * @property {string} host
 * @property {boolean} ssl_enabled
 * @property {DOMAINS_CREATE_localization} localization
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_FINISH_metadata
 * @property {string} action
 * @property {string} type
 * @property {string} resource
 * @property {string} fullSyncId
 * @property {Array} truncatedFields
 * @property {string} occurred_at
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_FINISH_productFeed
 * @property {string} id
 * @property {string} shop_id
 * @property {string} country
 * @property {string} language
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_FINISH_fullSync
 * @property {string} createdAt
 * @property {null|string} errorCode
 * @property {string} status
 * @property {number} count
 * @property {null|string} url
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_FINISH
 * @property {PRODUCT_FEEDS_FULL_SYNC_FINISH_metadata} metadata
 * @property {PRODUCT_FEEDS_FULL_SYNC_FINISH_productFeed} productFeed
 * @property {PRODUCT_FEEDS_FULL_SYNC_FINISH_fullSync} fullSync
 */
/**
 * @typedef {Object} COLLECTION_PUBLICATIONS_UPDATE
 * @property {null|string} id
 * @property {null|string} publication_id
 * @property {string} published_at
 * @property {boolean} published
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {number} collection_id
 */
/**
 * @typedef {Object} LOCATIONS_DELETE
 * @property {number} id
 */
/**
 * @typedef {Object} FULFILLMENTS_CREATE_destination
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} FULFILLMENTS_CREATE_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} FULFILLMENTS_CREATE_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} FULFILLMENTS_CREATE_line_items_price_set
 * @property {FULFILLMENTS_CREATE_line_items_price_set_shop_money} shop_money
 * @property {FULFILLMENTS_CREATE_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} FULFILLMENTS_CREATE_line_items_total_discount_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} FULFILLMENTS_CREATE_line_items_total_discount_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} FULFILLMENTS_CREATE_line_items_total_discount_set
 * @property {FULFILLMENTS_CREATE_line_items_total_discount_set_shop_money} shop_money
 * @property {FULFILLMENTS_CREATE_line_items_total_discount_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} FULFILLMENTS_CREATE_line_items
 * @property {number} id
 * @property {number} variant_id
 * @property {string} title
 * @property {number} quantity
 * @property {string} sku
 * @property {null|string} variant_title
 * @property {null|string} vendor
 * @property {string} fulfillment_service
 * @property {number} product_id
 * @property {boolean} requires_shipping
 * @property {boolean} taxable
 * @property {boolean} gift_card
 * @property {string} name
 * @property {string} variant_inventory_management
 * @property {Array} properties
 * @property {boolean} product_exists
 * @property {number} fulfillable_quantity
 * @property {number} grams
 * @property {string} price
 * @property {string} total_discount
 * @property {null|string} fulfillment_status
 * @property {FULFILLMENTS_CREATE_line_items_price_set} price_set
 * @property {FULFILLMENTS_CREATE_line_items_total_discount_set} total_discount_set
 * @property {Array} discount_allocations
 * @property {Array} duties
 * @property {string} admin_graphql_api_id
 * @property {Array} tax_lines
 */
/**
 * @typedef {Object} FULFILLMENTS_CREATE_receipt
 */
/**
 * @typedef {Object} FULFILLMENTS_CREATE
 * @property {number} id
 * @property {number} order_id
 * @property {string} status
 * @property {string} created_at
 * @property {null|string} service
 * @property {string} updated_at
 * @property {string} tracking_company
 * @property {null|string} shipment_status
 * @property {null|string} location_id
 * @property {null|string} origin_address
 * @property {string} email
 * @property {FULFILLMENTS_CREATE_destination} destination
 * @property {Array<FULFILLMENTS_CREATE_line_items>} line_items
 * @property {string} tracking_number
 * @property {Array<string>} tracking_numbers
 * @property {string} tracking_url
 * @property {Array<string>} tracking_urls
 * @property {FULFILLMENTS_CREATE_receipt} receipt
 * @property {string} name
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} CUSTOMERS_DELETE
 * @property {number} id
 * @property {null|string} phone
 * @property {Array} addresses
 * @property {Array} tax_exemptions
 * @property {null|string} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED_original_fulfillment_order
 * @property {string} id
 * @property {string} status
 * @property {string} request_status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED_submitted_fulfillment_order
 * @property {string} id
 * @property {string} status
 * @property {string} request_status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED_fulfillment_order_merchant_request
 * @property {string} id
 * @property {string} message
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED
 * @property {FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED_original_fulfillment_order} original_fulfillment_order
 * @property {FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED_submitted_fulfillment_order} submitted_fulfillment_order
 * @property {FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED_fulfillment_order_merchant_request} fulfillment_order_merchant_request
 */
/**
 * @typedef {Object} CUSTOMERS_ENABLE
 * @property {number} id
 * @property {string} email
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} first_name
 * @property {string} last_name
 * @property {number} orders_count
 * @property {string} state
 * @property {string} total_spent
 * @property {null|string} last_order_id
 * @property {string} note
 * @property {boolean} verified_email
 * @property {null|string} multipass_identifier
 * @property {boolean} tax_exempt
 * @property {string} tags
 * @property {null|string} last_order_name
 * @property {string} currency
 * @property {null|string} phone
 * @property {Array} addresses
 * @property {Array} tax_exemptions
 * @property {null|string} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} SUBSCRIPTION_BILLING_CYCLES_SKIP
 * @property {number} subscription_contract_id
 * @property {string} cycle_start_at
 * @property {string} cycle_end_at
 * @property {number} cycle_index
 * @property {null|string} contract_edit
 * @property {string} billing_attempt_expected_date
 * @property {boolean} skipped
 * @property {boolean} edited
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_ADD_scheduled_product_listing_variants_option_values
 * @property {number} option_id
 * @property {string} name
 * @property {string} value
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_ADD_scheduled_product_listing_variants
 * @property {number} id
 * @property {string} title
 * @property {Array<SCHEDULED_PRODUCT_LISTINGS_ADD_scheduled_product_listing_variants_option_values>} option_values
 * @property {string} price
 * @property {string} formatted_price
 * @property {string} compare_at_price
 * @property {number} grams
 * @property {boolean} requires_shipping
 * @property {null|string} sku
 * @property {null|string} barcode
 * @property {boolean} taxable
 * @property {number} position
 * @property {boolean} available
 * @property {string} inventory_policy
 * @property {number} inventory_quantity
 * @property {null|string} inventory_management
 * @property {string} fulfillment_service
 * @property {number} weight
 * @property {string} weight_unit
 * @property {null|string} image_id
 * @property {string} created_at
 * @property {string} updated_at
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_ADD_scheduled_product_listing_options
 * @property {number} id
 * @property {string} name
 * @property {number} product_id
 * @property {number} position
 * @property {Array<string>} values
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_ADD_scheduled_product_listing
 * @property {number} product_id
 * @property {null|string} created_at
 * @property {string} updated_at
 * @property {string} body_html
 * @property {string} handle
 * @property {string} product_type
 * @property {string} title
 * @property {string} vendor
 * @property {boolean} available
 * @property {string} tags
 * @property {Array<SCHEDULED_PRODUCT_LISTINGS_ADD_scheduled_product_listing_variants>} variants
 * @property {null|string} publish_at
 * @property {Array} images
 * @property {Array<SCHEDULED_PRODUCT_LISTINGS_ADD_scheduled_product_listing_options>} options
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_ADD
 * @property {SCHEDULED_PRODUCT_LISTINGS_ADD_scheduled_product_listing} scheduled_product_listing
 */
/**
 * @typedef {Object} PROFILES_DELETE
 * @property {number} id
 */
/**
 * @typedef {Object} REVERSE_FULFILLMENT_ORDERS_DISPOSE_dispositions_reverse_fulfillment_order_line_item
 * @property {number} id
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} REVERSE_FULFILLMENT_ORDERS_DISPOSE_dispositions_location
 * @property {number} id
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} REVERSE_FULFILLMENT_ORDERS_DISPOSE_dispositions
 * @property {REVERSE_FULFILLMENT_ORDERS_DISPOSE_dispositions_reverse_fulfillment_order_line_item} reverse_fulfillment_order_line_item
 * @property {null|string} reverse_delivery_line_item
 * @property {string} type
 * @property {REVERSE_FULFILLMENT_ORDERS_DISPOSE_dispositions_location} location
 * @property {number} quantity
 */
/**
 * @typedef {Object} REVERSE_FULFILLMENT_ORDERS_DISPOSE
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {Array<REVERSE_FULFILLMENT_ORDERS_DISPOSE_dispositions>} dispositions
 * @property {number} total_dispositions
 */
/**
 * @typedef {Object} PAYMENT_TERMS_CREATE_payment_schedules
 * @property {number} id
 * @property {number} payment_terms_id
 * @property {string} amount
 * @property {string} currency
 * @property {string} issued_at
 * @property {string} due_at
 * @property {string} completed_at
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} PAYMENT_TERMS_CREATE
 * @property {number} id
 * @property {string} payment_terms_name
 * @property {string} payment_terms_type
 * @property {number} due_in_days
 * @property {string} created_at
 * @property {string} updated_at
 * @property {Array<PAYMENT_TERMS_CREATE_payment_schedules>} payment_schedules
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} PRODUCTS_DELETE
 * @property {number} id
 */
/**
 * @typedef {Object} CHECKOUTS_UPDATE_line_items_tax_lines
 * @property {string} price
 * @property {number} position
 * @property {number} rate
 * @property {string} title
 * @property {string} source
 * @property {string} zone
 * @property {null|string} jurisdiction_id
 * @property {null|string} jurisdiction_type
 * @property {null|string} jurisdiction_source
 * @property {null|string} reporting_taxable_amount
 * @property {null|string} reporting_non_taxable_amount
 * @property {null|string} reporting_exempt_amount
 * @property {null|string} reporting_jurisdiction_name
 * @property {null|string} reporting_jurisdiction_type
 * @property {null|string} reporting_jurisdiction_code
 * @property {null|string} tax_api_client_id
 * @property {string} tax_calculation_price
 * @property {null|string} tax_registration_id
 * @property {number} compare_at
 * @property {boolean} channel_liable
 */
/**
 * @typedef {Object} CHECKOUTS_UPDATE_line_items_unit_price_measurement
 * @property {null|string} measured_type
 * @property {null|string} quantity_value
 * @property {null|string} quantity_unit
 * @property {null|string} reference_value
 * @property {null|string} reference_unit
 */
/**
 * @typedef {Object} CHECKOUTS_UPDATE_line_items
 * @property {Array} applied_discounts
 * @property {Array} discount_allocations
 * @property {string} key
 * @property {number} destination_location_id
 * @property {string} fulfillment_service
 * @property {boolean} gift_card
 * @property {number} grams
 * @property {number} origin_location_id
 * @property {string} presentment_title
 * @property {string} presentment_variant_title
 * @property {number} product_id
 * @property {null|string} properties
 * @property {number} quantity
 * @property {boolean} requires_shipping
 * @property {string} sku
 * @property {Array<CHECKOUTS_UPDATE_line_items_tax_lines>} tax_lines
 * @property {boolean} taxable
 * @property {string} title
 * @property {number} variant_id
 * @property {string} variant_title
 * @property {string} variant_price
 * @property {string} vendor
 * @property {null|string} user_id
 * @property {CHECKOUTS_UPDATE_line_items_unit_price_measurement} unit_price_measurement
 * @property {null|string} rank
 * @property {null|string} compare_at_price
 * @property {string} line_price
 * @property {string} price
 */
/**
 * @typedef {Object} CHECKOUTS_UPDATE_tax_lines
 * @property {string} price
 * @property {number} rate
 * @property {string} title
 * @property {boolean} channel_liable
 */
/**
 * @typedef {Object} CHECKOUTS_UPDATE_billing_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} CHECKOUTS_UPDATE_shipping_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} CHECKOUTS_UPDATE_customer_email_marketing_consent
 * @property {string} state
 * @property {null|string} opt_in_level
 * @property {null|string} consent_updated_at
 */
/**
 * @typedef {Object} CHECKOUTS_UPDATE_customer_default_address
 * @property {null|string} id
 * @property {number} customer_id
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} company
 * @property {string} address1
 * @property {null|string} address2
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} phone
 * @property {string} name
 * @property {string} province_code
 * @property {string} country_code
 * @property {string} country_name
 * @property {boolean} default
 */
/**
 * @typedef {Object} CHECKOUTS_UPDATE_customer
 * @property {number} id
 * @property {string} email
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {string} first_name
 * @property {string} last_name
 * @property {number} orders_count
 * @property {string} state
 * @property {string} total_spent
 * @property {null|string} last_order_id
 * @property {null|string} note
 * @property {boolean} verified_email
 * @property {null|string} multipass_identifier
 * @property {boolean} tax_exempt
 * @property {string} tags
 * @property {null|string} last_order_name
 * @property {string} currency
 * @property {null|string} phone
 * @property {Array} tax_exemptions
 * @property {CHECKOUTS_UPDATE_customer_email_marketing_consent} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} admin_graphql_api_id
 * @property {CHECKOUTS_UPDATE_customer_default_address} default_address
 */
/**
 * @typedef {Object} CHECKOUTS_UPDATE
 * @property {number} id
 * @property {string} token
 * @property {string} cart_token
 * @property {string} email
 * @property {null|string} gateway
 * @property {boolean} buyer_accepts_marketing
 * @property {string} created_at
 * @property {string} updated_at
 * @property {null|string} landing_site
 * @property {null|string} note
 * @property {Array} note_attributes
 * @property {null|string} referring_site
 * @property {Array} shipping_lines
 * @property {boolean} taxes_included
 * @property {number} total_weight
 * @property {string} currency
 * @property {null|string} completed_at
 * @property {null|string} closed_at
 * @property {null|string} user_id
 * @property {null|string} location_id
 * @property {null|string} source_identifier
 * @property {null|string} source_url
 * @property {null|string} device_id
 * @property {null|string} phone
 * @property {null|string} customer_locale
 * @property {Array<CHECKOUTS_UPDATE_line_items>} line_items
 * @property {string} name
 * @property {null|string} source
 * @property {string} abandoned_checkout_url
 * @property {Array} discount_codes
 * @property {Array<CHECKOUTS_UPDATE_tax_lines>} tax_lines
 * @property {string} source_name
 * @property {string} presentment_currency
 * @property {boolean} buyer_accepts_sms_marketing
 * @property {null|string} sms_marketing_phone
 * @property {string} total_discounts
 * @property {string} total_line_items_price
 * @property {string} total_price
 * @property {string} total_tax
 * @property {string} subtotal_price
 * @property {null|string} total_duties
 * @property {null|string} reservation_token
 * @property {CHECKOUTS_UPDATE_billing_address} billing_address
 * @property {CHECKOUTS_UPDATE_shipping_address} shipping_address
 * @property {CHECKOUTS_UPDATE_customer} customer
 */
/**
 * @typedef {Object} APP_SUBSCRIPTIONS_UPDATE_app_subscription
 * @property {string} admin_graphql_api_id
 * @property {string} name
 * @property {string} status
 * @property {string} admin_graphql_api_shop_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} currency
 * @property {string} capped_amount
 */
/**
 * @typedef {Object} APP_SUBSCRIPTIONS_UPDATE
 * @property {APP_SUBSCRIPTIONS_UPDATE_app_subscription} app_subscription
 */
/**
 * @typedef {Object} SUBSCRIPTION_BILLING_CYCLE_EDITS_DELETE
 * @property {number} subscription_contract_id
 * @property {string} cycle_start_at
 * @property {string} cycle_end_at
 * @property {number} cycle_index
 * @property {null|string} contract_edit
 * @property {string} billing_attempt_expected_date
 * @property {boolean} skipped
 * @property {boolean} edited
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_REJECTED_fulfillment_order
 * @property {string} id
 * @property {string} status
 * @property {string} request_status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_REJECTED
 * @property {FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_REJECTED_fulfillment_order} fulfillment_order
 * @property {string} message
 */
/**
 * @typedef {Object} CUSTOMER_PAYMENT_METHODS_UPDATE_payment_instrument
 * @property {string} last_digits
 * @property {number} month
 * @property {number} year
 * @property {string} name
 * @property {string} brand
 */
/**
 * @typedef {Object} CUSTOMER_PAYMENT_METHODS_UPDATE
 * @property {string} admin_graphql_api_id
 * @property {string} token
 * @property {number} customer_id
 * @property {string} admin_graphql_api_customer_id
 * @property {string} instrument_type
 * @property {CUSTOMER_PAYMENT_METHODS_UPDATE_payment_instrument} payment_instrument
 */
/**
 * @typedef {Object} COLLECTION_LISTINGS_ADD_collection_listing
 * @property {number} collection_id
 * @property {null|string} updated_at
 * @property {string} body_html
 * @property {null|string} default_product_image
 * @property {string} handle
 * @property {null|string} image
 * @property {string} title
 * @property {null|string} sort_order
 * @property {string} published_at
 */
/**
 * @typedef {Object} COLLECTION_LISTINGS_ADD
 * @property {COLLECTION_LISTINGS_ADD_collection_listing} collection_listing
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED_fulfillment_order
 * @property {string} id
 * @property {string} status
 * @property {string} request_status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED_fulfillment_order_merchant_request
 * @property {string} id
 * @property {string} message
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED
 * @property {FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED_fulfillment_order} fulfillment_order
 * @property {FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED_fulfillment_order_merchant_request} fulfillment_order_merchant_request
 */
/**
 * @typedef {Object} COMPANY_CONTACTS_UPDATE_company
 * @property {string} name
 * @property {string} note
 * @property {string} external_id
 * @property {string} main_contact_admin_graphql_api_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} customer_since
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_CONTACTS_UPDATE
 * @property {string} customer_admin_graphql_api_id
 * @property {string} title
 * @property {string} locale
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {COMPANY_CONTACTS_UPDATE_company} company
 */
/**
 * @typedef {Object} THEMES_UPDATE
 * @property {number} id
 * @property {string} name
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} role
 * @property {number} theme_store_id
 * @property {boolean} previewable
 * @property {boolean} processing
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS
 * @property {null|string} id
 * @property {null|string} admin_graphql_api_id
 * @property {string} idempotency_key
 * @property {number} order_id
 * @property {string} admin_graphql_api_order_id
 * @property {number} subscription_contract_id
 * @property {string} admin_graphql_api_subscription_contract_id
 * @property {boolean} ready
 * @property {null|string} error_message
 * @property {null|string} error_code
 */
/**
 * @typedef {Object} DISCOUNTS_REDEEMCODE_REMOVED_redeem_code
 * @property {string} id
 * @property {string} code
 */
/**
 * @typedef {Object} DISCOUNTS_REDEEMCODE_REMOVED
 * @property {string} admin_graphql_api_id
 * @property {DISCOUNTS_REDEEMCODE_REMOVED_redeem_code} redeem_code
 * @property {string} updated_at
 */
/**
 * @typedef {Object} LOCALES_UPDATE
 * @property {string} locale
 * @property {boolean} published
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_RESCHEDULED_fulfillment_order
 * @property {string} id
 * @property {string} status
 * @property {string} fulfill_at
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_RESCHEDULED
 * @property {FULFILLMENT_ORDERS_RESCHEDULED_fulfillment_order} fulfillment_order
 */
/**
 * @typedef {Object} SELLING_PLAN_GROUPS_UPDATE_selling_plans_billing_policy
 * @property {string} interval
 * @property {number} interval_count
 * @property {null|string} min_cycles
 * @property {null|string} max_cycles
 */
/**
 * @typedef {Object} SELLING_PLAN_GROUPS_UPDATE_selling_plans_delivery_policy
 * @property {string} interval
 * @property {number} interval_count
 * @property {Array} anchors
 * @property {null|string} cutoff
 * @property {string} pre_anchor_behavior
 */
/**
 * @typedef {Object} SELLING_PLAN_GROUPS_UPDATE_selling_plans
 * @property {string} name
 * @property {Array<string>} options
 * @property {null|string} position
 * @property {null|string} description
 * @property {SELLING_PLAN_GROUPS_UPDATE_selling_plans_billing_policy} billing_policy
 * @property {SELLING_PLAN_GROUPS_UPDATE_selling_plans_delivery_policy} delivery_policy
 * @property {Array} pricing_policies
 */
/**
 * @typedef {Object} SELLING_PLAN_GROUPS_UPDATE
 * @property {string} admin_graphql_api_id
 * @property {number} id
 * @property {string} name
 * @property {string} merchant_code
 * @property {string} admin_graphql_api_app
 * @property {null|string} app_id
 * @property {null|string} description
 * @property {Array<string>} options
 * @property {null|string} position
 * @property {string} summary
 * @property {Array<SELLING_PLAN_GROUPS_UPDATE_selling_plans>} selling_plans
 * @property {Array} product_variants
 * @property {Array} products
 */
/**
 * @typedef {Object} MARKETS_CREATE_regions
 * @property {string} country_code
 */
/**
 * @typedef {Object} MARKETS_CREATE
 * @property {number} id
 * @property {string} name
 * @property {boolean} enabled
 * @property {Array<MARKETS_CREATE_regions>} regions
 */
/**
 * @typedef {Object} DRAFT_ORDERS_UPDATE_line_items
 * @property {number} id
 * @property {number} variant_id
 * @property {number} product_id
 * @property {string} title
 * @property {string} variant_title
 * @property {string} sku
 * @property {string} vendor
 * @property {number} quantity
 * @property {boolean} requires_shipping
 * @property {boolean} taxable
 * @property {boolean} gift_card
 * @property {string} fulfillment_service
 * @property {number} grams
 * @property {Array} tax_lines
 * @property {null|string} applied_discount
 * @property {string} name
 * @property {Array} properties
 * @property {boolean} custom
 * @property {string} price
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} DRAFT_ORDERS_UPDATE_shipping_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} DRAFT_ORDERS_UPDATE_billing_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} DRAFT_ORDERS_UPDATE_applied_discount
 * @property {string} description
 * @property {string} value
 * @property {string} title
 * @property {string} amount
 * @property {string} value_type
 */
/**
 * @typedef {Object} DRAFT_ORDERS_UPDATE_shipping_line
 * @property {string} title
 * @property {boolean} custom
 * @property {null|string} handle
 * @property {string} price
 */
/**
 * @typedef {Object} DRAFT_ORDERS_UPDATE_tax_lines
 * @property {number} rate
 * @property {string} title
 * @property {string} price
 */
/**
 * @typedef {Object} DRAFT_ORDERS_UPDATE_payment_terms_payment_schedules
 * @property {number} id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {number} payment_terms_id
 * @property {number} reference_id
 * @property {string} reference_type
 * @property {string} issued_at
 * @property {string} due_at
 * @property {string} completed_at
 * @property {string} amount
 * @property {string} currency
 * @property {string} total_price
 * @property {string} total_price_currency
 * @property {string} balance_due
 * @property {string} balance_due_currency
 * @property {string} outstanding_balance
 * @property {string} outstanding_balance_currency
 */
/**
 * @typedef {Object} DRAFT_ORDERS_UPDATE_payment_terms
 * @property {number} id
 * @property {string} payment_terms_name
 * @property {string} payment_terms_type
 * @property {number} due_in_days
 * @property {string} created_at
 * @property {string} updated_at
 * @property {Array<DRAFT_ORDERS_UPDATE_payment_terms_payment_schedules>} payment_schedules
 * @property {boolean} can_pay_early
 */
/**
 * @typedef {Object} DRAFT_ORDERS_UPDATE_customer_email_marketing_consent
 * @property {string} state
 * @property {null|string} opt_in_level
 * @property {null|string} consent_updated_at
 */
/**
 * @typedef {Object} DRAFT_ORDERS_UPDATE_customer_default_address
 * @property {null|string} id
 * @property {number} customer_id
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} company
 * @property {string} address1
 * @property {null|string} address2
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} phone
 * @property {string} name
 * @property {string} province_code
 * @property {string} country_code
 * @property {string} country_name
 * @property {boolean} default
 */
/**
 * @typedef {Object} DRAFT_ORDERS_UPDATE_customer
 * @property {number} id
 * @property {string} email
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {string} first_name
 * @property {string} last_name
 * @property {number} orders_count
 * @property {string} state
 * @property {string} total_spent
 * @property {null|string} last_order_id
 * @property {null|string} note
 * @property {boolean} verified_email
 * @property {null|string} multipass_identifier
 * @property {boolean} tax_exempt
 * @property {string} tags
 * @property {null|string} last_order_name
 * @property {string} currency
 * @property {null|string} phone
 * @property {Array} tax_exemptions
 * @property {DRAFT_ORDERS_UPDATE_customer_email_marketing_consent} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} admin_graphql_api_id
 * @property {DRAFT_ORDERS_UPDATE_customer_default_address} default_address
 */
/**
 * @typedef {Object} DRAFT_ORDERS_UPDATE
 * @property {number} id
 * @property {null|string} note
 * @property {string} email
 * @property {boolean} taxes_included
 * @property {string} currency
 * @property {null|string} invoice_sent_at
 * @property {string} created_at
 * @property {string} updated_at
 * @property {boolean} tax_exempt
 * @property {null|string} completed_at
 * @property {string} name
 * @property {string} status
 * @property {Array<DRAFT_ORDERS_UPDATE_line_items>} line_items
 * @property {DRAFT_ORDERS_UPDATE_shipping_address} shipping_address
 * @property {DRAFT_ORDERS_UPDATE_billing_address} billing_address
 * @property {string} invoice_url
 * @property {DRAFT_ORDERS_UPDATE_applied_discount} applied_discount
 * @property {null|string} order_id
 * @property {DRAFT_ORDERS_UPDATE_shipping_line} shipping_line
 * @property {Array<DRAFT_ORDERS_UPDATE_tax_lines>} tax_lines
 * @property {string} tags
 * @property {Array} note_attributes
 * @property {string} total_price
 * @property {string} subtotal_price
 * @property {string} total_tax
 * @property {DRAFT_ORDERS_UPDATE_payment_terms} payment_terms
 * @property {string} admin_graphql_api_id
 * @property {DRAFT_ORDERS_UPDATE_customer} customer
 */
/**
 * @typedef {Object} INVENTORY_ITEMS_DELETE
 * @property {number} id
 * @property {null|string} country_code_of_origin
 * @property {null|string} province_code_of_origin
 * @property {null|string} harmonized_system_code
 * @property {Array} country_harmonized_system_codes
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} DISPUTES_UPDATE
 * @property {number} id
 * @property {number} order_id
 * @property {string} type
 * @property {string} amount
 * @property {string} currency
 * @property {string} reason
 * @property {string} network_reason_code
 * @property {string} status
 * @property {string} evidence_due_by
 * @property {null|string} evidence_sent_on
 * @property {null|string} finalized_on
 * @property {string} initiated_at
 */
/**
 * @typedef {Object} SEGMENTS_CREATE
 * @property {number} id
 * @property {string} name
 * @property {string} query
 * @property {string} creationDate
 * @property {string} lastEditDate
 */
/**
 * @typedef {Object} CUSTOMER_GROUPS_UPDATE
 * @property {number} id
 * @property {string} name
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} query
 */
/**
 * @typedef {Object} CHANNELS_DELETE
 * @property {string} id
 */
/**
 * @typedef {Object} CUSTOMER_ACCOUNT_SETTINGS_UPDATE
 * @property {null|string} url
 * @property {string} customer_accounts_version
 * @property {boolean} login_required_at_checkout
 * @property {boolean} login_links_visible_on_storefront_and_checkout
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_ACTIVATE_billing_policy
 * @property {string} interval
 * @property {number} interval_count
 * @property {number} min_cycles
 * @property {number} max_cycles
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_ACTIVATE_delivery_policy
 * @property {string} interval
 * @property {number} interval_count
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_ACTIVATE
 * @property {string} admin_graphql_api_id
 * @property {number} id
 * @property {SUBSCRIPTION_CONTRACTS_ACTIVATE_billing_policy} billing_policy
 * @property {string} currency_code
 * @property {number} customer_id
 * @property {string} admin_graphql_api_customer_id
 * @property {SUBSCRIPTION_CONTRACTS_ACTIVATE_delivery_policy} delivery_policy
 * @property {string} status
 * @property {string} admin_graphql_api_origin_order_id
 * @property {number} origin_order_id
 * @property {string} revision_id
 */
/**
 * @typedef {Object} COLLECTIONS_DELETE
 * @property {number} id
 * @property {string} published_scope
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} CUSTOMERS_EMAIL_MARKETING_CONSENT_UPDATE_email_marketing_consent
 * @property {null|string} state
 * @property {null|string} opt_in_level
 * @property {null|string} consent_updated_at
 */
/**
 * @typedef {Object} CUSTOMERS_EMAIL_MARKETING_CONSENT_UPDATE
 * @property {number} customer_id
 * @property {null|string} email_address
 * @property {CUSTOMERS_EMAIL_MARKETING_CONSENT_UPDATE_email_marketing_consent} email_marketing_consent
 */
/**
 * @typedef {Object} DISCOUNTS_UPDATE
 * @property {string} admin_graphql_api_id
 * @property {string} title
 * @property {string} status
 * @property {string} created_at
 * @property {string} updated_at
 */
/**
 * @typedef {Object} COLLECTION_PUBLICATIONS_CREATE
 * @property {null|string} id
 * @property {null|string} publication_id
 * @property {string} published_at
 * @property {boolean} published
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {number} collection_id
 */
/**
 * @typedef {Object} DOMAINS_UPDATE_localization
 * @property {null|string} country
 * @property {string} default_locale
 * @property {Array} alternate_locales
 */
/**
 * @typedef {Object} DOMAINS_UPDATE
 * @property {number} id
 * @property {string} host
 * @property {boolean} ssl_enabled
 * @property {DOMAINS_UPDATE_localization} localization
 */
/**
 * @typedef {Object} INVENTORY_LEVELS_CONNECT
 * @property {number} inventory_item_id
 * @property {number} location_id
 * @property {null|string} available
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} CUSTOMER_TAGS_ADDED
 * @property {string} customerId
 * @property {Array<string>} tags
 * @property {string} occurredAt
 */
/**
 * @typedef {Object} FULFILLMENTS_UPDATE_destination
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} FULFILLMENTS_UPDATE_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} FULFILLMENTS_UPDATE_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} FULFILLMENTS_UPDATE_line_items_price_set
 * @property {FULFILLMENTS_UPDATE_line_items_price_set_shop_money} shop_money
 * @property {FULFILLMENTS_UPDATE_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} FULFILLMENTS_UPDATE_line_items_total_discount_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} FULFILLMENTS_UPDATE_line_items_total_discount_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} FULFILLMENTS_UPDATE_line_items_total_discount_set
 * @property {FULFILLMENTS_UPDATE_line_items_total_discount_set_shop_money} shop_money
 * @property {FULFILLMENTS_UPDATE_line_items_total_discount_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} FULFILLMENTS_UPDATE_line_items
 * @property {number} id
 * @property {number} variant_id
 * @property {string} title
 * @property {number} quantity
 * @property {string} sku
 * @property {null|string} variant_title
 * @property {null|string} vendor
 * @property {string} fulfillment_service
 * @property {number} product_id
 * @property {boolean} requires_shipping
 * @property {boolean} taxable
 * @property {boolean} gift_card
 * @property {string} name
 * @property {string} variant_inventory_management
 * @property {Array} properties
 * @property {boolean} product_exists
 * @property {number} fulfillable_quantity
 * @property {number} grams
 * @property {string} price
 * @property {string} total_discount
 * @property {null|string} fulfillment_status
 * @property {FULFILLMENTS_UPDATE_line_items_price_set} price_set
 * @property {FULFILLMENTS_UPDATE_line_items_total_discount_set} total_discount_set
 * @property {Array} discount_allocations
 * @property {Array} duties
 * @property {string} admin_graphql_api_id
 * @property {Array} tax_lines
 */
/**
 * @typedef {Object} FULFILLMENTS_UPDATE_receipt
 */
/**
 * @typedef {Object} FULFILLMENTS_UPDATE
 * @property {number} id
 * @property {number} order_id
 * @property {string} status
 * @property {string} created_at
 * @property {null|string} service
 * @property {string} updated_at
 * @property {string} tracking_company
 * @property {null|string} shipment_status
 * @property {null|string} location_id
 * @property {null|string} origin_address
 * @property {string} email
 * @property {FULFILLMENTS_UPDATE_destination} destination
 * @property {Array<FULFILLMENTS_UPDATE_line_items>} line_items
 * @property {string} tracking_number
 * @property {Array<string>} tracking_numbers
 * @property {string} tracking_url
 * @property {Array<string>} tracking_urls
 * @property {FULFILLMENTS_UPDATE_receipt} receipt
 * @property {string} name
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} LOCATIONS_DEACTIVATE
 * @property {number} id
 * @property {string} name
 * @property {string} address1
 * @property {string} address2
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} phone
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} country_code
 * @property {string} country_name
 * @property {string} province_code
 * @property {boolean} legacy
 * @property {boolean} active
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} REFUNDS_CREATE_total_duties_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} REFUNDS_CREATE_total_duties_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} REFUNDS_CREATE_total_duties_set
 * @property {REFUNDS_CREATE_total_duties_set_shop_money} shop_money
 * @property {REFUNDS_CREATE_total_duties_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} REFUNDS_CREATE_refund_line_items_subtotal_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} REFUNDS_CREATE_refund_line_items_subtotal_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} REFUNDS_CREATE_refund_line_items_subtotal_set
 * @property {REFUNDS_CREATE_refund_line_items_subtotal_set_shop_money} shop_money
 * @property {REFUNDS_CREATE_refund_line_items_subtotal_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} REFUNDS_CREATE_refund_line_items_total_tax_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} REFUNDS_CREATE_refund_line_items_total_tax_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} REFUNDS_CREATE_refund_line_items_total_tax_set
 * @property {REFUNDS_CREATE_refund_line_items_total_tax_set_shop_money} shop_money
 * @property {REFUNDS_CREATE_refund_line_items_total_tax_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} REFUNDS_CREATE_refund_line_items_line_item_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} REFUNDS_CREATE_refund_line_items_line_item_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} REFUNDS_CREATE_refund_line_items_line_item_price_set
 * @property {REFUNDS_CREATE_refund_line_items_line_item_price_set_shop_money} shop_money
 * @property {REFUNDS_CREATE_refund_line_items_line_item_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} REFUNDS_CREATE_refund_line_items_line_item_total_discount_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} REFUNDS_CREATE_refund_line_items_line_item_total_discount_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} REFUNDS_CREATE_refund_line_items_line_item_total_discount_set
 * @property {REFUNDS_CREATE_refund_line_items_line_item_total_discount_set_shop_money} shop_money
 * @property {REFUNDS_CREATE_refund_line_items_line_item_total_discount_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} REFUNDS_CREATE_refund_line_items_line_item
 * @property {number} id
 * @property {number} variant_id
 * @property {string} title
 * @property {number} quantity
 * @property {string} sku
 * @property {null|string} variant_title
 * @property {null|string} vendor
 * @property {string} fulfillment_service
 * @property {number} product_id
 * @property {boolean} requires_shipping
 * @property {boolean} taxable
 * @property {boolean} gift_card
 * @property {string} name
 * @property {string} variant_inventory_management
 * @property {Array} properties
 * @property {boolean} product_exists
 * @property {number} fulfillable_quantity
 * @property {number} grams
 * @property {string} price
 * @property {string} total_discount
 * @property {null|string} fulfillment_status
 * @property {REFUNDS_CREATE_refund_line_items_line_item_price_set} price_set
 * @property {REFUNDS_CREATE_refund_line_items_line_item_total_discount_set} total_discount_set
 * @property {Array} discount_allocations
 * @property {Array} duties
 * @property {string} admin_graphql_api_id
 * @property {Array} tax_lines
 */
/**
 * @typedef {Object} REFUNDS_CREATE_refund_line_items
 * @property {number} id
 * @property {number} quantity
 * @property {number} line_item_id
 * @property {null|string} location_id
 * @property {string} restock_type
 * @property {number} subtotal
 * @property {number} total_tax
 * @property {REFUNDS_CREATE_refund_line_items_subtotal_set} subtotal_set
 * @property {REFUNDS_CREATE_refund_line_items_total_tax_set} total_tax_set
 * @property {REFUNDS_CREATE_refund_line_items_line_item} line_item
 */
/**
 * @typedef {Object} REFUNDS_CREATE
 * @property {number} id
 * @property {number} order_id
 * @property {string} created_at
 * @property {string} note
 * @property {number} user_id
 * @property {string} processed_at
 * @property {Array} duties
 * @property {REFUNDS_CREATE_total_duties_set} total_duties_set
 * @property {null|string} return
 * @property {boolean} restock
 * @property {Array} refund_shipping_lines
 * @property {string} admin_graphql_api_id
 * @property {Array} order_adjustments
 * @property {Array<REFUNDS_CREATE_refund_line_items>} refund_line_items
 * @property {Array} transactions
 */
/**
 * @typedef {Object} PRODUCTS_UPDATE_variants
 * @property {string} admin_graphql_api_id
 * @property {null|string} barcode
 * @property {string} compare_at_price
 * @property {string} created_at
 * @property {number} id
 * @property {string} inventory_policy
 * @property {number} position
 * @property {string} price
 * @property {number} product_id
 * @property {null|string} sku
 * @property {boolean} taxable
 * @property {string} title
 * @property {string} updated_at
 * @property {string} option1
 * @property {null|string} option2
 * @property {null|string} option3
 * @property {null|string} image_id
 * @property {null|string} inventory_item_id
 * @property {number} inventory_quantity
 * @property {number} old_inventory_quantity
 */
/**
 * @typedef {Object} PRODUCTS_UPDATE_variant_gids
 * @property {string} admin_graphql_api_id
 * @property {string} updated_at
 */
/**
 * @typedef {Object} PRODUCTS_UPDATE
 * @property {string} admin_graphql_api_id
 * @property {string} body_html
 * @property {null|string} created_at
 * @property {string} handle
 * @property {number} id
 * @property {string} product_type
 * @property {string} published_at
 * @property {null|string} template_suffix
 * @property {string} title
 * @property {string} updated_at
 * @property {string} vendor
 * @property {string} status
 * @property {string} published_scope
 * @property {string} tags
 * @property {Array<PRODUCTS_UPDATE_variants>} variants
 * @property {Array} options
 * @property {Array} images
 * @property {null|string} image
 * @property {Array} media
 * @property {Array<PRODUCTS_UPDATE_variant_gids>} variant_gids
 * @property {boolean} has_variants_that_requires_components
 * @property {null|string} category
 */
/**
 * @typedef {Object} CUSTOMERS_DISABLE
 * @property {number} id
 * @property {string} email
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} first_name
 * @property {string} last_name
 * @property {number} orders_count
 * @property {string} state
 * @property {string} total_spent
 * @property {null|string} last_order_id
 * @property {string} note
 * @property {boolean} verified_email
 * @property {null|string} multipass_identifier
 * @property {boolean} tax_exempt
 * @property {string} tags
 * @property {null|string} last_order_name
 * @property {string} currency
 * @property {null|string} phone
 * @property {Array} addresses
 * @property {Array} tax_exemptions
 * @property {null|string} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} CUSTOMER_PAYMENT_METHODS_REVOKE_payment_instrument
 * @property {string} last_digits
 * @property {number} month
 * @property {number} year
 * @property {string} name
 * @property {string} brand
 */
/**
 * @typedef {Object} CUSTOMER_PAYMENT_METHODS_REVOKE
 * @property {string} admin_graphql_api_id
 * @property {string} token
 * @property {number} customer_id
 * @property {string} admin_graphql_api_customer_id
 * @property {string} instrument_type
 * @property {CUSTOMER_PAYMENT_METHODS_REVOKE_payment_instrument} payment_instrument
 */
/**
 * @typedef {Object} PROFILES_UPDATE
 * @property {number} id
 */
/**
 * @typedef {Object} METAOBJECTS_CREATE_fields
 * @property {string} key
 */
/**
 * @typedef {Object} METAOBJECTS_CREATE_capabilities_publishable
 * @property {string} status
 */
/**
 * @typedef {Object} METAOBJECTS_CREATE_capabilities
 * @property {METAOBJECTS_CREATE_capabilities_publishable} publishable
 */
/**
 * @typedef {Object} METAOBJECTS_CREATE
 * @property {string} type
 * @property {string} handle
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} display_name
 * @property {string} id
 * @property {string} definition_id
 * @property {METAOBJECTS_CREATE_fields} fields
 * @property {string} created_by_staff_id
 * @property {string} created_by_app_id
 * @property {METAOBJECTS_CREATE_capabilities} capabilities
 */
/**
 * @typedef {Object} COLLECTION_LISTINGS_UPDATE_collection_listing
 * @property {number} collection_id
 * @property {null|string} updated_at
 * @property {string} body_html
 * @property {null|string} default_product_image
 * @property {string} handle
 * @property {null|string} image
 * @property {string} title
 * @property {null|string} sort_order
 * @property {string} published_at
 */
/**
 * @typedef {Object} COLLECTION_LISTINGS_UPDATE
 * @property {COLLECTION_LISTINGS_UPDATE_collection_listing} collection_listing
 */
/**
 * @typedef {Object} THEMES_DELETE
 * @property {number} id
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_FAIL_billing_policy
 * @property {string} interval
 * @property {number} interval_count
 * @property {number} min_cycles
 * @property {number} max_cycles
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_FAIL_delivery_policy
 * @property {string} interval
 * @property {number} interval_count
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_FAIL
 * @property {string} admin_graphql_api_id
 * @property {number} id
 * @property {SUBSCRIPTION_CONTRACTS_FAIL_billing_policy} billing_policy
 * @property {string} currency_code
 * @property {number} customer_id
 * @property {string} admin_graphql_api_customer_id
 * @property {SUBSCRIPTION_CONTRACTS_FAIL_delivery_policy} delivery_policy
 * @property {string} status
 * @property {string} admin_graphql_api_origin_order_id
 * @property {number} origin_order_id
 * @property {string} revision_id
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_UPDATE_billing_policy
 * @property {string} interval
 * @property {number} interval_count
 * @property {number} min_cycles
 * @property {number} max_cycles
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_UPDATE_delivery_policy
 * @property {string} interval
 * @property {number} interval_count
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_UPDATE
 * @property {string} admin_graphql_api_id
 * @property {number} id
 * @property {SUBSCRIPTION_CONTRACTS_UPDATE_billing_policy} billing_policy
 * @property {string} currency_code
 * @property {number} customer_id
 * @property {string} admin_graphql_api_customer_id
 * @property {SUBSCRIPTION_CONTRACTS_UPDATE_delivery_policy} delivery_policy
 * @property {string} status
 * @property {string} admin_graphql_api_origin_order_id
 * @property {number} origin_order_id
 * @property {string} revision_id
 */
/**
 * @typedef {Object} COMPANIES_CREATE
 * @property {string} name
 * @property {string} note
 * @property {string} external_id
 * @property {string} main_contact_admin_graphql_api_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} customer_since
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_CONTACTS_DELETE_company
 * @property {string} name
 * @property {string} note
 * @property {string} external_id
 * @property {string} main_contact_admin_graphql_api_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} customer_since
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_CONTACTS_DELETE
 * @property {string} customer_admin_graphql_api_id
 * @property {string} title
 * @property {string} locale
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {COMPANY_CONTACTS_DELETE_company} company
 */
/**
 * @typedef {Object} SHOP_UPDATE
 * @property {number} id
 * @property {string} name
 * @property {string} email
 * @property {null|string} domain
 * @property {string} province
 * @property {string} country
 * @property {string} address1
 * @property {string} zip
 * @property {string} city
 * @property {null|string} source
 * @property {string} phone
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} primary_locale
 * @property {null|string} address2
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {string} country_code
 * @property {string} country_name
 * @property {string} currency
 * @property {string} customer_email
 * @property {string} timezone
 * @property {null|string} iana_timezone
 * @property {string} shop_owner
 * @property {string} money_format
 * @property {string} money_with_currency_format
 * @property {string} weight_unit
 * @property {string} province_code
 * @property {null|string} taxes_included
 * @property {null|string} auto_configure_tax_inclusivity
 * @property {null|string} tax_shipping
 * @property {null|string} county_taxes
 * @property {string} plan_display_name
 * @property {string} plan_name
 * @property {boolean} has_discounts
 * @property {boolean} has_gift_cards
 * @property {null|string} myshopify_domain
 * @property {null|string} google_apps_domain
 * @property {null|string} google_apps_login_enabled
 * @property {string} money_in_emails_format
 * @property {string} money_with_currency_in_emails_format
 * @property {boolean} eligible_for_payments
 * @property {boolean} requires_extra_payments_agreement
 * @property {null|string} password_enabled
 * @property {boolean} has_storefront
 * @property {boolean} finances
 * @property {number} primary_location_id
 * @property {boolean} checkout_api_supported
 * @property {boolean} multi_location_enabled
 * @property {boolean} setup_required
 * @property {boolean} pre_launch_enabled
 * @property {Array<string>} enabled_presentment_currencies
 * @property {boolean} marketing_sms_consent_enabled_at_checkout
 * @property {boolean} transactional_sms_disabled
 */
/**
 * @typedef {Object} BULK_OPERATIONS_FINISH
 * @property {string} admin_graphql_api_id
 * @property {string} completed_at
 * @property {string} created_at
 * @property {null|string} error_code
 * @property {string} status
 * @property {string} type
 */
/**
 * @typedef {Object} CHECKOUTS_DELETE
 * @property {number} id
 * @property {string} presentment_currency
 * @property {boolean} buyer_accepts_sms_marketing
 * @property {null|string} sms_marketing_phone
 * @property {string} total_discounts
 * @property {string} total_line_items_price
 * @property {string} total_price
 * @property {string} total_tax
 * @property {string} subtotal_price
 * @property {string} cart_token
 * @property {null|string} total_duties
 * @property {null|string} reservation_token
 */
/**
 * @typedef {Object} SUBSCRIPTION_BILLING_CYCLE_EDITS_UPDATE
 * @property {number} subscription_contract_id
 * @property {string} cycle_start_at
 * @property {string} cycle_end_at
 * @property {number} cycle_index
 * @property {null|string} contract_edit
 * @property {string} billing_attempt_expected_date
 * @property {boolean} skipped
 * @property {boolean} edited
 */
/**
 * @typedef {Object} FULFILLMENT_EVENTS_DELETE
 * @property {number} id
 * @property {number} fulfillment_id
 * @property {string} status
 * @property {string} message
 * @property {string} happened_at
 * @property {null|string} city
 * @property {null|string} province
 * @property {string} country
 * @property {null|string} zip
 * @property {null|string} address1
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {number} shop_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {null|string} estimated_delivery_at
 * @property {number} order_id
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_UPDATE_product_listing_variants_option_values
 * @property {number} option_id
 * @property {string} name
 * @property {string} value
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_UPDATE_product_listing_variants
 * @property {number} id
 * @property {string} title
 * @property {Array<PRODUCT_LISTINGS_UPDATE_product_listing_variants_option_values>} option_values
 * @property {string} price
 * @property {string} formatted_price
 * @property {string} compare_at_price
 * @property {number} grams
 * @property {boolean} requires_shipping
 * @property {null|string} sku
 * @property {null|string} barcode
 * @property {boolean} taxable
 * @property {number} position
 * @property {boolean} available
 * @property {string} inventory_policy
 * @property {number} inventory_quantity
 * @property {null|string} inventory_management
 * @property {string} fulfillment_service
 * @property {number} weight
 * @property {string} weight_unit
 * @property {null|string} image_id
 * @property {string} created_at
 * @property {string} updated_at
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_UPDATE_product_listing_options
 * @property {number} id
 * @property {string} name
 * @property {number} product_id
 * @property {number} position
 * @property {Array<string>} values
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_UPDATE_product_listing
 * @property {number} product_id
 * @property {null|string} created_at
 * @property {string} updated_at
 * @property {string} body_html
 * @property {string} handle
 * @property {string} product_type
 * @property {string} title
 * @property {string} vendor
 * @property {boolean} available
 * @property {string} tags
 * @property {string} published_at
 * @property {Array<PRODUCT_LISTINGS_UPDATE_product_listing_variants>} variants
 * @property {Array} images
 * @property {Array<PRODUCT_LISTINGS_UPDATE_product_listing_options>} options
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_UPDATE
 * @property {PRODUCT_LISTINGS_UPDATE_product_listing} product_listing
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_EXPIRE_billing_policy
 * @property {string} interval
 * @property {number} interval_count
 * @property {number} min_cycles
 * @property {number} max_cycles
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_EXPIRE_delivery_policy
 * @property {string} interval
 * @property {number} interval_count
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_EXPIRE
 * @property {string} admin_graphql_api_id
 * @property {number} id
 * @property {SUBSCRIPTION_CONTRACTS_EXPIRE_billing_policy} billing_policy
 * @property {string} currency_code
 * @property {number} customer_id
 * @property {string} admin_graphql_api_customer_id
 * @property {SUBSCRIPTION_CONTRACTS_EXPIRE_delivery_policy} delivery_policy
 * @property {string} status
 * @property {string} admin_graphql_api_origin_order_id
 * @property {number} origin_order_id
 * @property {string} revision_id
 */
/**
 * @typedef {Object} ORDERS_SHOPIFY_PROTECT_ELIGIBILITY_CHANGED_eligibility
 * @property {string} status
 */
/**
 * @typedef {Object} ORDERS_SHOPIFY_PROTECT_ELIGIBILITY_CHANGED
 * @property {number} order_id
 * @property {string} status
 * @property {ORDERS_SHOPIFY_PROTECT_ELIGIBILITY_CHANGED_eligibility} eligibility
 */
/**
 * @typedef {Object} CUSTOMER_GROUPS_DELETE
 * @property {number} id
 */
/**
 * @typedef {Object} PRODUCT_PUBLICATIONS_CREATE
 * @property {null|string} id
 * @property {null|string} publication_id
 * @property {string} published_at
 * @property {boolean} published
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {number} product_id
 */
/**
 * @typedef {Object} INVENTORY_ITEMS_UPDATE
 * @property {number} id
 * @property {string} sku
 * @property {string} created_at
 * @property {string} updated_at
 * @property {boolean} requires_shipping
 * @property {null|string} cost
 * @property {null|string} country_code_of_origin
 * @property {null|string} province_code_of_origin
 * @property {null|string} harmonized_system_code
 * @property {boolean} tracked
 * @property {Array} country_harmonized_system_codes
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_properties
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_discounted_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_discounted_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_discounted_price_set
 * @property {CARTS_UPDATE_line_items_discounted_price_set_shop_money} shop_money
 * @property {CARTS_UPDATE_line_items_discounted_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_line_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_line_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_line_price_set
 * @property {CARTS_UPDATE_line_items_line_price_set_shop_money} shop_money
 * @property {CARTS_UPDATE_line_items_line_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_original_line_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_original_line_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_original_line_price_set
 * @property {CARTS_UPDATE_line_items_original_line_price_set_shop_money} shop_money
 * @property {CARTS_UPDATE_line_items_original_line_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_price_set
 * @property {CARTS_UPDATE_line_items_price_set_shop_money} shop_money
 * @property {CARTS_UPDATE_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_total_discount_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_total_discount_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items_total_discount_set
 * @property {CARTS_UPDATE_line_items_total_discount_set_shop_money} shop_money
 * @property {CARTS_UPDATE_line_items_total_discount_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} CARTS_UPDATE_line_items
 * @property {number} id
 * @property {CARTS_UPDATE_line_items_properties} properties
 * @property {number} quantity
 * @property {number} variant_id
 * @property {string} key
 * @property {string} discounted_price
 * @property {Array} discounts
 * @property {boolean} gift_card
 * @property {number} grams
 * @property {string} line_price
 * @property {string} original_line_price
 * @property {string} original_price
 * @property {string} price
 * @property {number} product_id
 * @property {string} sku
 * @property {boolean} taxable
 * @property {string} title
 * @property {string} total_discount
 * @property {string} vendor
 * @property {CARTS_UPDATE_line_items_discounted_price_set} discounted_price_set
 * @property {CARTS_UPDATE_line_items_line_price_set} line_price_set
 * @property {CARTS_UPDATE_line_items_original_line_price_set} original_line_price_set
 * @property {CARTS_UPDATE_line_items_price_set} price_set
 * @property {CARTS_UPDATE_line_items_total_discount_set} total_discount_set
 */
/**
 * @typedef {Object} CARTS_UPDATE
 * @property {string} id
 * @property {string} token
 * @property {Array<CARTS_UPDATE_line_items>} line_items
 * @property {null|string} note
 * @property {string} updated_at
 * @property {string} created_at
 */
/**
 * @typedef {Object} DRAFT_ORDERS_DELETE
 * @property {number} id
 */
/**
 * @typedef {Object} SELLING_PLAN_GROUPS_DELETE
 * @property {string} admin_graphql_api_id
 * @property {number} id
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_CREATE_company
 * @property {string} name
 * @property {string} note
 * @property {string} external_id
 * @property {string} main_contact_admin_graphql_api_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} customer_since
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_CREATE_billing_address
 * @property {string} address1
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} recipient
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} address2
 * @property {string} phone
 * @property {string} zone_code
 * @property {string} country_code
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {string} company_admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_CREATE_shipping_address
 * @property {string} address1
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} recipient
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} address2
 * @property {string} phone
 * @property {string} zone_code
 * @property {string} country_code
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {string} company_admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_CREATE_tax_registration
 * @property {string} tax_id
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_CREATE
 * @property {string} name
 * @property {string} external_id
 * @property {string} phone
 * @property {string} locale
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} note
 * @property {null|string} buyer_experience_configuration
 * @property {string} admin_graphql_api_id
 * @property {Array<string>} tax_exemptions
 * @property {COMPANY_LOCATIONS_CREATE_company} company
 * @property {COMPANY_LOCATIONS_CREATE_billing_address} billing_address
 * @property {COMPANY_LOCATIONS_CREATE_shipping_address} shipping_address
 * @property {COMPANY_LOCATIONS_CREATE_tax_registration} tax_registration
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_PLACED_ON_HOLD_fulfillment_order_fulfillment_holds
 * @property {string} id
 * @property {string} reason
 * @property {string} reason_notes
 * @property {boolean} held_by_requesting_app
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_PLACED_ON_HOLD_fulfillment_order
 * @property {string} id
 * @property {string} status
 * @property {Array<FULFILLMENT_ORDERS_PLACED_ON_HOLD_fulfillment_order_fulfillment_holds>} fulfillment_holds
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_PLACED_ON_HOLD_remaining_fulfillment_order
 * @property {string} id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_PLACED_ON_HOLD_held_fulfillment_order_line_items
 * @property {string} id
 * @property {number} quantity
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_PLACED_ON_HOLD_created_fulfillment_hold
 * @property {string} id
 * @property {string} reason
 * @property {string} reason_notes
 * @property {boolean} held_by_requesting_app
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_PLACED_ON_HOLD
 * @property {FULFILLMENT_ORDERS_PLACED_ON_HOLD_fulfillment_order} fulfillment_order
 * @property {FULFILLMENT_ORDERS_PLACED_ON_HOLD_remaining_fulfillment_order} remaining_fulfillment_order
 * @property {Array<FULFILLMENT_ORDERS_PLACED_ON_HOLD_held_fulfillment_order_line_items>} held_fulfillment_order_line_items
 * @property {FULFILLMENT_ORDERS_PLACED_ON_HOLD_created_fulfillment_hold} created_fulfillment_hold
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_CREATE
 * @property {string} id
 * @property {string} country
 * @property {string} language
 * @property {string} status
 */
/**
 * @typedef {Object} TENDER_TRANSACTIONS_CREATE
 * @property {number} id
 * @property {number} order_id
 * @property {string} amount
 * @property {string} currency
 * @property {null|string} user_id
 * @property {boolean} test
 * @property {null|string} processed_at
 * @property {string} remote_reference
 * @property {null|string} payment_details
 * @property {string} payment_method
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_metadata
 * @property {string} action
 * @property {string} type
 * @property {string} resource
 * @property {Array} truncatedFields
 * @property {string} occured_at
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_productFeed
 * @property {string} id
 * @property {string} shop_id
 * @property {string} country
 * @property {string} language
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product_images_edges_node
 * @property {string} id
 * @property {string} url
 * @property {number} height
 * @property {number} width
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product_images_edges
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_product_images_edges_node} node
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product_images
 * @property {Array<PRODUCT_FEEDS_INCREMENTAL_SYNC_product_images_edges>} edges
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product_options
 * @property {string} name
 * @property {Array<string>} values
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product_seo
 * @property {string} title
 * @property {string} description
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product_variants_edges_node_price
 * @property {string} amount
 * @property {string} currencyCode
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product_variants_edges_node_image
 * @property {string} id
 * @property {string} url
 * @property {number} height
 * @property {number} width
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product_variants_edges_node_selectedOptions
 * @property {string} name
 * @property {string} value
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product_variants_edges_node
 * @property {string} id
 * @property {string} title
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_product_variants_edges_node_price} price
 * @property {null|string} compareAtPrice
 * @property {string} sku
 * @property {null|string} barcode
 * @property {number} quantityAvailable
 * @property {boolean} availableForSale
 * @property {number} weight
 * @property {string} weightUnit
 * @property {boolean} requireShipping
 * @property {string} inventoryPolicy
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_product_variants_edges_node_image} image
 * @property {Array<PRODUCT_FEEDS_INCREMENTAL_SYNC_product_variants_edges_node_selectedOptions>} selectedOptions
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product_variants_edges
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_product_variants_edges_node} node
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product_variants
 * @property {Array<PRODUCT_FEEDS_INCREMENTAL_SYNC_product_variants_edges>} edges
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} onlineStoreUrl
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {boolean} isPublished
 * @property {string} publishedAt
 * @property {string} productType
 * @property {string} vendor
 * @property {string} handle
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_product_images} images
 * @property {Array<PRODUCT_FEEDS_INCREMENTAL_SYNC_product_options>} options
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_product_seo} seo
 * @property {Array<string>} tags
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_product_variants} variants
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_metadata} metadata
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_productFeed} productFeed
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_product} product
 * @property {null|string} products
 */
/**
 * @typedef {Object} DISCOUNTS_DELETE
 * @property {string} admin_graphql_api_id
 * @property {string} deleted_at
 */
/**
 * @typedef {Object} SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE
 * @property {null|string} id
 * @property {null|string} admin_graphql_api_id
 * @property {string} idempotency_key
 * @property {number} order_id
 * @property {string} admin_graphql_api_order_id
 * @property {number} subscription_contract_id
 * @property {string} admin_graphql_api_subscription_contract_id
 * @property {boolean} ready
 * @property {null|string} error_message
 * @property {null|string} error_code
 */
/**
 * @typedef {Object} LOCATIONS_CREATE
 * @property {number} id
 * @property {string} name
 * @property {string} address1
 * @property {string} address2
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} phone
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} country_code
 * @property {string} country_name
 * @property {string} province_code
 * @property {boolean} legacy
 * @property {boolean} active
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} VARIANTS_OUT_OF_STOCK
 * @property {number} id
 * @property {number} product_id
 * @property {string} title
 * @property {string} price
 * @property {number} position
 * @property {string} inventory_policy
 * @property {string} compare_at_price
 * @property {string} option1
 * @property {null|string} option2
 * @property {null|string} option3
 * @property {string} created_at
 * @property {string} updated_at
 * @property {boolean} taxable
 * @property {null|string} barcode
 * @property {null|string} sku
 * @property {number} inventory_quantity
 * @property {number} old_inventory_quantity
 * @property {string} admin_graphql_api_id
 * @property {null|string} image_id
 */
/**
 * @typedef {Object} CUSTOMERS_CREATE
 * @property {number} id
 * @property {string} email
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} first_name
 * @property {string} last_name
 * @property {number} orders_count
 * @property {string} state
 * @property {string} total_spent
 * @property {null|string} last_order_id
 * @property {string} note
 * @property {boolean} verified_email
 * @property {null|string} multipass_identifier
 * @property {boolean} tax_exempt
 * @property {string} tags
 * @property {null|string} last_order_name
 * @property {string} currency
 * @property {null|string} phone
 * @property {Array} addresses
 * @property {Array} tax_exemptions
 * @property {null|string} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} RETURNS_REOPEN
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {number} order_id
 * @property {string} status
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_CANCEL_billing_policy
 * @property {string} interval
 * @property {number} interval_count
 * @property {number} min_cycles
 * @property {number} max_cycles
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_CANCEL_delivery_policy
 * @property {string} interval
 * @property {number} interval_count
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_CANCEL
 * @property {string} admin_graphql_api_id
 * @property {number} id
 * @property {SUBSCRIPTION_CONTRACTS_CANCEL_billing_policy} billing_policy
 * @property {string} currency_code
 * @property {number} customer_id
 * @property {string} admin_graphql_api_customer_id
 * @property {SUBSCRIPTION_CONTRACTS_CANCEL_delivery_policy} delivery_policy
 * @property {string} status
 * @property {string} admin_graphql_api_origin_order_id
 * @property {number} origin_order_id
 * @property {string} revision_id
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_REVOKE_company_contact_company
 * @property {string} name
 * @property {string} note
 * @property {string} external_id
 * @property {string} main_contact_admin_graphql_api_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} customer_since
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_REVOKE_company_contact
 * @property {string} customer_admin_graphql_api_id
 * @property {string} title
 * @property {string} locale
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {COMPANY_CONTACT_ROLES_REVOKE_company_contact_company} company
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_REVOKE_company_location_company
 * @property {string} name
 * @property {string} note
 * @property {string} external_id
 * @property {string} main_contact_admin_graphql_api_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} customer_since
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_REVOKE_company_location_billing_address
 * @property {string} address1
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} recipient
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} address2
 * @property {string} phone
 * @property {string} zone_code
 * @property {string} country_code
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {string} company_admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_REVOKE_company_location_shipping_address
 * @property {string} address1
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} recipient
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} address2
 * @property {string} phone
 * @property {string} zone_code
 * @property {string} country_code
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {string} company_admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_REVOKE_company_location_tax_registration
 * @property {string} tax_id
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_REVOKE_company_location
 * @property {string} name
 * @property {string} external_id
 * @property {string} phone
 * @property {string} locale
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} note
 * @property {null|string} buyer_experience_configuration
 * @property {string} admin_graphql_api_id
 * @property {Array<string>} tax_exemptions
 * @property {COMPANY_CONTACT_ROLES_REVOKE_company_location_company} company
 * @property {COMPANY_CONTACT_ROLES_REVOKE_company_location_billing_address} billing_address
 * @property {COMPANY_CONTACT_ROLES_REVOKE_company_location_shipping_address} shipping_address
 * @property {COMPANY_CONTACT_ROLES_REVOKE_company_location_tax_registration} tax_registration
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_REVOKE_company_contact_role
 * @property {string} name
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_REVOKE
 * @property {COMPANY_CONTACT_ROLES_REVOKE_company_contact} company_contact
 * @property {COMPANY_CONTACT_ROLES_REVOKE_company_location} company_location
 * @property {COMPANY_CONTACT_ROLES_REVOKE_company_contact_role} company_contact_role
 */
/**
 * @typedef {Object} COLLECTIONS_UPDATE
 * @property {number} id
 * @property {string} handle
 * @property {string} title
 * @property {string} updated_at
 * @property {string} body_html
 * @property {string} published_at
 * @property {null|string} sort_order
 * @property {null|string} template_suffix
 * @property {string} published_scope
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} ORDERS_DELETE
 * @property {number} id
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_ACCEPTED_fulfillment_order
 * @property {string} id
 * @property {string} status
 * @property {string} request_status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_ACCEPTED
 * @property {FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_ACCEPTED_fulfillment_order} fulfillment_order
 * @property {string} message
 */
/**
 * @typedef {Object} SHOP_REDACT
 * @property {number} shop_id
 * @property {string} shop_domain
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY_fulfillment_order_delivery_method
 * @property {string} method_type
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY_fulfillment_order
 * @property {string} id
 * @property {string} status
 * @property {boolean} preparable
 * @property {FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY_fulfillment_order_delivery_method} delivery_method
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY
 * @property {FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY_fulfillment_order} fulfillment_order
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_REMOVE_scheduled_product_listing
 * @property {number} product_id
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_REMOVE
 * @property {SCHEDULED_PRODUCT_LISTINGS_REMOVE_scheduled_product_listing} scheduled_product_listing
 */
/**
 * @typedef {Object} LOCATIONS_ACTIVATE
 * @property {number} id
 * @property {string} name
 * @property {string} address1
 * @property {string} address2
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} phone
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} country_code
 * @property {string} country_name
 * @property {string} province_code
 * @property {boolean} legacy
 * @property {boolean} active
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} PAYMENT_TERMS_DELETE
 * @property {number} id
 */
/**
 * @typedef {Object} RETURNS_CLOSE
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {number} order_id
 * @property {string} status
 */
/**
 * @typedef {Object} REVERSE_DELIVERIES_ATTACH_DELIVERABLE_return
 * @property {number} id
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} REVERSE_DELIVERIES_ATTACH_DELIVERABLE_shipping_deliverable_tracking
 * @property {string} carrier_name
 * @property {string} tracking_number
 * @property {null|string} tracking_url
 */
/**
 * @typedef {Object} REVERSE_DELIVERIES_ATTACH_DELIVERABLE_shipping_deliverable_label
 * @property {null|string} public_file_url
 * @property {null|string} created_at
 */
/**
 * @typedef {Object} REVERSE_DELIVERIES_ATTACH_DELIVERABLE_shipping_deliverable
 * @property {REVERSE_DELIVERIES_ATTACH_DELIVERABLE_shipping_deliverable_tracking} tracking
 * @property {REVERSE_DELIVERIES_ATTACH_DELIVERABLE_shipping_deliverable_label} label
 */
/**
 * @typedef {Object} REVERSE_DELIVERIES_ATTACH_DELIVERABLE
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {REVERSE_DELIVERIES_ATTACH_DELIVERABLE_return} return
 * @property {REVERSE_DELIVERIES_ATTACH_DELIVERABLE_shipping_deliverable} shipping_deliverable
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_UPDATE_scheduled_product_listing_variants_option_values
 * @property {number} option_id
 * @property {string} name
 * @property {string} value
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_UPDATE_scheduled_product_listing_variants
 * @property {number} id
 * @property {string} title
 * @property {Array<SCHEDULED_PRODUCT_LISTINGS_UPDATE_scheduled_product_listing_variants_option_values>} option_values
 * @property {string} price
 * @property {string} formatted_price
 * @property {string} compare_at_price
 * @property {number} grams
 * @property {boolean} requires_shipping
 * @property {null|string} sku
 * @property {null|string} barcode
 * @property {boolean} taxable
 * @property {number} position
 * @property {boolean} available
 * @property {string} inventory_policy
 * @property {number} inventory_quantity
 * @property {null|string} inventory_management
 * @property {string} fulfillment_service
 * @property {number} weight
 * @property {string} weight_unit
 * @property {null|string} image_id
 * @property {string} created_at
 * @property {string} updated_at
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_UPDATE_scheduled_product_listing_options
 * @property {number} id
 * @property {string} name
 * @property {number} product_id
 * @property {number} position
 * @property {Array<string>} values
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_UPDATE_scheduled_product_listing
 * @property {number} product_id
 * @property {null|string} created_at
 * @property {string} updated_at
 * @property {string} body_html
 * @property {string} handle
 * @property {string} product_type
 * @property {string} title
 * @property {string} vendor
 * @property {boolean} available
 * @property {string} tags
 * @property {Array<SCHEDULED_PRODUCT_LISTINGS_UPDATE_scheduled_product_listing_variants>} variants
 * @property {null|string} publish_at
 * @property {Array} images
 * @property {Array<SCHEDULED_PRODUCT_LISTINGS_UPDATE_scheduled_product_listing_options>} options
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_UPDATE
 * @property {SCHEDULED_PRODUCT_LISTINGS_UPDATE_scheduled_product_listing} scheduled_product_listing
 */
/**
 * @typedef {Object} PRODUCTS_CREATE_variants
 * @property {string} admin_graphql_api_id
 * @property {null|string} barcode
 * @property {string} compare_at_price
 * @property {string} created_at
 * @property {number} id
 * @property {string} inventory_policy
 * @property {number} position
 * @property {string} price
 * @property {number} product_id
 * @property {null|string} sku
 * @property {boolean} taxable
 * @property {string} title
 * @property {string} updated_at
 * @property {string} option1
 * @property {null|string} option2
 * @property {null|string} option3
 * @property {null|string} image_id
 * @property {null|string} inventory_item_id
 * @property {number} inventory_quantity
 * @property {number} old_inventory_quantity
 */
/**
 * @typedef {Object} PRODUCTS_CREATE_variant_gids
 * @property {string} admin_graphql_api_id
 * @property {string} updated_at
 */
/**
 * @typedef {Object} PRODUCTS_CREATE
 * @property {string} admin_graphql_api_id
 * @property {string} body_html
 * @property {null|string} created_at
 * @property {string} handle
 * @property {number} id
 * @property {string} product_type
 * @property {string} published_at
 * @property {null|string} template_suffix
 * @property {string} title
 * @property {string} updated_at
 * @property {string} vendor
 * @property {string} status
 * @property {string} published_scope
 * @property {string} tags
 * @property {Array<PRODUCTS_CREATE_variants>} variants
 * @property {Array} options
 * @property {Array} images
 * @property {null|string} image
 * @property {Array} media
 * @property {Array<PRODUCTS_CREATE_variant_gids>} variant_gids
 * @property {boolean} has_variants_that_requires_components
 * @property {null|string} category
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_shipping_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_shipping_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_shipping_price_set
 * @property {ORDERS_CANCELLED_current_shipping_price_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_current_shipping_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_subtotal_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_subtotal_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_subtotal_price_set
 * @property {ORDERS_CANCELLED_current_subtotal_price_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_current_subtotal_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_total_discounts_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_total_discounts_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_total_discounts_set
 * @property {ORDERS_CANCELLED_current_total_discounts_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_current_total_discounts_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_total_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_total_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_total_price_set
 * @property {ORDERS_CANCELLED_current_total_price_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_current_total_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_total_tax_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_total_tax_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_current_total_tax_set
 * @property {ORDERS_CANCELLED_current_total_tax_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_current_total_tax_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_subtotal_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_subtotal_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_subtotal_price_set
 * @property {ORDERS_CANCELLED_subtotal_price_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_subtotal_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_cash_rounding_payment_adjustment_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_cash_rounding_payment_adjustment_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_cash_rounding_payment_adjustment_set
 * @property {ORDERS_CANCELLED_total_cash_rounding_payment_adjustment_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_total_cash_rounding_payment_adjustment_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_cash_rounding_refund_adjustment_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_cash_rounding_refund_adjustment_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_cash_rounding_refund_adjustment_set
 * @property {ORDERS_CANCELLED_total_cash_rounding_refund_adjustment_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_total_cash_rounding_refund_adjustment_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_discounts_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_discounts_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_discounts_set
 * @property {ORDERS_CANCELLED_total_discounts_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_total_discounts_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_line_items_price_set
 * @property {ORDERS_CANCELLED_total_line_items_price_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_total_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_price_set
 * @property {ORDERS_CANCELLED_total_price_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_total_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_shipping_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_shipping_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_shipping_price_set
 * @property {ORDERS_CANCELLED_total_shipping_price_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_total_shipping_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_tax_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_tax_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_total_tax_set
 * @property {ORDERS_CANCELLED_total_tax_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_total_tax_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_billing_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_customer_email_marketing_consent
 * @property {string} state
 * @property {null|string} opt_in_level
 * @property {null|string} consent_updated_at
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_customer_default_address
 * @property {number} id
 * @property {number} customer_id
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} company
 * @property {string} address1
 * @property {null|string} address2
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} phone
 * @property {string} name
 * @property {string} province_code
 * @property {string} country_code
 * @property {string} country_name
 * @property {boolean} default
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_customer
 * @property {number} id
 * @property {string} email
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} state
 * @property {null|string} note
 * @property {boolean} verified_email
 * @property {null|string} multipass_identifier
 * @property {boolean} tax_exempt
 * @property {null|string} phone
 * @property {ORDERS_CANCELLED_customer_email_marketing_consent} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} tags
 * @property {string} currency
 * @property {Array} tax_exemptions
 * @property {string} admin_graphql_api_id
 * @property {ORDERS_CANCELLED_customer_default_address} default_address
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_line_items_attributed_staffs
 * @property {string} id
 * @property {number} quantity
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_line_items_price_set
 * @property {ORDERS_CANCELLED_line_items_price_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_line_items_total_discount_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_line_items_total_discount_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_line_items_total_discount_set
 * @property {ORDERS_CANCELLED_line_items_total_discount_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_line_items_total_discount_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_line_items
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {Array<ORDERS_CANCELLED_line_items_attributed_staffs>} attributed_staffs
 * @property {number} current_quantity
 * @property {number} fulfillable_quantity
 * @property {string} fulfillment_service
 * @property {null|string} fulfillment_status
 * @property {boolean} gift_card
 * @property {number} grams
 * @property {string} name
 * @property {string} price
 * @property {ORDERS_CANCELLED_line_items_price_set} price_set
 * @property {boolean} product_exists
 * @property {number} product_id
 * @property {Array} properties
 * @property {number} quantity
 * @property {boolean} requires_shipping
 * @property {string} sku
 * @property {boolean} taxable
 * @property {string} title
 * @property {string} total_discount
 * @property {ORDERS_CANCELLED_line_items_total_discount_set} total_discount_set
 * @property {number} variant_id
 * @property {string} variant_inventory_management
 * @property {null|string} variant_title
 * @property {null|string} vendor
 * @property {Array} tax_lines
 * @property {Array} duties
 * @property {Array} discount_allocations
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_shipping_address
 * @property {string} first_name
 * @property {string} address1
 * @property {string} phone
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} last_name
 * @property {null|string} address2
 * @property {string} company
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} name
 * @property {string} country_code
 * @property {string} province_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_shipping_lines_current_discounted_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_shipping_lines_current_discounted_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_shipping_lines_current_discounted_price_set
 * @property {ORDERS_CANCELLED_shipping_lines_current_discounted_price_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_shipping_lines_current_discounted_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_shipping_lines_discounted_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_shipping_lines_discounted_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_shipping_lines_discounted_price_set
 * @property {ORDERS_CANCELLED_shipping_lines_discounted_price_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_shipping_lines_discounted_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_shipping_lines_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_shipping_lines_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_shipping_lines_price_set
 * @property {ORDERS_CANCELLED_shipping_lines_price_set_shop_money} shop_money
 * @property {ORDERS_CANCELLED_shipping_lines_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} ORDERS_CANCELLED_shipping_lines
 * @property {number} id
 * @property {null|string} carrier_identifier
 * @property {null|string} code
 * @property {ORDERS_CANCELLED_shipping_lines_current_discounted_price_set} current_discounted_price_set
 * @property {string} discounted_price
 * @property {ORDERS_CANCELLED_shipping_lines_discounted_price_set} discounted_price_set
 * @property {boolean} is_removed
 * @property {null|string} phone
 * @property {string} price
 * @property {ORDERS_CANCELLED_shipping_lines_price_set} price_set
 * @property {null|string} requested_fulfillment_service_id
 * @property {string} source
 * @property {string} title
 * @property {Array} tax_lines
 * @property {Array} discount_allocations
 */
/**
 * @typedef {Object} ORDERS_CANCELLED
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {null|string} app_id
 * @property {null|string} browser_ip
 * @property {boolean} buyer_accepts_marketing
 * @property {string} cancel_reason
 * @property {string} cancelled_at
 * @property {null|string} cart_token
 * @property {null|string} checkout_id
 * @property {null|string} checkout_token
 * @property {null|string} client_details
 * @property {null|string} closed_at
 * @property {null|string} confirmation_number
 * @property {boolean} confirmed
 * @property {string} contact_email
 * @property {string} created_at
 * @property {string} currency
 * @property {ORDERS_CANCELLED_current_shipping_price_set} current_shipping_price_set
 * @property {string} current_subtotal_price
 * @property {ORDERS_CANCELLED_current_subtotal_price_set} current_subtotal_price_set
 * @property {null|string} current_total_additional_fees_set
 * @property {string} current_total_discounts
 * @property {ORDERS_CANCELLED_current_total_discounts_set} current_total_discounts_set
 * @property {null|string} current_total_duties_set
 * @property {string} current_total_price
 * @property {ORDERS_CANCELLED_current_total_price_set} current_total_price_set
 * @property {string} current_total_tax
 * @property {ORDERS_CANCELLED_current_total_tax_set} current_total_tax_set
 * @property {string} customer_locale
 * @property {null|string} device_id
 * @property {Array} discount_codes
 * @property {boolean} duties_included
 * @property {string} email
 * @property {boolean} estimated_taxes
 * @property {string} financial_status
 * @property {string} fulfillment_status
 * @property {null|string} landing_site
 * @property {null|string} landing_site_ref
 * @property {null|string} location_id
 * @property {string} merchant_business_entity_id
 * @property {null|string} merchant_of_record_app_id
 * @property {string} name
 * @property {null|string} note
 * @property {Array} note_attributes
 * @property {number} number
 * @property {number} order_number
 * @property {string} order_status_url
 * @property {null|string} original_total_additional_fees_set
 * @property {null|string} original_total_duties_set
 * @property {Array<string>} payment_gateway_names
 * @property {null|string} phone
 * @property {null|string} po_number
 * @property {string} presentment_currency
 * @property {string} processed_at
 * @property {null|string} reference
 * @property {null|string} referring_site
 * @property {null|string} source_identifier
 * @property {string} source_name
 * @property {null|string} source_url
 * @property {string} subtotal_price
 * @property {ORDERS_CANCELLED_subtotal_price_set} subtotal_price_set
 * @property {string} tags
 * @property {boolean} tax_exempt
 * @property {Array} tax_lines
 * @property {boolean} taxes_included
 * @property {boolean} test
 * @property {string} token
 * @property {ORDERS_CANCELLED_total_cash_rounding_payment_adjustment_set} total_cash_rounding_payment_adjustment_set
 * @property {ORDERS_CANCELLED_total_cash_rounding_refund_adjustment_set} total_cash_rounding_refund_adjustment_set
 * @property {string} total_discounts
 * @property {ORDERS_CANCELLED_total_discounts_set} total_discounts_set
 * @property {string} total_line_items_price
 * @property {ORDERS_CANCELLED_total_line_items_price_set} total_line_items_price_set
 * @property {string} total_outstanding
 * @property {string} total_price
 * @property {ORDERS_CANCELLED_total_price_set} total_price_set
 * @property {ORDERS_CANCELLED_total_shipping_price_set} total_shipping_price_set
 * @property {string} total_tax
 * @property {ORDERS_CANCELLED_total_tax_set} total_tax_set
 * @property {string} total_tip_received
 * @property {number} total_weight
 * @property {string} updated_at
 * @property {null|string} user_id
 * @property {ORDERS_CANCELLED_billing_address} billing_address
 * @property {ORDERS_CANCELLED_customer} customer
 * @property {Array} discount_applications
 * @property {Array} fulfillments
 * @property {Array<ORDERS_CANCELLED_line_items>} line_items
 * @property {null|string} payment_terms
 * @property {Array} refunds
 * @property {ORDERS_CANCELLED_shipping_address} shipping_address
 * @property {Array<ORDERS_CANCELLED_shipping_lines>} shipping_lines
 * @property {Array} returns
 */
/**
 * @typedef {Object} CUSTOMER_TAGS_REMOVED
 * @property {string} customerId
 * @property {Array<string>} tags
 * @property {string} occurredAt
 */
/**
 * @typedef {Object} INVENTORY_LEVELS_UPDATE
 * @property {number} inventory_item_id
 * @property {number} location_id
 * @property {null|string} available
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} METAOBJECTS_UPDATE_fields
 * @property {string} key
 */
/**
 * @typedef {Object} METAOBJECTS_UPDATE_capabilities_publishable
 * @property {string} status
 */
/**
 * @typedef {Object} METAOBJECTS_UPDATE_capabilities
 * @property {METAOBJECTS_UPDATE_capabilities_publishable} publishable
 */
/**
 * @typedef {Object} METAOBJECTS_UPDATE
 * @property {string} type
 * @property {string} handle
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} display_name
 * @property {string} id
 * @property {string} definition_id
 * @property {METAOBJECTS_UPDATE_fields} fields
 * @property {string} created_by_staff_id
 * @property {string} created_by_app_id
 * @property {METAOBJECTS_UPDATE_capabilities} capabilities
 */
/**
 * @typedef {Object} PROFILES_CREATE
 * @property {number} id
 */
/**
 * @typedef {Object} THEMES_PUBLISH
 * @property {number} id
 * @property {string} name
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} role
 * @property {number} theme_store_id
 * @property {boolean} previewable
 * @property {boolean} processing
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANIES_UPDATE
 * @property {string} name
 * @property {string} note
 * @property {string} external_id
 * @property {string} main_contact_admin_graphql_api_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} customer_since
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_ADD_product_listing_variants_option_values
 * @property {number} option_id
 * @property {string} name
 * @property {string} value
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_ADD_product_listing_variants
 * @property {number} id
 * @property {string} title
 * @property {Array<PRODUCT_LISTINGS_ADD_product_listing_variants_option_values>} option_values
 * @property {string} price
 * @property {string} formatted_price
 * @property {string} compare_at_price
 * @property {number} grams
 * @property {boolean} requires_shipping
 * @property {null|string} sku
 * @property {null|string} barcode
 * @property {boolean} taxable
 * @property {number} position
 * @property {boolean} available
 * @property {string} inventory_policy
 * @property {number} inventory_quantity
 * @property {null|string} inventory_management
 * @property {string} fulfillment_service
 * @property {number} weight
 * @property {string} weight_unit
 * @property {null|string} image_id
 * @property {string} created_at
 * @property {string} updated_at
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_ADD_product_listing_options
 * @property {number} id
 * @property {string} name
 * @property {number} product_id
 * @property {number} position
 * @property {Array<string>} values
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_ADD_product_listing
 * @property {number} product_id
 * @property {null|string} created_at
 * @property {string} updated_at
 * @property {string} body_html
 * @property {string} handle
 * @property {string} product_type
 * @property {string} title
 * @property {string} vendor
 * @property {boolean} available
 * @property {string} tags
 * @property {string} published_at
 * @property {Array<PRODUCT_LISTINGS_ADD_product_listing_variants>} variants
 * @property {Array} images
 * @property {Array<PRODUCT_LISTINGS_ADD_product_listing_options>} options
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_ADD
 * @property {PRODUCT_LISTINGS_ADD_product_listing} product_listing
 */
/**
 * @typedef {Object} SUBSCRIPTION_BILLING_CYCLES_UNSKIP
 * @property {number} subscription_contract_id
 * @property {string} cycle_start_at
 * @property {string} cycle_end_at
 * @property {number} cycle_index
 * @property {null|string} contract_edit
 * @property {string} billing_attempt_expected_date
 * @property {boolean} skipped
 * @property {boolean} edited
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_CREATE_billing_policy
 * @property {string} interval
 * @property {number} interval_count
 * @property {number} min_cycles
 * @property {number} max_cycles
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_CREATE_delivery_policy
 * @property {string} interval
 * @property {number} interval_count
 */
/**
 * @typedef {Object} SUBSCRIPTION_CONTRACTS_CREATE
 * @property {string} admin_graphql_api_id
 * @property {number} id
 * @property {SUBSCRIPTION_CONTRACTS_CREATE_billing_policy} billing_policy
 * @property {string} currency_code
 * @property {number} customer_id
 * @property {string} admin_graphql_api_customer_id
 * @property {SUBSCRIPTION_CONTRACTS_CREATE_delivery_policy} delivery_policy
 * @property {string} status
 * @property {string} admin_graphql_api_origin_order_id
 * @property {number} origin_order_id
 * @property {string} revision_id
 */
/**
 * @typedef {Object} AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_context_context_metadata
 * @property {string} client_ip
 * @property {string} content_type
 * @property {number} response_time_ms
 * @property {string} user_agent
 * @property {boolean} api_request_failed
 * @property {number} response_code
 */
/**
 * @typedef {Object} AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_context
 * @property {string} context_type
 * @property {string} context_identifier
 * @property {AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_context_context_metadata} context_metadata
 */
/**
 * @typedef {Object} AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_actor_actor_metadata
 * @property {string} app_name
 * @property {string} api_version_requested
 * @property {string} api_version_served
 * @property {string} ecosystem_category
 */
/**
 * @typedef {Object} AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_actor_on_behalf_of
 * @property {string} user_email
 */
/**
 * @typedef {Object} AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_actor
 * @property {string} actor_type
 * @property {number} actor_identifier
 * @property {AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_actor_actor_metadata} actor_metadata
 * @property {AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_actor_on_behalf_of} on_behalf_of
 */
/**
 * @typedef {Object} AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_subject_subject_metadata
 */
/**
 * @typedef {Object} AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_subject
 * @property {string} subject_type
 * @property {string} subject_identifier
 * @property {AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_subject_subject_metadata} subject_metadata
 */
/**
 * @typedef {Object} AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_additional_metadata_variables
 * @property {number} first
 */
/**
 * @typedef {Object} AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_additional_metadata
 * @property {string} request_type
 * @property {Array} mutation_names
 * @property {string} query
 * @property {AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_additional_metadata_variables} variables
 * @property {Array} error_codes
 */
/**
 * @typedef {Object} AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event
 * @property {AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_context} context
 * @property {string} action
 * @property {AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_actor} actor
 * @property {AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_subject} subject
 * @property {string} timestamp
 * @property {AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event_additional_metadata} additional_metadata
 */
/**
 * @typedef {Object} AUDIT_EVENTS_ADMIN_API_ACTIVITY_events
 * @property {number} time
 * @property {AUDIT_EVENTS_ADMIN_API_ACTIVITY_events_event} event
 */
/**
 * @typedef {Object} AUDIT_EVENTS_ADMIN_API_ACTIVITY
 * @property {Array<AUDIT_EVENTS_ADMIN_API_ACTIVITY_events>} events
 */
/**
 * @typedef {Object} CUSTOMERS_REDACT_customer
 * @property {number} id
 * @property {string} email
 * @property {string} phone
 */
/**
 * @typedef {Object} CUSTOMERS_REDACT
 * @property {number} shop_id
 * @property {string} shop_domain
 * @property {CUSTOMERS_REDACT_customer} customer
 * @property {Array<number>} orders_to_redact
 */
/**
 * @typedef {Object} SUBSCRIPTION_BILLING_CYCLE_EDITS_CREATE
 * @property {number} subscription_contract_id
 * @property {string} cycle_start_at
 * @property {string} cycle_end_at
 * @property {number} cycle_index
 * @property {null|string} contract_edit
 * @property {string} billing_attempt_expected_date
 * @property {boolean} skipped
 * @property {boolean} edited
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_REMOVE_product_listing
 * @property {number} product_id
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_REMOVE
 * @property {PRODUCT_LISTINGS_REMOVE_product_listing} product_listing
 */
/**
 * @typedef {Object} RETURNS_UPDATE_return_line_items_removals
 * @property {string} admin_graphql_api_id
 * @property {number} delta
 */
/**
 * @typedef {Object} RETURNS_UPDATE_return_line_items
 * @property {Array<RETURNS_UPDATE_return_line_items_removals>} removals
 */
/**
 * @typedef {Object} RETURNS_UPDATE_restocking_fees
 * @property {Array} updates
 * @property {Array} removals
 */
/**
 * @typedef {Object} RETURNS_UPDATE_return_shipping_fees
 * @property {Array} updates
 * @property {Array} removals
 */
/**
 * @typedef {Object} RETURNS_UPDATE
 * @property {string} admin_graphql_api_id
 * @property {RETURNS_UPDATE_return_line_items} return_line_items
 * @property {RETURNS_UPDATE_restocking_fees} restocking_fees
 * @property {RETURNS_UPDATE_return_shipping_fees} return_shipping_fees
 */
/**
 * @typedef {Object} MARKETS_DELETE
 * @property {number} id
 */
/**
 * @typedef {Object} PRODUCT_PUBLICATIONS_UPDATE
 * @property {null|string} id
 * @property {null|string} publication_id
 * @property {string} published_at
 * @property {boolean} published
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {number} product_id
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_properties
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_discounted_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_discounted_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_discounted_price_set
 * @property {CARTS_CREATE_line_items_discounted_price_set_shop_money} shop_money
 * @property {CARTS_CREATE_line_items_discounted_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_line_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_line_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_line_price_set
 * @property {CARTS_CREATE_line_items_line_price_set_shop_money} shop_money
 * @property {CARTS_CREATE_line_items_line_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_original_line_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_original_line_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_original_line_price_set
 * @property {CARTS_CREATE_line_items_original_line_price_set_shop_money} shop_money
 * @property {CARTS_CREATE_line_items_original_line_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_price_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_price_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_price_set
 * @property {CARTS_CREATE_line_items_price_set_shop_money} shop_money
 * @property {CARTS_CREATE_line_items_price_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_total_discount_set_shop_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_total_discount_set_presentment_money
 * @property {string} amount
 * @property {string} currency_code
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items_total_discount_set
 * @property {CARTS_CREATE_line_items_total_discount_set_shop_money} shop_money
 * @property {CARTS_CREATE_line_items_total_discount_set_presentment_money} presentment_money
 */
/**
 * @typedef {Object} CARTS_CREATE_line_items
 * @property {number} id
 * @property {CARTS_CREATE_line_items_properties} properties
 * @property {number} quantity
 * @property {number} variant_id
 * @property {string} key
 * @property {string} discounted_price
 * @property {Array} discounts
 * @property {boolean} gift_card
 * @property {number} grams
 * @property {string} line_price
 * @property {string} original_line_price
 * @property {string} original_price
 * @property {string} price
 * @property {number} product_id
 * @property {string} sku
 * @property {boolean} taxable
 * @property {string} title
 * @property {string} total_discount
 * @property {string} vendor
 * @property {CARTS_CREATE_line_items_discounted_price_set} discounted_price_set
 * @property {CARTS_CREATE_line_items_line_price_set} line_price_set
 * @property {CARTS_CREATE_line_items_original_line_price_set} original_line_price_set
 * @property {CARTS_CREATE_line_items_price_set} price_set
 * @property {CARTS_CREATE_line_items_total_discount_set} total_discount_set
 */
/**
 * @typedef {Object} CARTS_CREATE
 * @property {string} id
 * @property {string} token
 * @property {Array<CARTS_CREATE_line_items>} line_items
 * @property {null|string} note
 * @property {string} updated_at
 * @property {string} created_at
 */
/**
 * @typedef {Object} INVENTORY_ITEMS_CREATE
 * @property {number} id
 * @property {string} sku
 * @property {string} created_at
 * @property {string} updated_at
 * @property {boolean} requires_shipping
 * @property {null|string} cost
 * @property {null|string} country_code_of_origin
 * @property {null|string} province_code_of_origin
 * @property {null|string} harmonized_system_code
 * @property {boolean} tracked
 * @property {Array} country_harmonized_system_codes
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_ORDER_ROUTING_COMPLETE_fulfillment_order
 * @property {string} id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_ORDER_ROUTING_COMPLETE
 * @property {FULFILLMENT_ORDERS_ORDER_ROUTING_COMPLETE_fulfillment_order} fulfillment_order
 */
/**
 * @typedef {Object} SEGMENTS_DELETE
 * @property {number} id
 */
/**
 * @typedef {Object} APP_UNINSTALLED
 * @property {number} id
 * @property {string} name
 * @property {string} email
 * @property {null|string} domain
 * @property {string} province
 * @property {string} country
 * @property {string} address1
 * @property {string} zip
 * @property {string} city
 * @property {null|string} source
 * @property {string} phone
 * @property {null|string} latitude
 * @property {null|string} longitude
 * @property {string} primary_locale
 * @property {null|string} address2
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {string} country_code
 * @property {string} country_name
 * @property {string} currency
 * @property {string} customer_email
 * @property {string} timezone
 * @property {null|string} iana_timezone
 * @property {string} shop_owner
 * @property {string} money_format
 * @property {string} money_with_currency_format
 * @property {string} weight_unit
 * @property {string} province_code
 * @property {null|string} taxes_included
 * @property {null|string} auto_configure_tax_inclusivity
 * @property {null|string} tax_shipping
 * @property {null|string} county_taxes
 * @property {string} plan_display_name
 * @property {string} plan_name
 * @property {boolean} has_discounts
 * @property {boolean} has_gift_cards
 * @property {null|string} myshopify_domain
 * @property {null|string} google_apps_domain
 * @property {null|string} google_apps_login_enabled
 * @property {string} money_in_emails_format
 * @property {string} money_with_currency_in_emails_format
 * @property {boolean} eligible_for_payments
 * @property {boolean} requires_extra_payments_agreement
 * @property {null|string} password_enabled
 * @property {boolean} has_storefront
 * @property {boolean} finances
 * @property {number} primary_location_id
 * @property {boolean} checkout_api_supported
 * @property {boolean} multi_location_enabled
 * @property {boolean} setup_required
 * @property {boolean} pre_launch_enabled
 * @property {Array<string>} enabled_presentment_currencies
 * @property {boolean} marketing_sms_consent_enabled_at_checkout
 * @property {boolean} transactional_sms_disabled
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY_fulfillment_order
 * @property {string} id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY
 * @property {FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY_fulfillment_order} fulfillment_order
 */
/**
 * @typedef {Object} DISCOUNTS_REDEEMCODE_ADDED_redeem_code
 * @property {string} id
 * @property {string} code
 */
/**
 * @typedef {Object} DISCOUNTS_REDEEMCODE_ADDED
 * @property {string} admin_graphql_api_id
 * @property {DISCOUNTS_REDEEMCODE_ADDED_redeem_code} redeem_code
 * @property {string} updated_at
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_UPDATE_company
 * @property {string} name
 * @property {string} note
 * @property {string} external_id
 * @property {string} main_contact_admin_graphql_api_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} customer_since
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_UPDATE_billing_address
 * @property {string} address1
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} recipient
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} address2
 * @property {string} phone
 * @property {string} zone_code
 * @property {string} country_code
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {string} company_admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_UPDATE_shipping_address
 * @property {string} address1
 * @property {string} city
 * @property {string} province
 * @property {string} country
 * @property {string} zip
 * @property {string} recipient
 * @property {null|string} first_name
 * @property {null|string} last_name
 * @property {null|string} address2
 * @property {string} phone
 * @property {string} zone_code
 * @property {string} country_code
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
 * @property {string} company_admin_graphql_api_id
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_UPDATE_tax_registration
 * @property {string} tax_id
 */
/**
 * @typedef {Object} COMPANY_LOCATIONS_UPDATE
 * @property {string} name
 * @property {string} external_id
 * @property {string} phone
 * @property {string} locale
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} note
 * @property {null|string} buyer_experience_configuration
 * @property {string} admin_graphql_api_id
 * @property {Array<string>} tax_exemptions
 * @property {COMPANY_LOCATIONS_UPDATE_company} company
 * @property {COMPANY_LOCATIONS_UPDATE_billing_address} billing_address
 * @property {COMPANY_LOCATIONS_UPDATE_shipping_address} shipping_address
 * @property {COMPANY_LOCATIONS_UPDATE_tax_registration} tax_registration
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_CANCELLATION_REQUEST_ACCEPTED_fulfillment_order
 * @property {string} id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_CANCELLATION_REQUEST_ACCEPTED
 * @property {FULFILLMENT_ORDERS_CANCELLATION_REQUEST_ACCEPTED_fulfillment_order} fulfillment_order
 * @property {string} message
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_UPDATE
 * @property {string} id
 * @property {string} country
 * @property {string} language
 * @property {string} status
 */
/**
 * @typedef {Object} CUSTOMERS_DATA_REQUEST_customer
 * @property {number} id
 * @property {string} email
 * @property {string} phone
 */
/**
 * @typedef {Object} CUSTOMERS_DATA_REQUEST_data_request
 * @property {number} id
 */
/**
 * @typedef {Object} CUSTOMERS_DATA_REQUEST
 * @property {number} shop_id
 * @property {string} shop_domain
 * @property {Array<number>} orders_requested
 * @property {CUSTOMERS_DATA_REQUEST_customer} customer
 * @property {CUSTOMERS_DATA_REQUEST_data_request} data_request
 */
/**
 * @typedef {Object} CUSTOMERS_MARKETING_CONSENT_UPDATE_sms_marketing_consent
 * @property {null|string} state
 * @property {null|string} opt_in_level
 * @property {null|string} consent_updated_at
 * @property {string} consent_collected_from
 */
/**
 * @typedef {Object} CUSTOMERS_MARKETING_CONSENT_UPDATE
 * @property {number} id
 * @property {null|string} phone
 * @property {CUSTOMERS_MARKETING_CONSENT_UPDATE_sms_marketing_consent} sms_marketing_consent
 */
/**
 * @typedef {Object} COLLECTION_PUBLICATIONS_DELETE
 * @property {null|string} id
 */
/**
 * @typedef {Object} LOCATIONS_UPDATE
 * @property {number} id
 * @property {string} name
 * @property {string} address1
 * @property {string} address2
 * @property {string} city
 * @property {string} zip
 * @property {string} province
 * @property {string} country
 * @property {string} phone
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} country_code
 * @property {string} country_name
 * @property {string} province_code
 * @property {boolean} legacy
 * @property {boolean} active
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} COLLECTION_LISTINGS_REMOVE_collection_listing
 * @property {number} collection_id
 */
/**
 * @typedef {Object} COLLECTION_LISTINGS_REMOVE
 * @property {COLLECTION_LISTINGS_REMOVE_collection_listing} collection_listing
 */
/**
 * @typedef {Object} CUSTOMERS_UPDATE
 * @property {number} id
 * @property {string} email
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} first_name
 * @property {string} last_name
 * @property {number} orders_count
 * @property {string} state
 * @property {string} total_spent
 * @property {null|string} last_order_id
 * @property {string} note
 * @property {boolean} verified_email
 * @property {null|string} multipass_identifier
 * @property {boolean} tax_exempt
 * @property {string} tags
 * @property {null|string} last_order_name
 * @property {string} currency
 * @property {null|string} phone
 * @property {Array} addresses
 * @property {Array} tax_exemptions
 * @property {null|string} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_MERGED_merge_intents_fulfillment_order_line_items
 * @property {number} id
 * @property {number} quantity
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_MERGED_merge_intents
 * @property {number} fulfillment_order_id
 * @property {Array<FULFILLMENT_ORDERS_MERGED_merge_intents_fulfillment_order_line_items>} fulfillment_order_line_items
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_MERGED_fulfillment_order_merges_fulfillment_order
 * @property {string} id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_MERGED_fulfillment_order_merges
 * @property {FULFILLMENT_ORDERS_MERGED_fulfillment_order_merges_fulfillment_order} fulfillment_order
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_MERGED
 * @property {Array<FULFILLMENT_ORDERS_MERGED_merge_intents>} merge_intents
 * @property {FULFILLMENT_ORDERS_MERGED_fulfillment_order_merges} fulfillment_order_merges
 */
/**
 * @typedef {Object} RETURNS_CANCEL
 * @property {number} id
 * @property {string} admin_graphql_api_id
 * @property {number} order_id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_CANCELLED_fulfillment_order
 * @property {string} id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_CANCELLED_replacement_fulfillment_order
 * @property {string} id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_CANCELLED
 * @property {FULFILLMENT_ORDERS_CANCELLED_fulfillment_order} fulfillment_order
 * @property {FULFILLMENT_ORDERS_CANCELLED_replacement_fulfillment_order} replacement_fulfillment_order
 */
/**
 * @typedef {Object} COLLECTIONS_CREATE
 * @property {number} id
 * @property {string} handle
 * @property {string} title
 * @property {string} updated_at
 * @property {string} body_html
 * @property {string} published_at
 * @property {null|string} sort_order
 * @property {null|string} template_suffix
 * @property {string} published_scope
 * @property {string} admin_graphql_api_id
 */

export {};
