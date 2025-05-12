import {
  reactExtension,
  DateField,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return <DateField label="Select a date" />;
}
