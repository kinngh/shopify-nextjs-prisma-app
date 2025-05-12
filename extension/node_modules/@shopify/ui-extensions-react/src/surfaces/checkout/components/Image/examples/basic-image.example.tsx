import {
  reactExtension,
  Image,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Image source="https://cdn.shopify.com/YOUR_IMAGE_HERE" />
  );
}
