import {extension, ProductThumbnail} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const paymentIcon = root.createComponent(ProductThumbnail, {
    source:
      'https://shopify.dev/assets/api/checkout-extensions/checkout/components/product-thumbnail-example-code.png',
    badge: 2,
  });

  root.appendChild(paymentIcon);
});
