import {extension, Heading} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const heading = root.createComponent(Heading, undefined, 'Store name');

  root.appendChild(heading);
});
