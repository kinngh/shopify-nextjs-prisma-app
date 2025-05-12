import {extend, DatePicker} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const datePicker = root.createComponent(
    DatePicker,
    { selected: ['2023-11-08'] },
    'DatePicker',
  );

  root.appendChild(datePicker);
});
