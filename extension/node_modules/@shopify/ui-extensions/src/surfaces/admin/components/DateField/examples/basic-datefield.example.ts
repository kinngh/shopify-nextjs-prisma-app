import {extend, DateField} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const dateField = root.createComponent(
    DateField,
    {
      label: 'Date',
      value: '2023-11-08',
    },
    'DateField',
  );

  root.appendChild(dateField);
});
