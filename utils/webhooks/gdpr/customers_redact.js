/**
 * @typedef {import("@/_developer/types/2026-07/webhooks.js").CUSTOMERS_REDACT} CustomersRedact
 */

const customersRedactHandler = async (
  topic,
  shop,
  webhookRequestBody,
  webhookId,
  apiVersion
) => {
  /** @type {CustomersRedact} */
  const webhookBody = JSON.parse(webhookRequestBody);
  console.log("gdpr/customers_redact", webhookBody, shop);
};

export default customersRedactHandler;
