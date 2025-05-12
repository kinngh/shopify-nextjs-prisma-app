import {
  extension,
  Select,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    let value = '2';
    const select = root.createComponent(Select, {
      value,
      label: 'Country',
      onChange(nextValue) {
        value = nextValue;
        select.updateProps({value});
      },
      options: [
        {
          value: '1',
          label: 'Australia',
        },
        {
          value: '2',
          label: 'Canada',
        },
        {
          value: '3',
          label: 'France',
        },
        {
          value: '4',
          label: 'Japan',
        },
        {
          value: '5',
          label: 'Nigeria',
        },
        {
          value: '6',
          label: 'United States',
        },
      ],
    });

    root.appendChild(select);
  },
);
