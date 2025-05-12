import {reactExtension, Chat} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.chat.render', () => (
  <Extension />
));

function Extension() {
  return <Chat inlineSize={150} blockSize={50} />;
}
