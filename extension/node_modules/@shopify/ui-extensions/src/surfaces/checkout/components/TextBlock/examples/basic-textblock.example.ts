import {
  extension,
  TextBlock,
  BlockStack,
} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const textBlock = root.createComponent(BlockStack, undefined, [
    root.createComponent(
      TextBlock,
      undefined,
      'We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.',
    ),
    root.createComponent(
      TextBlock,
      undefined,
      'To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.',
    ),
  ]);

  root.appendChild(textBlock);
});
