import {extension, Switch} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const baseSwitch = root.createComponent(Switch, {
    accessibilityLabel: 'my-switch',
  });

  root.appendChild(baseSwitch);
});
