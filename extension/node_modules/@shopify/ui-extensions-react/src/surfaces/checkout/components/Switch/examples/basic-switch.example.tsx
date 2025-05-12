import {
  reactExtension,
  Switch,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Switch accessibilityLabel="my-switch" />
  );
}
