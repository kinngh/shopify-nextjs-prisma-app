import {
  reactExtension,
  DatePicker,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return <DatePicker selected="2021-06-01" />;
}
