import {
  reactExtension,
  Disclosure,
  Button,
  View,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Disclosure>
      <Button toggles="one">Toggle</Button>
      <View id="one">Content</View>
    </Disclosure>
  );
}
