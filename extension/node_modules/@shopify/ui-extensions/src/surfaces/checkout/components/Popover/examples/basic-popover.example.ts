import {
  extension,
  Pressable,
  Popover,
  View,
  TextBlock,
} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const popoverFragment = root.createFragment();
  const popover = root.createComponent(Popover, {}, [
    root.createComponent(View, {maxInlineSize: 200, padding: 'base'}, [
      root.createComponent(TextBlock, {}, 'A thoughtful way to pay'),
      root.createComponent(TextBlock, {}, 'Tap don’t type'),
      root.createComponent(
        TextBlock,
        {},
        'Shop Pay remembers your important details, so you can fill carts, not forms. And everything is encrypted so you can speed safely through checkout.',
      ),
    ]),
  ]);
  popoverFragment.appendChild(popover);
  const pressable = root.createComponent(
    Pressable,
    {overlay: popoverFragment},
    'More info',
  );

  root.appendChild(pressable);
});
