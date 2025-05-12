import {extend, Box} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const box = root.createComponent(
    Box,
    {padding: 'base'},
    'Box',
  );

  root.appendChild(box);
});
