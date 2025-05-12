import {extend, Button} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const button = root.createComponent(
    Button,
    {onPress: () => console.log('onPress event')},
    'Click here',
  );

  root.appendChild(button);
});
