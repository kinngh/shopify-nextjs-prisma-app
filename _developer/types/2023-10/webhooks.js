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
 * @property {string} cookie_consent_level
 * @property {boolean} checkout_api_supported
 * @property {boolean} multi_location_enabled
 * @property {boolean} setup_required
 * @property {boolean} pre_launch_enabled
 * @property {Array<string>} enabled_presentment_currencies
 * @property {boolean} transactional_sms_disabled
 * @property {boolean} marketing_sms_consent_enabled_at_checkout
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
 * @property {Array} tax_lines
 * @property {boolean} taxable
 * @property {string} title
 * @property {null|string} variant_id
 * @property {string} variant_title
 * @property {null|string} variant_price
 * @property {string} vendor
 * @property {null|string} user_id
 * @property {null|string} unit_price_measurement
 * @property {null|string} rank
 * @property {null|string} compare_at_price
 * @property {string} line_price
 * @property {string} price
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
 * @property {boolean} accepts_marketing
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
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
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
 * @property {Array} tax_lines
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
 * @property {CHECKOUTS_CREATE_billing_address} billing_address
 * @property {CHECKOUTS_CREATE_shipping_address} shipping_address
 * @property {CHECKOUTS_CREATE_customer} customer
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
 * @property {null|string} total_duties
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
 * @property {Array} tax_lines
 * @property {boolean} taxable
 * @property {string} title
 * @property {null|string} variant_id
 * @property {string} variant_title
 * @property {null|string} variant_price
 * @property {string} vendor
 * @property {null|string} user_id
 * @property {null|string} unit_price_measurement
 * @property {null|string} rank
 * @property {null|string} compare_at_price
 * @property {string} line_price
 * @property {string} price
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
 * @property {boolean} accepts_marketing
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
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
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
 * @property {Array} tax_lines
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
 * @property {CHECKOUTS_UPDATE_billing_address} billing_address
 * @property {CHECKOUTS_UPDATE_shipping_address} shipping_address
 * @property {CHECKOUTS_UPDATE_customer} customer
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
/**
 * @typedef {Object} COLLECTIONS_DELETE
 * @property {number} id
 * @property {string} published_scope
 * @property {string} admin_graphql_api_id
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
 * @typedef {Object} COLLECTION_LISTINGS_REMOVE_collection_listing
 * @property {number} collection_id
 */
/**
 * @typedef {Object} COLLECTION_LISTINGS_REMOVE
 * @property {COLLECTION_LISTINGS_REMOVE_collection_listing} collection_listing
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
 * @typedef {Object} COMPANY_CONTACT_ROLES_ASSIGN
 */
/**
 * @typedef {Object} COMPANY_CONTACT_ROLES_REVOKE
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
 * @typedef {Object} CUSTOMERS_CREATE
 * @property {number} id
 * @property {string} email
 * @property {boolean} accepts_marketing
 * @property {null|string} created_at
 * @property {null|string} updated_at
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
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
 * @property {Array} tax_exemptions
 * @property {null|string} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} CUSTOMERS_DELETE
 * @property {number} id
 * @property {null|string} phone
 * @property {Array} addresses
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
 * @property {Array} tax_exemptions
 * @property {null|string} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} CUSTOMERS_DISABLE
 * @property {number} id
 * @property {string} email
 * @property {boolean} accepts_marketing
 * @property {null|string} created_at
 * @property {null|string} updated_at
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
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
 * @property {Array} tax_exemptions
 * @property {null|string} email_marketing_consent
 * @property {null|string} sms_marketing_consent
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
 * @typedef {Object} CUSTOMERS_ENABLE
 * @property {number} id
 * @property {string} email
 * @property {boolean} accepts_marketing
 * @property {null|string} created_at
 * @property {null|string} updated_at
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
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
 * @property {Array} tax_exemptions
 * @property {null|string} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} admin_graphql_api_id
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
 * @typedef {Object} CUSTOMERS_UPDATE
 * @property {number} id
 * @property {string} email
 * @property {boolean} accepts_marketing
 * @property {null|string} created_at
 * @property {null|string} updated_at
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
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
 * @property {Array} tax_exemptions
 * @property {null|string} email_marketing_consent
 * @property {null|string} sms_marketing_consent
 * @property {string} admin_graphql_api_id
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
 * @typedef {Object} CUSTOMER_GROUPS_DELETE
 * @property {number} id
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
 * @property {string} issued_at
 * @property {string} due_at
 * @property {string} completed_at
 * @property {string} amount
 * @property {string} currency
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
 * @property {boolean} accepts_marketing
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
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
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
 * @typedef {Object} DRAFT_ORDERS_DELETE_payment_terms_payment_schedules
 * @property {number} id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {number} payment_terms_id
 * @property {string} issued_at
 * @property {string} due_at
 * @property {string} completed_at
 * @property {string} amount
 * @property {string} currency
 */
