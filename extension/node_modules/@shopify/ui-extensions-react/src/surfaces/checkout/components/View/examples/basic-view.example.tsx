import {
  reactExtension,
  View,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <View padding="base" border="base">
      View
    </View>
  );
}
