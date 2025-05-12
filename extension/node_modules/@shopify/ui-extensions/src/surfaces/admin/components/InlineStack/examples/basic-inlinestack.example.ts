import {extension, InlineStack} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const inlineStack = root.createComponent(
    InlineStack,
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

  root.appendChild(inlineStack);
});