/**
 * @typedef {Object} DRAFT_ORDERS_DELETE_payment_terms
 * @property {number} id
 * @property {string} payment_terms_name
 * @property {string} payment_terms_type
 * @property {number} due_in_days
 * @property {string} created_at
 * @property {string} updated_at
 * @property {Array<DRAFT_ORDERS_DELETE_payment_terms_payment_schedules>} payment_schedules
 */
/**
 * @typedef {Object} DRAFT_ORDERS_DELETE
 * @property {number} id
 * @property {DRAFT_ORDERS_DELETE_payment_terms} payment_terms
 * @property {string} admin_graphql_api_id
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
 * @property {string} issued_at
 * @property {string} due_at
 * @property {string} completed_at
 * @property {string} amount
 * @property {string} currency
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
 * @property {boolean} accepts_marketing
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
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
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
 * @typedef {Object} FULFILLMENT_ORDERS_HOLD_RELEASED_fulfillment_order
 * @property {string} id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_HOLD_RELEASED
 * @property {FULFILLMENT_ORDERS_HOLD_RELEASED_fulfillment_order} fulfillment_order
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
 * @typedef {Object} FULFILLMENT_ORDERS_MOVED_source_location
 * @property {string} id
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_MOVED
 * @property {FULFILLMENT_ORDERS_MOVED_original_fulfillment_order} original_fulfillment_order
 * @property {FULFILLMENT_ORDERS_MOVED_moved_fulfillment_order} moved_fulfillment_order
 * @property {string} destination_location_id
 * @property {FULFILLMENT_ORDERS_MOVED_source_location} source_location
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
 * @typedef {Object} FULFILLMENT_ORDERS_PLACED_ON_HOLD_fulfillment_order_fulfillment_holds
 * @property {string} reason
 * @property {string} reason_notes
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_PLACED_ON_HOLD_fulfillment_order
 * @property {string} id
 * @property {string} status
 * @property {Array<FULFILLMENT_ORDERS_PLACED_ON_HOLD_fulfillment_order_fulfillment_holds>} fulfillment_holds
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_PLACED_ON_HOLD
 * @property {FULFILLMENT_ORDERS_PLACED_ON_HOLD_fulfillment_order} fulfillment_order
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
 * @typedef {Object} FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY_fulfillment_order
 * @property {string} id
 * @property {string} status
 */
/**
 * @typedef {Object} FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY
 * @property {FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY_fulfillment_order} fulfillment_order
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
 * @typedef {Object} INVENTORY_ITEMS_DELETE
 * @property {number} id
 * @property {null|string} country_code_of_origin
 * @property {null|string} province_code_of_origin
 * @property {null|string} harmonized_system_code
 * @property {Array} country_harmonized_system_codes
 * @property {string} admin_graphql_api_id
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
 * @typedef {Object} INVENTORY_LEVELS_CONNECT
 * @property {number} inventory_item_id
 * @property {number} location_id
 * @property {null|string} available
 * @property {string} updated_at
 * @property {string} admin_graphql_api_id
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
 * @typedef {Object} LOCALES_CREATE
 * @property {string} locale
 * @property {boolean} published
 */
