import {
  extension,
  ClipboardItem,
  Button,
} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const button = root.createComponent(
    Button,
    {
      activateTarget: 'discount-code',
    },
    'Copy discount code',
  );
  const clipboardItem = root.createComponent(ClipboardItem, {
    text: 'SAVE 25',
    id: 'discount-code',
  });
  root.appendChild(button);
  root.appendChild(clipboardItem);
});
