import {
  reactExtension,
  DropZone,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return <DropZone accept="image/*" />;
}
