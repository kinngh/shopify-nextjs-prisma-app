import {extend, TextArea} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const textArea = root.createComponent(TextArea, {
    label: 'Enter a scheduled social media posting',
    rows: 5,
  });

  root.appendChild(textArea);
});
