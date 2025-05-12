import {
  reactExtension,
  Pressable,
  Popover,
  View,
  TextBlock,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Pressable
      overlay={
        <Popover>
          <View
            maxInlineSize={200}
            padding="base"
          >
            <TextBlock>
              A thoughtful way to pay
            </TextBlock>
            <TextBlock>Tap don’t type</TextBlock>
            <TextBlock>
              Shop Pay remembers your important
              details, so you can fill carts, not
              forms. And everything is encrypted
              so you can speed safely through
              checkout.
            </TextBlock>
          </View>
        </Popover>
      }
    >
      More info
    </Pressable>
  );
}
