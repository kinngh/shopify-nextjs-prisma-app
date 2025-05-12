import {
  reactExtension,
  useApi,
  Button,
  Link,
  Modal,
  TextBlock,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {ui} = useApi();

  return (
    <Link
      overlay={
        <Modal
          id="my-modal"
          padding
          title="Return policy"
        >
          <TextBlock>
            We have a 30-day return policy, which
            means you have 30 days after receiving
            your item to request a return.
          </TextBlock>
          <TextBlock>
            To be eligible for a return, your item
            must be in the same condition that you
            received it, unworn or unused, with
            tags, and in its original packaging.
            You’ll also need the receipt or proof
            of purchase.
          </TextBlock>
          <Button
            onPress={() =>
              ui.overlay.close('my-modal')
            }
          >
            Close
          </Button>
        </Modal>
      }
    >
      Return policy
    </Link>
  );
}
