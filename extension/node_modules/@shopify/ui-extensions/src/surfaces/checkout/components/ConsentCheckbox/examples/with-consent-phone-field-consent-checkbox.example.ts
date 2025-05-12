import {
  extension,
  BlockStack,
  ConsentCheckbox,
  ConsentPhoneField,
  InlineStack,
  InlineSpacer,
} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const consentCheckbox = root.createComponent(
    ConsentCheckbox,
    {
      policy: 'sms-marketing',
    },
    'Text me with news and offers',
  );

  const inlineSpacer = root.createComponent(InlineSpacer, {
    spacing: 'extraTight',
  });

  const consentPhoneField = root.createComponent(ConsentPhoneField, {
    label: 'Phone',
    policy: 'sms-marketing',
  });

  const inlineStack = root.createComponent(
    InlineStack,
    {
      inlineAlignment: 'start',
      padding: ['none', 'none', 'none', 'tight'],
    },
    [inlineSpacer, consentPhoneField],
  );

  const layout = root.createComponent(BlockStack, undefined, [
    consentCheckbox,
    inlineStack,
  ]);

  root.appendChild(layout);
});
