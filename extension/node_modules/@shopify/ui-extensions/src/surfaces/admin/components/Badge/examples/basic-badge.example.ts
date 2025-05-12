import {extend, Badge} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const badge = root.createComponent(
    Badge,
    {tone: 'info'},
    'Fulfilled',
  );

  root.appendChild(badge);
});