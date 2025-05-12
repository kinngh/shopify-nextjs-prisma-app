import {
  reactExtension,
  Chat,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.chat.render',
  () => <Extension />,
);

// This component requires the configuration of the `extensions.targeting.preloads.chat` in the extensions configuration file.
// Its value will be used as the `src` attribute of the Chat component.

function Extension() {
  return <Chat inlineSize={100} blockSize={50} />;
}
