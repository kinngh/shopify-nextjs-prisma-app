import {
  reactExtension,
  Badge,
  BlockStack,
  Text,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <BlockStack
      border="base"
      padding="large200"
      spacing="base"
      borderRadius="large"
    >
      <BlockStack spacing="none">
        <Text size="large" emphasis="bold">
          Subscription
        </Text>
        <Text>Mini garden seeds</Text>
      </BlockStack>
      <BlockStack
        spacing="none"
        inlineAlignment="start"
      >
        <Text emphasis="bold">
          $35.00 monthly
        </Text>
        <Badge tone="subdued">Paused</Badge>
      </BlockStack>
    </BlockStack>
  );
}
