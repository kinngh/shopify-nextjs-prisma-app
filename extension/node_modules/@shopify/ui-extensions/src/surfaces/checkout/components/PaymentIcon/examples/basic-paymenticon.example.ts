import {extension, PaymentIcon} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const paymentIcon = root.createComponent(PaymentIcon, {name: 'shop-pay'});

  root.appendChild(paymentIcon);
});
