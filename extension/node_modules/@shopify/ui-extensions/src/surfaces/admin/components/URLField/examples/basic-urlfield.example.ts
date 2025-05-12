import {extend, URLField} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const urlField = root.createComponent(URLField, {
    label: 'Enter store url',
  });

  root.appendChild(urlField);
});
