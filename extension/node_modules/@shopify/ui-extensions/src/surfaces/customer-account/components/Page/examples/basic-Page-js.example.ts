import {
  Page,
  Button,
  extension
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.page.render',
  (root, api) => {
    renderApp(root, api);
  },
)

async function renderApp(root, api) {
  const primaryAction = root.createFragment();
  await primaryAction.append(root.createComponent(Button, {onPress: () => {console.log("primary action 1")}}, 'Buy again primary 1'));
  await primaryAction.append(root.createComponent(Button, {onPress: () => {console.log("primary action 2")}}, 'Buy again primary 2'));
  await primaryAction.append(root.createComponent(Button, {onPress: () => {console.log("primary action 3")}}, 'Buy again primary 3'));

  const secondaryAction = root.createFragment();
  await secondaryAction.append(root.createComponent(Button, {accessibilityLabel: 'Button', onPress: () => {}}))

  const page = root.createComponent(
    Page,
    {
      title: "Order #1411",
      subtitle: "Confirmed Oct 5",
      primaryAction,
      primaryActionLabel: "Manage",
      secondaryAction,
      },
    root.createComponent('View', {}, "Content")
  )
  root.append(page);
}
