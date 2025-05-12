import {
  reactExtension,
  ToggleButton,
  ToggleButtonGroup,
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
      <ToggleButton id="none">None</ToggleButton>
    </ToggleButtonGroup>
  );
}
