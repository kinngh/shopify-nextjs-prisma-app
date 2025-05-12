import {
  reactExtension,
  ScrollView,
  View,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <ScrollView maxBlockSize={300}>
      <View
        border="base"
        padding="base"
        minBlockSize={50}
      >
        View
      </View>
      <View
        border="base"
        padding="base"
        minBlockSize={50}
      >
        View
      </View>
      <View
        border="base"
        padding="base"
        minBlockSize={50}
      >
        View
      </View>
      <View
        border="base"
        padding="base"
        minBlockSize={50}
      >
        View
      </View>
      <View
        border="base"
        padding="base"
        minBlockSize={50}
      >
        View
      </View>
    </ScrollView>
  );
}
