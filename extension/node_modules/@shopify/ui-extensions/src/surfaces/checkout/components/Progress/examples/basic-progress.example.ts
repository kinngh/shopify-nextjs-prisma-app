import {extension, Progress} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const baseProgress = root.createComponent(Progress, {
    accessibilityLabel: 'Loading',
  });

  root.appendChild(baseProgress);
});
