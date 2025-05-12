import {extend, EmailField} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const emailField = root.createComponent(EmailField, {
    label: 'Enter your email address',
  });

  root.appendChild(emailField);
});
