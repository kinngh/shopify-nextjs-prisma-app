import {extension, Tag} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const tag = root.createComponent(Tag, {icon: 'discount'}, 'SPRING');

  root.appendChild(tag);
});
