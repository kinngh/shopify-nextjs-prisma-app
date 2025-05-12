import {extend, TextField, PasswordField, BlockStack} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const blockStack = root.createComponent(BlockStack, {}, [
    root.createComponent(TextField, {
      label: 'Username',
    }),
    root.createComponent(PasswordField, {
      label: 'Password',
    }),
  ]);

  root.appendChild(blockStack);
});
