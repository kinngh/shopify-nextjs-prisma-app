import {
  extension,
  Link,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const link = root.createComponent(
      Link,
      {href: 'app://baz'},
      'Link to app path',
    );

    root.appendChild(link);
  },
);
