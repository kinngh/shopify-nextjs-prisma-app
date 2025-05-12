import {
  reactExtension,
  BlockStack,
  InlineLayout,
  Text,
  ToggleButton,
  ToggleButtonGroup,
  View,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <ToggleButtonGroup
      value="none"
      onChange={(value) => {
        console.log(
          `onChange event with value: ${value}`,
        );
      }}
    >
      <InlineLayout spacing="base">
        <ToggleButton id="none">
          <View
            blockAlignment="center"
            inlineAlignment="center"
            minBlockSize="fill"
          >
            None
          </View>
        </ToggleButton>
        <ToggleButton id="points-100">
          <BlockStack
            inlineAlignment="center"
            spacing="none"
          >
            <Text>100</Text>
            <Text appearance="subdued">
              points
            </Text>
          </BlockStack>
        </ToggleButton>
        <ToggleButton id="points-200">
          <BlockStack
            inlineAlignment="center"
            spacing="none"
          >
            <Text>200</Text>
            <Text appearance="subdued">
              points
            </Text>
          </BlockStack>
        </ToggleButton>
        <ToggleButton id="points-300">
          <BlockStack
            inlineAlignment="center"
            spacing="none"
          >
            <Text>300</Text>
            <Text appearance="subdued">
              points
            </Text>
          </BlockStack>
        </ToggleButton>
      </InlineLayout>
    </ToggleButtonGroup>
  );
}
