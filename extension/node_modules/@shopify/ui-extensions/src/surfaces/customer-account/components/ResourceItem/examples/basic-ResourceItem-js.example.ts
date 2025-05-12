import {
  ResourceItem,
  Button,
  View,
  extension,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.page.render',
  (root, api) => {
    renderApp(root, api);
  },
)

function renderApp(root, api) {

  const actionFragment = root.createFragment();

  const primaryButton = root.createComponent(Button, {
    kind: 'primary',
    onPress: () => {},
  });

  primaryButton.append(root.createText('Pay now'))

  const secondButton = root.createComponent(Button, {
    kind: 'secondary',
    onPress: () => {},
  });

  secondButton.append(root.createText('Second button'))

  const thirdButton = root.createComponent(Button, {
    kind: 'secondary',
    onPress: () => {},
  });

  thirdButton.append(root.createText('Third button'))

  actionFragment.append(primaryButton);
  actionFragment.append(secondButton);
  actionFragment.append(thirdButton);

  const resourceItem = root.createComponent(
    ResourceItem,
    {
      accessibilityLabel: 'Resource Item',
      onPress: () => {},
      actionLabel: 'Manage',
      action: actionFragment,
    },
    'Content',
  );

  const view = root.createComponent(View, {maxInlineSize: 300});
  view.append(resourceItem);

  root.append(view);
}
