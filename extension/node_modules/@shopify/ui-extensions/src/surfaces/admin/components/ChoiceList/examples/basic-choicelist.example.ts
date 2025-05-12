import {
  extension,
  ChoiceList,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const blockStack = root.createComponent(
      ChoiceList,
      {
        name: 'Company name',
        choices: [
            {label: 'Hidden', id: '1'},
            {label: 'Optional', id: '2'},
            {label: 'Required', id: '3'},
        ]
      },
    );

    root.appendChild(blockStack);
  },
);
