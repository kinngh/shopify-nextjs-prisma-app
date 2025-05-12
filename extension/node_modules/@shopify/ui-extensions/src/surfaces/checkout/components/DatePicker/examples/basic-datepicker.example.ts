import {extension, DatePicker} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const datepicker = root.createComponent(DatePicker, {
    selected: '2021-06-01',
  });

  root.appendChild(datepicker);
});
