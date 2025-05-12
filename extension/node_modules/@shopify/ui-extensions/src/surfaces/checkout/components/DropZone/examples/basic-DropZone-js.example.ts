import {DropZone, extension} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const dropZone = root.createComponent(DropZone, {
    accept: 'image/*',
  });

  root.appendChild(dropZone);
});
