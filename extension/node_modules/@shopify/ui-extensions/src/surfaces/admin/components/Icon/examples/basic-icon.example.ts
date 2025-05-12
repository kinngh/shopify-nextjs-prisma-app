import {extend, Icon} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const icon = root.createComponent(Icon, {name: 'AppsMajor'});

  root.appendChild(icon);
});
