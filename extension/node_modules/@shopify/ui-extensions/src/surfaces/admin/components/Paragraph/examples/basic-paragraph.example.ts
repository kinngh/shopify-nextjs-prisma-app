import {extend, Paragraph, BlockStack} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const paragraph = root.createComponent(BlockStack, {inlineAlignment: 'center', gap: true}, [
    root.createComponent(Paragraph, {fontWeight: 'bold'}, 'Name:'),
    root.createComponent(Paragraph, {}, 'Jane Doe'),
  ]);

  root.appendChild(paragraph);
});
