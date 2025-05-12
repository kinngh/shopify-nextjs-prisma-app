import {
  extension,
  Link,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const link = root.createComponent(
      Link,
      {href: 'https://www.shopify.ca/climate/sustainability-fund'},
      'Sustainability fund',
    );

    root.appendChild(link);
  },
);
