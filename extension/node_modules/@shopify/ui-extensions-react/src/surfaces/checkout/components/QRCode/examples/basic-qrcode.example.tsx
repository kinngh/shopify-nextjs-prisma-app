import {
  reactExtension,
  Link,
  QRCode,
  TextBlock,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <>
      <QRCode content="https://shopify.com" />

      <TextBlock>
        Scan to visit{' '}
        <Link to="https://shopify.com">
          Shopify.com
        </Link>
      </TextBlock>
    </>
  );
}
