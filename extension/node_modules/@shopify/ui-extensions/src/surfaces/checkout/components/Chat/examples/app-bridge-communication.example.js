// Create a variable to store the buyer's first name.
// We'll be able to use this to personalize the chat experience.
let buyerFirstName;

// In the hosted application Javascript, listen for messages from the UI extension.
shopify.extension.port.onmessage = async (event) => {
  // if the message's data has a ping action, respond with a pong
  if (event.data.action === 'ping') {
    buyerFirstName = event.data.buyer.firstName;

    await shopify.extension.port.postMessage({
      action: 'pong',
    });
  }
};

// Ensure the messagePort is ready to start sending and receiving messages.
shopify.extension.port.start();
