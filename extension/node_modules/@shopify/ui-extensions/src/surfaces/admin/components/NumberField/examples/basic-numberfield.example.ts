import {extend, NumberField} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const discountField = root.createComponent(NumberField, {
    label: 'Enter the discount amount',
  });

  root.appendChild(discountField);
});
