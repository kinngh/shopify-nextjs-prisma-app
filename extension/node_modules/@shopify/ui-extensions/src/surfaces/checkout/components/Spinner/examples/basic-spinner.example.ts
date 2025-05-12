import {extension, Spinner} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const spinner = root.createComponent(Spinner);

  root.appendChild(spinner);
});
