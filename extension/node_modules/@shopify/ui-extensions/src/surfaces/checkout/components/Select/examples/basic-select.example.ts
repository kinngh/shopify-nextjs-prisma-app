import {extension, Select} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const select = root.createComponent(Select, {
    label: 'Country',
    value: '2',
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
});
