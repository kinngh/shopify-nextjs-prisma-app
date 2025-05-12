import {
  reactExtension,
  Stepper,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return <Stepper label="Quantity" value={1} />;
}
