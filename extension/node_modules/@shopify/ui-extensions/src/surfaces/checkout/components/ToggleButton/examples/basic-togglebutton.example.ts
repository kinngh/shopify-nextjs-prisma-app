import {
  extension,
  ToggleButtonGroup,
  ToggleButton,
} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const toggleButtonGroup = root.createComponent(
    ToggleButtonGroup,
    {
      value: 'none',
      onChange: (value) => {
        console.log(`onChange event with value: ${value}`);
      },
    },
    [root.createComponent(ToggleButton, {id: 'none'}, 'None')],
  );

  root.appendChild(toggleButtonGroup);
});
