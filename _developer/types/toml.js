/**
 *
 * Most of the `Build` config is ommited on purpose since we're not using CLI to run dev
 * Read about config more on:
 * https://shopify.dev/docs/apps/tools/cli/configuration
 *
 */

/**
 * Configuration for the Shopify app
 * @typedef {Object} AppConfig
 * @property {string} name - The name of the application.
 * @property {string} handle - A unique handle for the application.
 * @property {string} client_id - The client ID for OAuth authentication.
 * @property {string[]} application_url - The base URL for the application.
 * @property {string[]} extension_directories - The location of extension directory.
 * @property {boolean} embedded - Indicates if the app is to be embedded within a platform.
 *
 * @property {AccessScopes} access_scopes - The access scopes required by the application.
 * @property {AccessConfig} access - The access scopes required by the application.
 * @property {AuthConfig} auth - Authentication configuration details.
 * @property {WebhooksConfig} webhooks - Configuration for webhooks.
 * @property {AppProxyConfig} app_proxy - Configuration for application proxy.
 * @property {POSConfig} pos - Point of Sale configuration.
 * @property {PreferencesConfig} preferences - App preferences configuration.
 * @property {BuildConfig} build - Build configuration.
 */

/**
 * Access scopes
 * @typedef {Object} AccessScopes
 * @property {string} scopes - The scopes required for accessing resources.
 * @property {string[]} optional_scopes - Optional access scopes for accessing resources.
 * @property {boolean} use_legacy_install_flow - Indicates if the legacy install flow should be used.
 */

/**
 * Access config for Shopify APIs
 * @typedef {Object} AccessConfig
 * @property {('online'|'offline')} direct_api_mode - Access mode that direct api access wil use.
 * @property {boolean} embedded_app_direct_api_access - Whether your embedded app has access to direct api access for calling admin Graphql APIs
 */

/**
 * Authentication configuration
 * @typedef {Object} AuthConfig
 * @property {string[]} redirect_urls - URLs to which the user can be redirected after authentication.
 */

/**
 * Webhook configuration
 * @typedef {Object} WebhooksConfig
 * @property {('2024-10' | '2024-07' | '2024-04' | '2024-01')} api_version - The API version to be used for webhooks.
 * @property {WebhookSubscription[]} subscriptions - Array of webhook subscriptions.
 * @property {PrivacyComplianceConfig} privacy_compliance - Configuration for privacy compliance.
 */

/**
 * Webhook subscription
 * @typedef {Object} WebhookSubscription
 * @property {string[]} topics - Array of webhook topics to subscribe to.
 * @property {string} url - The URL to receive webhook events.
 * @property {string} [filter] - Optional filter for webhook events.
 * @property {string[]} [include_fields] - Optional array of fields to include in the webhook payload.
 */

/**
 * GDPR Strings
 * @typedef {Object} PrivacyComplianceConfig
 * @property {string} customer_deletion_url - GPDR route to customer deletion url
 * @property {string} customer_data_request_url - GPDR route to customer data request url
 * @property {string} shop_deletion_url - GPDR route to shop deletion url

 */

/**
 * App proxy
 * @typedef {Object} AppProxyConfig
 * @property {string} url - The base URL for the app proxy.
 * @property {string} subpath - The subpath at which the app proxy is accessible.
 * @property {('apps' | 'a' | 'community' | 'tools' )} prefix - The prefix used for the app proxy routes.
 */ z;

/**
 * Point of Sale (POS) configuration
 * @typedef {Object} POSConfig
 * @property {boolean} embedded - Indicates if the POS app is to be embedded within a platform.
 */

/**
 * Preferences configuration
 * @typedef {Object} PreferencesConfig
 * @property {boolean} url - URL for your app's preferences page
 */

/**
 * Preferences configuration
 * @typedef {Object} BuildConfig
 * @property {boolean} include_config_on_deploy - Includes the toml file when deploying to Shopify
 */

export {};
