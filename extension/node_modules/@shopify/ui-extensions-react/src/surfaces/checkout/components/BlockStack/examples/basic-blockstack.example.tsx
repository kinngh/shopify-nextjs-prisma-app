import {
  reactExtension,
  BlockStack,
  View,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <BlockStack>
      <View border="base" padding="base">
        View
      </View>
      <View border="base" padding="base">
        View
      </View>
      <View border="base" padding="base">
        View
      </View>
    </BlockStack>
  );
}
