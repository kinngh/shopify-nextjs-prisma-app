import {
    extend,
    HeadingGroup,
    Heading,
    BlockStack,
  } from '@shopify/ui-extensions/admin';

  extend('Playground', (root) => {
    const headingGroup = root.createComponent(BlockStack, undefined, [
      root.createComponent(Heading, undefined, 'Heading <h1>'),
      root.createComponent(HeadingGroup, undefined, [
        root.createComponent(Heading, undefined, 'Heading <h2>'),
        root.createComponent(HeadingGroup, undefined, [
          root.createComponent(Heading, undefined, 'Heading <h3>'),
        ]),
      ]),
    ]);

    root.appendChild(headingGroup);
  });
