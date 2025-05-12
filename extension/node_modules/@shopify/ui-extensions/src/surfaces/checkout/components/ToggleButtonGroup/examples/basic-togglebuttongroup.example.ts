import {
  extension,
  ToggleButtonGroup,
  ToggleButton,
  InlineLayout,
  View,
  BlockStack,
  Text,
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
    [
      root.createComponent(InlineLayout, {spacing: 'base'}, [
        root.createComponent(
          ToggleButton,
          {id: 'none'},
          root.createComponent(
            View,
            {
              blockAlignment: 'center',
              inlineAlignment: 'center',
              minBlockSize: 'fill',
            },
            'None',
          ),
        ),
        root.createComponent(
          ToggleButton,
          {id: 'points-100'},
          root.createComponent(
            BlockStack,
            {inlineAlignment: 'center', spacing: 'none'},
            [
              root.createComponent(Text, undefined, '100'),
              root.createComponent(Text, {appearance: 'subdued'}, 'points'),
            ],
          ),
        ),
        root.createComponent(
          ToggleButton,
          {id: 'points-200'},
          root.createComponent(
            BlockStack,
            {inlineAlignment: 'center', spacing: 'none'},
            [
              root.createComponent(Text, undefined, '200'),
              root.createComponent(Text, {appearance: 'subdued'}, 'points'),
            ],
          ),
        ),
        root.createComponent(
          ToggleButton,
          {id: 'points-300'},
          root.createComponent(
            BlockStack,
            {inlineAlignment: 'center', spacing: 'none'},
            [
              root.createComponent(Text, undefined, '300'),
              root.createComponent(Text, {appearance: 'subdued'}, 'points'),
            ],
          ),
        ),
      ]),
    ],
  );

  root.appendChild(toggleButtonGroup);
});
