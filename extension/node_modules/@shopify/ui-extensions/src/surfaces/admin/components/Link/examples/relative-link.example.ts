import {
  extension,
  Link,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const link = root.createComponent(
      Link,
      {href: '/baz'},
      'Link relative to current path',
    );

    root.appendChild(link);
  },
);
