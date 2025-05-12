import {
  reactExtension,
  Checkbox,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Checkbox id="checkbox" name="checkbox">
      Save this information for next time
    </Checkbox>
  );
}