/**
 * @typedef {Object} LOCALES_UPDATE
 * @property {string} locale
 * @property {boolean} published
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
 * @typedef {Object} LOCATIONS_DELETE
 * @property {number} id
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
 * @typedef {Object} MARKETS_DELETE
 * @property {number} id
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
 * @property {boolean} accepts_marketing
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
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
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
 * @property {string} discounted_price
 * @property {ORDERS_CANCELLED_shipping_lines_discounted_price_set} discounted_price_set
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
 * @property {string} email
 * @property {boolean} estimated_taxes
 * @property {string} financial_status
 * @property {string} fulfillment_status
 * @property {null|string} landing_site
 * @property {null|string} landing_site_ref
 * @property {null|string} location_id
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
 * @property {null|string} processed_at
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
 * @property {boolean} accepts_marketing
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
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
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
 * @property {string} discounted_price
 * @property {ORDERS_CREATE_shipping_lines_discounted_price_set} discounted_price_set
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
 * @property {string} email
 * @property {boolean} estimated_taxes
 * @property {string} financial_status
 * @property {string} fulfillment_status
 * @property {null|string} landing_site
 * @property {null|string} landing_site_ref
 * @property {null|string} location_id
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
 * @property {null|string} processed_at
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
 */
/**
 * @typedef {Object} ORDERS_DELETE
 * @property {number} id
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
 */
/**
 * @typedef {Object} ORDERS_EDITED_order_edit_discounts
 * @property {ORDERS_EDITED_order_edit_discounts_line_item} line_item
 */
/**
 * @typedef {Object} ORDERS_EDITED_order_edit_shipping_lines
 * @property {Array} additions
 */
/**
 * @typedef {Object} ORDERS_EDITED_order_edit
 * @property {number} id
 * @property {null|string} app_id
 * @property {string} created_at
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
 * @property {boolean} accepts_marketing
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
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
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
 * @property {string} discounted_price
 * @property {ORDERS_FULFILLED_shipping_lines_discounted_price_set} discounted_price_set
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
 * @property {string} email
 * @property {boolean} estimated_taxes
 * @property {string} financial_status
 * @property {string} fulfillment_status
 * @property {null|string} landing_site
 * @property {null|string} landing_site_ref
 * @property {null|string} location_id
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
 * @property {null|string} processed_at
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
 * @property {boolean} accepts_marketing
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
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
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
 * @property {string} discounted_price
 * @property {ORDERS_PAID_shipping_lines_discounted_price_set} discounted_price_set
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
 * @property {string} email
 * @property {boolean} estimated_taxes
 * @property {string} financial_status
 * @property {string} fulfillment_status
 * @property {null|string} landing_site
 * @property {null|string} landing_site_ref
 * @property {null|string} location_id
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
 * @property {null|string} processed_at
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
 * @property {boolean} accepts_marketing
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
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
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
 * @property {string} discounted_price
 * @property {ORDERS_PARTIALLY_FULFILLED_shipping_lines_discounted_price_set} discounted_price_set
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
 * @property {string} email
 * @property {boolean} estimated_taxes
 * @property {string} financial_status
 * @property {string} fulfillment_status
 * @property {null|string} landing_site
 * @property {null|string} landing_site_ref
 * @property {null|string} location_id
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
 * @property {null|string} processed_at
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
 * @property {boolean} accepts_marketing
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
 * @property {null|string} accepts_marketing_updated_at
 * @property {null|string} marketing_opt_in_level
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
 * @property {string} discounted_price
 * @property {ORDERS_UPDATED_shipping_lines_discounted_price_set} discounted_price_set
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
 * @property {string} email
 * @property {boolean} estimated_taxes
 * @property {string} financial_status
 * @property {string} fulfillment_status
 * @property {null|string} landing_site
 * @property {null|string} landing_site_ref
 * @property {null|string} location_id
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
 * @property {null|string} processed_at
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
 * @property {string} admin_graphql_api_id
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
 * @typedef {Object} PRODUCTS_CREATE_variants
 * @property {number} id
 * @property {number} product_id
 * @property {string} title
 * @property {string} price
 * @property {string} sku
 * @property {number} position
 * @property {string} inventory_policy
 * @property {string} compare_at_price
 * @property {string} fulfillment_service
 * @property {string} inventory_management
 * @property {string} option1
 * @property {null|string} option2
 * @property {null|string} option3
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {boolean} taxable
 * @property {null|string} barcode
 * @property {number} grams
 * @property {null|string} image_id
 * @property {number} weight
 * @property {string} weight_unit
 * @property {null|string} inventory_item_id
 * @property {number} inventory_quantity
 * @property {number} old_inventory_quantity
 * @property {boolean} requires_shipping
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} PRODUCTS_CREATE_options
 * @property {number} id
 * @property {number} product_id
 * @property {string} name
 * @property {number} position
 * @property {Array<string>} values
 */
