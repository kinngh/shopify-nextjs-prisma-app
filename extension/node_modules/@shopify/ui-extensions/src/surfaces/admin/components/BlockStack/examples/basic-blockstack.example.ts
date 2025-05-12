import {
  extension,
  BlockStack,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const blockStack = root.createComponent(
      BlockStack,
      {
        gap: true,
      },
      [
        root.createText('Child 1'),
        root.createText('Child 2'),
        root.createText('Child 3'),
        root.createText('Child 4'),
      ],
    );

    root.appendChild(blockStack);
  },
);
