import {extension, Divider} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const divider = root.createComponent(Divider);

  root.appendChild(divider);
});
