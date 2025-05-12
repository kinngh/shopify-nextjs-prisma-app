import {
  reactExtension,
  Button,
  ClipboardItem,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <>
      <Button
        activateTarget="discount-code"
        activateAction="copy"
      >
        Copy discount code
      </Button>
      <ClipboardItem
        text="SAVE 25"
        id="discount-code"
      />
    </>
  );
}
