import {extension, DateField} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const datefield = root.createComponent(DateField, {
    label: 'Select a date',
  });

  root.appendChild(datefield);
});
