import {
  reactExtension,
  Link,
  Sheet,
  TextBlock,
} from '@shopify/ui-extensions-react/checkout';

// This component requires access to Customer Privacy API to be rendered.

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Link
      overlay={
        <Sheet
          id="basic-sheet"
          heading="Basic Sheet"
          accessibilityLabel="A sheet with text content"
        >
          <TextBlock>
            Basic Sheet Content
          </TextBlock>
        </Sheet>
      }
    >
      Open sheet
    </Link>
  );
}
