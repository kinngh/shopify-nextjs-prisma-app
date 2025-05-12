import {extend, DatePicker} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const datePicker = root.createComponent(
    DatePicker,
    {},
    'DatePicker',
  );

  root.appendChild(datePicker);
});
