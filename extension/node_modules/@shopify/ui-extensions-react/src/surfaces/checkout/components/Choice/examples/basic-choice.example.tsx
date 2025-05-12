import {
  reactExtension,
  Choice,
  ChoiceList,
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
        name="ship"
        value="ship-1"
        onChange={(value) => {
          console.log(
            `onChange event with value: ${value}`,
          );
        }}
      >
        <Choice id="ship-1">Ship</Choice>
      </ChoiceList>

      <ChoiceList
        name="gift"
        value={['gift-1']}
        onChange={(value) => {
          console.log(
            `onChange event with value: ${value}`,
          );
        }}
      >
        <Choice id="multipleFirst">
          Gift message
        </Choice>
      </ChoiceList>
    </InlineStack>
  );
}
