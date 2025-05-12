import {extension, ConsentPhoneField} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const consentPhoneField = root.createComponent(ConsentPhoneField, {
    label: 'Phone',
    policy: 'sms-marketing',
  });

  root.appendChild(consentPhoneField);
});
