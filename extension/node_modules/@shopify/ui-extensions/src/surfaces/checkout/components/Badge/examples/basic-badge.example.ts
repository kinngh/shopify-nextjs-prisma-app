import {extension, Badge} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const badge = root.createComponent(Badge, undefined, 'Available');

  root.appendChild(badge);
});
