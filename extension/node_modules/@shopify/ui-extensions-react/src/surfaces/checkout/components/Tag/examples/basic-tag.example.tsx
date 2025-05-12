import {
  reactExtension,
  Tag,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return <Tag icon="discount">SPRING</Tag>;
}
