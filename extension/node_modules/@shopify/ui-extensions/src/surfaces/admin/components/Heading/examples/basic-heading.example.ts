import {extend, Heading} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const heading = root.createComponent(Heading, undefined, 'Headings are cool');

  root.appendChild(heading);
});
