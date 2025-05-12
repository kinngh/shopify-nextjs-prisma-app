import {extension, PhoneField} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const phoneField = root.createComponent(PhoneField, {
    label: 'Phone',
    value: '1 (555) 555-5555',
  });

  root.appendChild(phoneField);
});
