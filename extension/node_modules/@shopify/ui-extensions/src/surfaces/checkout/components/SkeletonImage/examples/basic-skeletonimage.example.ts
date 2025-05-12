import {extension, SkeletonImage} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const skeletonImage = root.createComponent(SkeletonImage, {
    inlineSize: 300,
    blockSize: 300,
  });

  root.appendChild(skeletonImage);
});
