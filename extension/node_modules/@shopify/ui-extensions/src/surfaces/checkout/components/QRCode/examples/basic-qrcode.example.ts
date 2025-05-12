import {
  extension,
  Link,
  QRCode,
  TextBlock,
} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const qrCode = root.createComponent(QRCode, {
    content: 'https://shopify.com',
  });

  const textBlock = root.createComponent(TextBlock, null, [
    'Scan to visit ',
    root.createComponent(Link, {to: 'https://shopify.com'}, 'Shopify.com'),
  ]);

  root.appendChild(qrCode);
  root.appendChild(textBlock);
});
