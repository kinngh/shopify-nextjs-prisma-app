import {
  Button,
  CustomerAccountAction,
  extension
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order.action.render',
  (root, api) => {
    renderApp(root, api);
  },
)

async function renderApp(root, api) {
  const primaryAction = root.createFragment();
  await primaryAction.append(root.createComponent(Button, {onPress: () => {api.close()}}, 'Click to close'));

  const customerAccountAction = root.createComponent(
    CustomerAccountAction,
    {
      title: 'Extension title',
      primaryAction,
    },
    root.createComponent('TextBlock', {}, 'Extension content')
  );
  root.append(customerAccountAction);
}
