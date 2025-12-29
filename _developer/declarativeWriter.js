import shopify from "../utils/shopify.js";

/**
 * @typedef {import("@/_developer/types/declarative.js").DeclarativeMetafieldDefinition} DeclarativeMetafieldDefinition
 */

/**
 * Write declarative metafield definitions into the TOML config object.
 *
 * Output shape (example):
 *   config.product.metafields.app.last_synced = { name, description, type, access, capabilities, validations }
 *
 * @param {import("@/_developer/types/toml.js").AppConfig} config
 * @param {{ user?: { metafields?: DeclarativeMetafieldDefinition[] } }=} shopifyInstance
 */
function declarativeWriter(config) {
  try {
    if (!config || typeof config !== "object") return;

    const metafields = shopify?.user?.metafields;
    if (!Array.isArray(metafields) || metafields.length === 0) return;

    for (const def of metafields) {
      if (!def || typeof def !== "object") continue;

      let owner = def.owner_type;
      let namespace = def.namespace || "app";
      let key = def.key;

      if (!owner || !namespace || !key) continue;

      // Ensure path: config[owner].metafields[namespace]
      config[owner] ? null : (config[owner] = {});
      config[owner].metafields ? null : (config[owner].metafields = {});
      config[owner].metafields[namespace]
        ? null
        : (config[owner].metafields[namespace] = {});

      let out = {};
      out.name = def.name;
      out.description = def.description ?? "";
      out.type = def.type;

      if (def.access && typeof def.access === "object") {
        out.access = {};

        def.access.admin ? (out.access.admin = def.access.admin) : null;
        def.access.storefront
          ? (out.access.storefront = def.access.storefront)
          : null;
        def.access.customer_account
          ? (out.access.customer_account = def.access.customer_account)
          : null;

        Object.keys(out.access).length === 0 ? delete out.access : null;
      }

      if (def.capabilities && typeof def.capabilities === "object") {
        out.capabilities = {};

        typeof def.capabilities.admin_filterable === "boolean"
          ? (out.capabilities.admin_filterable =
              def.capabilities.admin_filterable)
          : null;

        typeof def.capabilities.unique_values === "boolean"
          ? (out.capabilities.unique_values = def.capabilities.unique_values)
          : null;

        Object.keys(out.capabilities).length === 0
          ? delete out.capabilities
          : null;
      }

      if (def.validations != null) {
        if (Array.isArray(def.validations)) {
          const validationsTable = {};

          for (const v of def.validations) {
            if (!v || typeof v !== "object") continue;

            const name =
              typeof v.name === "string" ? v.name.trim() : String(v.name || "");
            if (!name) continue;

            const value = v.value;

            // Skip null/undefined/empty-string values
            if (value == null) continue;
            if (typeof value === "string" && !value.trim()) continue;

            validationsTable[name] = value;
          }

          Object.keys(validationsTable).length > 0
            ? (out.validations = validationsTable)
            : null;
        } else if (
          def.validations &&
          typeof def.validations === "object" &&
          !Array.isArray(def.validations)
        ) {
          Object.keys(def.validations).length > 0
            ? (out.validations = def.validations)
            : null;
        } else if (typeof def.validations === "string") {
          def.validations.trim() ? (out.validations = def.validations) : null;
        }
      }

      config[owner].metafields[namespace][key] = out;
    }
  } catch (e) {
    console.error("---> An error occured while writing declarative metafields");
    console.log(e?.message || e);
  }
}

export default declarativeWriter;
