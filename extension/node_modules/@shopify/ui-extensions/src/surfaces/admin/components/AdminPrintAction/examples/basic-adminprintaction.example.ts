import {extension, AdminPrintAction, Text} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const adminPrintAction = root.createComponent(
    AdminPrintAction,
    {
      src: 'https://example.com',
    },
    root.createComponent(Text, {fontWeight: 'bold'}, 'Modal content'),
  );

  root.append(adminPrintAction);
  root.mount();
});
