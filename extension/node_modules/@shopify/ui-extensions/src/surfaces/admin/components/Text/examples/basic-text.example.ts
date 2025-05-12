import {extend, Text, BlockStack} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const text = root.createComponent(BlockStack, {inlineAlignment: 'center', gap: true}, [
    root.createComponent(Text, {fontWeight: 'bold'}, 'Name:'),
    root.createComponent(Text, {}, 'Jane Doe'),
  ]);

  root.appendChild(text);
});
