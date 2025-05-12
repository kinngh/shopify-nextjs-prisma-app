import {extend, Banner} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const banner = root.createComponent(Banner, {
    title: 'Shipping rates changed',
    dismissible: true,
    onDismiss: () => console.log('dismissed banner')
  }, 'Your store may be affected');

  root.appendChild(banner);
});
