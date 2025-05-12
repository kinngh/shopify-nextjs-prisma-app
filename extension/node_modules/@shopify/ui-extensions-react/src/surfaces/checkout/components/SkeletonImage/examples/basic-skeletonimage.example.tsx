import {
  reactExtension,
  SkeletonImage,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <SkeletonImage
      inlineSize={300}
      blockSize={300}
    />
  );
}
