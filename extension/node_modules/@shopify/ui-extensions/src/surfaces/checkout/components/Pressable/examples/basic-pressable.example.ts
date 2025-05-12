import {
  extension,
  Icon,
  InlineLayout,
  Pressable,
  Text,
} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const pressable = root.createComponent(
    Pressable,
    {
      border: 'base',
      cornerRadius: 'base',
      padding: 'base',
      onPress: () => console.log('onPress event'),
    },
    [
      root.createComponent(InlineLayout, {columns: ['fill', 'auto']}, [
        root.createComponent(Text, {}, 'Details'),
        root.createComponent(Icon, {source: 'chevronDown', size: 'small'}),
      ]),
    ],
  );

  root.appendChild(pressable);
});
