import {extend, Image} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const image = root.createComponent(Image, {
    alt: 'Pickaxe',
    source: 'https://shopify.dev/assets/icons/64/pickaxe-1.png',
  });

  root.appendChild(image);
});
