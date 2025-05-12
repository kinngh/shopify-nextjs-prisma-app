import {extend, DatePicker} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const datePicker = root.createComponent(
    DatePicker,
    { selected: {start: '2023-11-08', end: '2023-11-10' } },
    'DatePicker',
  );

  root.appendChild(datePicker);
});
