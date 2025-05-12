import {extend, Checkbox} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const checkbox = root.createComponent(
    Checkbox,
    {id: 'checkbox', name: 'checkbox'},
    'Save this information for next time',
  );

  root.appendChild(checkbox);
});
