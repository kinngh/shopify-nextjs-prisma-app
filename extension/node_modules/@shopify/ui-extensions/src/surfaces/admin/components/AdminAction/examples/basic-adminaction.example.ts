import {extension, AdminAction, Button} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const primaryAction = root.createFragment();
  const secondaryAction = root.createFragment();

  primaryAction.appendChild(
    root.createComponent(Button, {onPress: () => {}}, 'Action')
  );
  secondaryAction.appendChild(
    root.createComponent(Button, {onPress: () => {}}, 'Secondary')
  );

  const adminAction = root.createComponent(AdminAction, {
    title: 'My App Action',
    primaryAction,
    secondaryAction,
  }, 'Modal content');

  root.appendChild(adminAction);
  root.mount();
});
