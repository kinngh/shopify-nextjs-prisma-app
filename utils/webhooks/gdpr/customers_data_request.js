/**
 * @typedef {import("@/_developer/types/2026-07/webhooks.js").CUSTOMERS_DATA_REQUEST} CustomersDataRequest
 */

const customersDataRequestHandler = async (
  topic,
  shop,
  webhookRequestBody,
  webhookId,
  apiVersion
) => {
  /** @type {CustomersDataRequest} */
  const webhookBody = JSON.parse(webhookRequestBody);
  console.log("gdpr/customers_data_request", webhookBody, shop);
};

export default customersDataRequestHandler;
