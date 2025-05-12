import {
  reactExtension,
  SkeletonTextBlock,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return <SkeletonTextBlock />;
}
