import {
  extension,
  Link,
  Sheet,
  TextBlock,
} from '@shopify/ui-extensions/checkout';

// This component requires access to Customer Privacy API to be rendered.

export default extension('purchase.checkout.block.render', (root) => {
  const sheetFragment = root.createFragment();
  const sheet = root.createComponent(
    Sheet,
    {
      id: 'basic-sheet',
      heading: 'Basic Sheet',
      accessibilityLabel: 'A sheet with text content',
    },
    [root.createComponent(TextBlock, undefined, 'Basic Sheet Content')],
  );
  sheetFragment.appendChild(sheet);
  const link = root.createComponent(
    Link,
    {overlay: sheetFragment},
    'Open sheet',
  );

  root.appendChild(link);
});
