import {extension, AdminBlock, Button} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const adminBlock = root.createComponent(AdminBlock, {
    title: 'My App Block',
  }, '5 items active');

  root.appendChild(adminBlock);
  root.mount();
});
