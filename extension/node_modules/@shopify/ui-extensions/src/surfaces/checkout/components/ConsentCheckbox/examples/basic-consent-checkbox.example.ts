import {extension, ConsentCheckbox} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const consentCheckbox = root.createComponent(
    ConsentCheckbox,
    {policy: 'sms-marketing'},
    'Text me with news and promotions',
  );

  root.appendChild(consentCheckbox);
});
