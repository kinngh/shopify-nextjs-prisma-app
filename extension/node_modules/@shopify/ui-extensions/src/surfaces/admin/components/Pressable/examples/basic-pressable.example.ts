import {
  extension,
  Icon,
  InlineStack,
  Pressable,
  Text,
} from '@shopify/ui-extensions/admin';

extension('Playground', (root) => {
  const pressable = root.createComponent(
    Pressable,
    {
      padding: 'base',
      onPress: () => console.log('onPress event'),
    },
    [
      root.createComponent(InlineStack, {}, [
        root.createComponent(Text, {}, 'Go to App Dashboard'),
        root.createComponent(Icon, {name: 'AppsMajor'}),
      ]),
    ],
  );

  root.appendChild(pressable);
});
