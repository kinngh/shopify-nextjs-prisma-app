import {
  reactExtension,
  BlockStack,
  Choice,
  ChoiceList,
  Icon,
  InlineStack,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <InlineStack>
      <ChoiceList
        name="group-single"
        variant="group"
        value="ship"
        onChange={(value) => {
          console.log(
            `onChange event with value: ${value}`,
          );
        }}
      >
        <Choice
          secondaryContent={
            <Icon source="truck" />
          }
          id="ship"
        >
          Ship
        </Choice>
        <Choice
          secondaryContent={
            <Icon source="marker" />
          }
          id="ship-to-pickup-point"
        >
          Ship to pickup point
        </Choice>
        <Choice
          secondaryContent={
            <Icon source="store" />
          }
          id="pick-up"
        >
          Pick up in store
        </Choice>
      </ChoiceList>
      <ChoiceList
        name="base-multiple"
        value={['remember-me']}
        onChange={(value) => {
          console.log(
            `onChange event with value: ${value}`,
          );
        }}
      >
        <BlockStack>
          <Choice id="remember-me">
            Save this information for next time
          </Choice>
          <Choice id="email-me">
            Email me with news and offers
          </Choice>
          <Choice id="text-me">
            Text me with news and offers
          </Choice>
        </BlockStack>
      </ChoiceList>
    </InlineStack>
  );
}
