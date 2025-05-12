import {extension, Banner} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const banner = root.createComponent(Banner, {
    status: 'critical',
    title:
      'Your payment details couldn’t be verified. Check your card details and try again.',
  });

  root.appendChild(banner);
});
