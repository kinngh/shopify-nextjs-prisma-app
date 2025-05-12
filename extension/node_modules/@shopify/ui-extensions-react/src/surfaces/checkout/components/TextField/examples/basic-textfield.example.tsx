import {
  reactExtension,
  TextField,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return <TextField label="Last name" />;
}
