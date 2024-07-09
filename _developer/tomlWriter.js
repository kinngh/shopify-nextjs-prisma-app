import toml from "@iarna/toml";
import "dotenv/config";
import fs from "fs";
import path from "path";
import setupCheck from "../utils/setupCheck.js";
import webhookWriter from "./webhookWriter.js";

/** @typedef {import("@/_developer/types/toml.js").AppConfig} Config */

/** @type {Config} */
let config = {};

try {
  setupCheck(); //Run setup check to ensure all env variables are accessible

  let appUrl = process.env.SHOPIFY_APP_URL;
  if (appUrl.endsWith("/")) {
    appUrl = appUrl.slice(0, -1);
  }
  // Globals
  config.name = process.env.APP_NAME;
  config.handle = process.env.APP_HANDLE;
  config.client_id = process.env.SHOPIFY_API_KEY;
  config.application_url = appUrl;
  config.embedded = true;
  config.extension_directories = ["../extension/extensions/*"];

  // Auth
  config.auth = {};
  config.auth.redirect_urls = [`${appUrl}/api/`];
  //Scopes
  config.access_scopes = {};
  config.access_scopes.scopes = process.env.SHOPIFY_API_SCOPES;
  config.access_scopes.use_legacy_install_flow = false;

  // Webhook event version to always match the app API version
  config.webhooks = {};
  config.webhooks.api_version = process.env.SHOPIFY_API_VERSION;

  // Webhooks
  webhookWriter(config);

  // GDPR URLs
  config.webhooks.privacy_compliance = {};
  config.webhooks.privacy_compliance.customer_data_request_url = `${appUrl}/api/gdpr/customers_data_request`;
  config.webhooks.privacy_compliance.customer_deletion_url = `${appUrl}/api/gdpr/customers_redact`;
  config.webhooks.privacy_compliance.shop_deletion_url = `${appUrl}/api/gdpr/shop_redact`;

  // App Proxy
  if (
    process.env.APP_PROXY_PREFIX?.length > 0 &&
    process.env.APP_PROXY_SUBPATH?.length > 0
  ) {
    config.app_proxy = {};
    config.app_proxy.url = `${appUrl}/api/proxy_route`;
    config.app_proxy.prefix = process.env.APP_PROXY_PREFIX;
    config.app_proxy.subpath = process.env.APP_PROXY_SUBPATH;
  }

  // PoS
  if (process.env.POS_EMBEDDED?.length > 1) {
    config.pos = {};
    config.pos.embedded = process.env.POS_EMBEDDED === "true";
  }

  //Build
  config.build = {};
  config.build.include_config_on_deploy = true;

  //Write to toml
  let str = toml.stringify(config);
  str =
    "# Avoid writing to toml directly. Use your .env file instead\n\n" + str;

  fs.writeFileSync(path.join(process.cwd(), "shopify.app.toml"), str, (err) => {
    if (err) {
      console.log("An error occured while writing to file", e);
      return;
    }

    console.log("Written TOML to root");
    return;
  });

  const extensionsDir = path.join("..", "extension");

  config.extension_directories = ["./extensions/*"];
  let extensionStr = toml.stringify(config);
  extensionStr =
    "# Avoid writing to toml directly. Use your .env file instead\n\n" +
    extensionStr;

  config.extension_directories = ["extension/extensions/*"];
  let globalStr = toml.stringify(config);
  globalStr =
    "# Avoid writing to toml directly. Use your .env file instead\n\n" +
    globalStr;

  if (fs.existsSync(extensionsDir)) {
    fs.writeFileSync(
      path.join(process.cwd(), "..", "shopify.app.toml"),
      globalStr,
      (err) => {
        if (err) {
          console.log("An error occured while writing to file", e);
          return;
        }

        console.log("Written TOML to root");
        return;
      }
    );

    fs.writeFileSync(
      path.join(extensionsDir, "shopify.app.toml"),
      extensionStr,
      (err) => {
        if (err) {
          console.log("An error occured while writing to file", e);
          return;
        }

        console.log("Written TOML to extension");
        return;
      }
    );
  }
} catch (e) {
  console.error("---> An error occured while writing toml files");
  console.log(e.message);
}
