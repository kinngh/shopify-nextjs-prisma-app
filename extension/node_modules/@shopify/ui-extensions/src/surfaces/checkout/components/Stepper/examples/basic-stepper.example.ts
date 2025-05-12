import {extension, Stepper} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const stepper = root.createComponent(Stepper, {
    label: 'Quantity',
    value: 1,
  });

  root.appendChild(stepper);
});
