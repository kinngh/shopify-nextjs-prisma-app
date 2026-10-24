/**
 * @typedef {import("@/_developer/types/2026-07/webhooks.js").SHOP_REDACT} ShopRedact
 */

const shopRedactHandler = async (
  topic,
  shop,
  webhookRequestBody,
  webhookId,
  apiVersion
) => {
  /** @type {ShopRedact} */
  const webhookBody = JSON.parse(webhookRequestBody);
  console.log("gdpr/shop_redact", webhookBody, shop);
};

export default shopRedactHandler;
