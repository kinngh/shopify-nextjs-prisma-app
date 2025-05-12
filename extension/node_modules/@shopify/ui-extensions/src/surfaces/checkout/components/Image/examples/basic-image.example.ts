import {extension, Image} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const image = root.createComponent(Image, {
    source: 'https://cdn.shopify.com/YOUR_IMAGE_HERE',
  });

  root.appendChild(image);
});
