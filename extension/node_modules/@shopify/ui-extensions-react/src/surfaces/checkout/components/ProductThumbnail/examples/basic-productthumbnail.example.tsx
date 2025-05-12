import {
  reactExtension,
  ProductThumbnail,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <ProductThumbnail
      source="https://shopify.dev/assets/api/checkout-extensions/checkout/components/product-thumbnail-example-code.png"
      badge={2}
    />
  );
}