/**
 * @typedef {Object} PRODUCTS_CREATE_images
 * @property {number} id
 * @property {number} product_id
 * @property {number} position
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {null|string} alt
 * @property {number} width
 * @property {number} height
 * @property {string} src
 * @property {Array} variant_ids
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} PRODUCTS_CREATE
 * @property {number} id
 * @property {string} title
 * @property {string} body_html
 * @property {string} vendor
 * @property {string} product_type
 * @property {null|string} created_at
 * @property {string} handle
 * @property {string} updated_at
 * @property {string} published_at
 * @property {null|string} template_suffix
 * @property {string} status
 * @property {string} published_scope
 * @property {string} tags
 * @property {string} admin_graphql_api_id
 * @property {Array<PRODUCTS_CREATE_variants>} variants
 * @property {Array<PRODUCTS_CREATE_options>} options
 * @property {Array<PRODUCTS_CREATE_images>} images
 * @property {null|string} image
 */
/**
 * @typedef {Object} PRODUCTS_DELETE
 * @property {number} id
 */
/**
 * @typedef {Object} PRODUCTS_UPDATE_variants
 * @property {number} id
 * @property {number} product_id
 * @property {string} title
 * @property {string} price
 * @property {string} sku
 * @property {number} position
 * @property {string} inventory_policy
 * @property {string} compare_at_price
 * @property {string} fulfillment_service
 * @property {string} inventory_management
 * @property {string} option1
 * @property {null|string} option2
 * @property {null|string} option3
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {boolean} taxable
 * @property {null|string} barcode
 * @property {number} grams
 * @property {null|string} image_id
 * @property {number} weight
 * @property {string} weight_unit
 * @property {null|string} inventory_item_id
 * @property {number} inventory_quantity
 * @property {number} old_inventory_quantity
 * @property {boolean} requires_shipping
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} PRODUCTS_UPDATE_options
 * @property {number} id
 * @property {number} product_id
 * @property {string} name
 * @property {number} position
 * @property {Array<string>} values
 */
/**
 * @typedef {Object} PRODUCTS_UPDATE_images
 * @property {number} id
 * @property {number} product_id
 * @property {number} position
 * @property {null|string} created_at
 * @property {null|string} updated_at
 * @property {null|string} alt
 * @property {number} width
 * @property {number} height
 * @property {string} src
 * @property {Array} variant_ids
 * @property {string} admin_graphql_api_id
 */
