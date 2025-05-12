import {extend, TextField} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const textfield = root.createComponent(TextField, {
    label: 'Enter some text',
  });

  root.appendChild(textfield);
});
