import {
  extension,
  Badge,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const container = root.createComponent(
    BlockStack,
    {
      border: 'base',
      padding: 'large200',
      spacing: 'base',
      borderRadius: 'large',
    },
    [
      root.createComponent(BlockStack, {spacing: 'none'}, [
        root.createComponent(
          Text,
          {size: 'large', emphasis: 'bold'},
          'Subscription',
        ),
        root.createComponent(Text, undefined, 'Mini garden seeds'),
      ]),

      root.createComponent(
        BlockStack,
        {spacing: 'none', inlineAlignment: 'start'},
        [
          root.createComponent(Text, {emphasis: 'bold'}, '$35.00 monthly'),
          root.createComponent(Badge, {tone: 'subdued'}, 'Paused'),
        ],
      ),
    ],
  );

  root.appendChild(container);
});
