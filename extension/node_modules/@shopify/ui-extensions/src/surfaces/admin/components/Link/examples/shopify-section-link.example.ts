import {
  extension,
  Link,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const link = root.createComponent(
      Link,
      {href: 'shopify://admin/orders'},
      "Shop's orders",
    );

    root.appendChild(link);
  },
);
