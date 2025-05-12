import {extend, MoneyFIeld} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const urlField = root.createComponent(MoneyFIeld, {
    label: 'Enter amount',
  });

  root.appendChild(urlField);
});