/**
 * @typedef {Object} PRODUCTS_UPDATE
 * @property {number} id
 * @property {string} title
 * @property {string} body_html
 * @property {string} vendor
 * @property {string} product_type
 * @property {null|string} created_at
 * @property {string} handle
 * @property {string} updated_at
 * @property {string} published_at
 * @property {null|string} template_suffix
 * @property {string} status
 * @property {string} published_scope
 * @property {string} tags
 * @property {string} admin_graphql_api_id
 * @property {Array<PRODUCTS_UPDATE_variants>} variants
 * @property {Array<PRODUCTS_UPDATE_options>} options
 * @property {Array<PRODUCTS_UPDATE_images>} images
 * @property {null|string} image
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
 * @property {string} language
 * @property {string} country
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC_fullSync
 * @property {string} createdAt
 * @property {string} errorCode
 * @property {string} status
 * @property {number} count
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_FULL_SYNC
 * @property {PRODUCT_FEEDS_FULL_SYNC_metadata} metadata
 * @property {PRODUCT_FEEDS_FULL_SYNC_productFeed} productFeed
 * @property {PRODUCT_FEEDS_FULL_SYNC_fullSync} fullSync
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
 * @property {string} language
 * @property {string} country
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
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product_variants_edges_node_price
 * @property {string} amount
 * @property {string} currencyCode
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
 * @property {null|string} barcode
 * @property {number} weight
 * @property {string} weightUnit
 * @property {boolean} requireShipping
 * @property {null|string} image
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
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product_seo
 * @property {string} title
 * @property {string} description
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product_metafields
 * @property {string} namespace
 * @property {string} key
 * @property {string} value
 * @property {string} type
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC_product
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} onlineStoreUrl
 * @property {string} updatedAt
 * @property {string} productType
 * @property {string} vendor
 * @property {string} handle
 * @property {boolean} isPublished
 * @property {string} publishedAt
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_product_images} images
 * @property {Array<PRODUCT_FEEDS_INCREMENTAL_SYNC_product_options>} options
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_product_variants} variants
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_product_seo} seo
 * @property {Array<PRODUCT_FEEDS_INCREMENTAL_SYNC_product_metafields>} metafields
 */
/**
 * @typedef {Object} PRODUCT_FEEDS_INCREMENTAL_SYNC
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_metadata} metadata
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_productFeed} productFeed
 * @property {PRODUCT_FEEDS_INCREMENTAL_SYNC_product} product
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
 * @property {string} sku
 * @property {null|string} barcode
 * @property {boolean} taxable
 * @property {number} position
 * @property {boolean} available
 * @property {string} inventory_policy
 * @property {number} inventory_quantity
 * @property {string} inventory_management
 * @property {string} fulfillment_service
 * @property {number} weight
 * @property {string} weight_unit
 * @property {null|string} image_id
 * @property {null|string} created_at
 * @property {null|string} updated_at
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_ADD_product_listing_images
 * @property {number} id
 * @property {null|string} created_at
 * @property {number} position
 * @property {null|string} updated_at
 * @property {number} product_id
 * @property {string} src
 * @property {Array} variant_ids
 * @property {number} width
 * @property {number} height
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
 * @property {Array<PRODUCT_LISTINGS_ADD_product_listing_images>} images
 * @property {Array<PRODUCT_LISTINGS_ADD_product_listing_options>} options
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_ADD
 * @property {PRODUCT_LISTINGS_ADD_product_listing} product_listing
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
 * @property {string} sku
 * @property {null|string} barcode
 * @property {boolean} taxable
 * @property {number} position
 * @property {boolean} available
 * @property {string} inventory_policy
 * @property {number} inventory_quantity
 * @property {string} inventory_management
 * @property {string} fulfillment_service
 * @property {number} weight
 * @property {string} weight_unit
 * @property {null|string} image_id
 * @property {null|string} created_at
 * @property {null|string} updated_at
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_UPDATE_product_listing_images
 * @property {number} id
 * @property {null|string} created_at
 * @property {number} position
 * @property {null|string} updated_at
 * @property {number} product_id
 * @property {string} src
 * @property {Array} variant_ids
 * @property {number} width
 * @property {number} height
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
 * @property {Array<PRODUCT_LISTINGS_UPDATE_product_listing_images>} images
 * @property {Array<PRODUCT_LISTINGS_UPDATE_product_listing_options>} options
 */
