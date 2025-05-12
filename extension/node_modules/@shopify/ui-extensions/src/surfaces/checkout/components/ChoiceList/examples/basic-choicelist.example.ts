import {
  extension,
  InlineStack,
  ChoiceList,
  Choice,
  BlockStack,
  Icon,
} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const inlineStack = root.createComponent(InlineStack, undefined, [
    root.createComponent(
      ChoiceList,
      {
        name: 'group-single',
        variant: 'group',
        value: 'ship',
        onChange: (value) => {
          console.log(`onChange event with value: ${value}`);
        },
      },
      [
        root.createComponent(
          Choice,
          {
            secondaryContent: root.createComponent(Icon, {source: 'truck'}),
            id: 'ship',
          },
          'Ship',
        ),
        root.createComponent(
          Choice,
          {
            secondaryContent: root.createComponent(Icon, {source: 'marker'}),
            id: 'ship-to-pickup-point',
          },
          'Ship to pickup point',
        ),
        root.createComponent(
          Choice,
          {
            secondaryContent: root.createComponent(Icon, {source: 'store'}),
            id: 'pick-up',
          },
          'Pick up in store',
        ),
      ],
    ),
    root.createComponent(
      ChoiceList,
      {
        name: 'base-multiple',
        value: ['remember-me'],
        onChange: (value) => {
          console.log(`onChange event with value: ${value}`);
        },
      },
      [
        root.createComponent(BlockStack, undefined, [
          root.createComponent(
            Choice,
            {id: 'remember-me'},
            'Save this information for next time',
          ),
          root.createComponent(
            Choice,
            {id: 'email-me'},
            'Email me with news and offers',
          ),
          root.createComponent(
            Choice,
            {id: 'text-me'},
            'Text me with news and offers',
          ),
        ]),
      ],
    ),
  ]);

  root.appendChild(inlineStack);
});
