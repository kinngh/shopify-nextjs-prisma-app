import {
  extension,
  ChoiceList,
  Choice,
  InlineStack,
} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const choiceList = root.createComponent(
    ChoiceList,
    {
      name: 'ship',
      value: 'ship-1',
      onChange: (value) => {
        console.log(`onChange event with value: ${value}`);
      },
    },
    [root.createComponent(Choice, {id: 'ship-1'}, 'Ship')],
  );

  const multipleChoiceList = root.createComponent(
    ChoiceList,
    {
      name: 'gift',
      value: ['gift-1'],
      onChange: (value) => {
        console.log(`onChange event with value: ${value}`);
      },
    },
    [root.createComponent(Choice, {id: 'gift-1'}, 'Gift message')],
  );

  const layout = root.createComponent(InlineStack, undefined, [
    choiceList,
    multipleChoiceList,
  ]);

  root.appendChild(layout);
});
