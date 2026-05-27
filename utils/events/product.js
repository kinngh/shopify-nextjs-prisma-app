const productEventHandler = async (
  topic,
  shop,
  eventRequestBody,
  webhookId,
  apiVersion,
  handle
) => {
  try {
    const eventBody = JSON.parse(eventRequestBody);
  } catch (e) {
    console.error("---> An error occured at /events/product", e);
  }
};

export default productEventHandler;