/**
 * @typedef {Object} PRODUCT_LISTINGS_UPDATE
 * @property {PRODUCT_LISTINGS_UPDATE_product_listing} product_listing
 */
/**
 * @typedef {Object} PROFILES_CREATE
 * @property {number} id
 */
/**
 * @typedef {Object} PROFILES_DELETE
 * @property {number} id
 */
/**
 * @typedef {Object} PROFILES_UPDATE
 * @property {number} id
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
 * @property {null|string} created_at
 * @property {string} note
 * @property {number} user_id
 * @property {null|string} processed_at
 * @property {boolean} restock
 * @property {Array} duties
 * @property {REFUNDS_CREATE_total_duties_set} total_duties_set
 * @property {null|string} return
 * @property {string} admin_graphql_api_id
 * @property {Array<REFUNDS_CREATE_refund_line_items>} refund_line_items
 * @property {Array} transactions
 * @property {Array} order_adjustments
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
 * @property {string} sku
 * @property {null|string} barcode
 * @property {boolean} taxable
 * @property {number} position
 * @property {boolean} available
 * @property {string} inventory_policy
 * @property {number} inventory_quantity
 * @property {string} inventory_management
 * @property {string} fulfillment_service
 * @property {number} weight
 * @property {string} weight_unit
 * @property {null|string} image_id
 * @property {null|string} created_at
 * @property {null|string} updated_at
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_ADD_scheduled_product_listing_images
 * @property {number} id
 * @property {null|string} created_at
 * @property {number} position
 * @property {null|string} updated_at
 * @property {number} product_id
 * @property {string} src
 * @property {Array} variant_ids
 * @property {number} width
 * @property {number} height
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
 * @property {Array<SCHEDULED_PRODUCT_LISTINGS_ADD_scheduled_product_listing_images>} images
 * @property {Array<SCHEDULED_PRODUCT_LISTINGS_ADD_scheduled_product_listing_options>} options
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_ADD
 * @property {SCHEDULED_PRODUCT_LISTINGS_ADD_scheduled_product_listing} scheduled_product_listing
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
 * @property {string} sku
 * @property {null|string} barcode
 * @property {boolean} taxable
 * @property {number} position
 * @property {boolean} available
 * @property {string} inventory_policy
 * @property {number} inventory_quantity
 * @property {string} inventory_management
 * @property {string} fulfillment_service
 * @property {number} weight
 * @property {string} weight_unit
 * @property {null|string} image_id
 * @property {null|string} created_at
 * @property {null|string} updated_at
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_UPDATE_scheduled_product_listing_images
 * @property {number} id
 * @property {null|string} created_at
 * @property {number} position
 * @property {null|string} updated_at
 * @property {number} product_id
 * @property {string} src
 * @property {Array} variant_ids
 * @property {number} width
 * @property {number} height
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
 * @property {Array<SCHEDULED_PRODUCT_LISTINGS_UPDATE_scheduled_product_listing_images>} images
 * @property {Array<SCHEDULED_PRODUCT_LISTINGS_UPDATE_scheduled_product_listing_options>} options
 */
/**
 * @typedef {Object} SCHEDULED_PRODUCT_LISTINGS_UPDATE
 * @property {SCHEDULED_PRODUCT_LISTINGS_UPDATE_scheduled_product_listing} scheduled_product_listing
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
 * @typedef {Object} SELLING_PLAN_GROUPS_DELETE
 * @property {string} admin_graphql_api_id
 * @property {number} id
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
 * @property {string} cookie_consent_level
 * @property {boolean} checkout_api_supported
 * @property {boolean} multi_location_enabled
 * @property {boolean} setup_required
 * @property {boolean} pre_launch_enabled
 * @property {Array<string>} enabled_presentment_currencies
 * @property {boolean} transactional_sms_disabled
 * @property {boolean} marketing_sms_consent_enabled_at_checkout
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
 * @typedef {Object} THEMES_DELETE
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

export {};
