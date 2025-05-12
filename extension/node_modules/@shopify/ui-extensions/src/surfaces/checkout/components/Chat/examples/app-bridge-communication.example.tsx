import {
  reactExtension,
  useShippingAddress,
  Chat,
} from '@shopify/ui-extensions-react/checkout';
import {retain} from '@remote-ui/rpc';
import type {ReadyEvent} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.chat.render', () => (
  <Extension />
));

function Extension() {
  /**
   * Use the `useShippingAddress` hook to access the first name of the buyer.
   */
  const {firstName} = useShippingAddress();

  /**
   * Define a variable to store the `postMessage` function
   * so we can re-use outside of the onReady callback later if needed.
   */
  let postMessage;

  return (
    <Chat
      inlineSize={150}
      blockSize={50}
      onReady={({postMessage: postMessageParam}: ReadyEvent) => {
        /**
         * Save the `postMessage` function to the variable defined earlier.
         */
        postMessage = postMessageParam;
        retain(postMessage);

        /**
         * When the communication channel is ready, send a message to the hosted application
         * using the `postMessage` provided as parameter.
         */
        postMessage({
          action: 'ping',
          buyer: {
            firstName,
          },
        });
      }}
      onMessage={(event: Event) => {
        /**
         * Listen for messages from the hosted application.
         * If the action is `pong`, the communication channel is successful.
         */
        if (event.data.action === 'pong') {
          console.log('Messaging channel successful');
        }
      }}
    />
  );
}
