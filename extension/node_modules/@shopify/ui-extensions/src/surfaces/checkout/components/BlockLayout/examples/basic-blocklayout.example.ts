import {extension, BlockLayout, View} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const blockLayout = root.createComponent(
    BlockLayout,
    {
      rows: [60, 'fill'],
    },
    [
      root.createComponent(View, {border: 'base', padding: 'base'}, '60'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'fill'),
    ],
  );

  root.appendChild(blockLayout);
});
