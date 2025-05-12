import {Menu, Button, extension} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root, api) => {
  renderApp(root, api);
});

async function renderApp(root, api) {
  const menuFragment = root.createFragment();
  const menu = root.createComponent(Menu, {}, [
    root.createComponent(
      Button,
      {onPress: () => console.log('Submit problem')},
      'Submit problem',
    ),
    root.createComponent(Button, {to: 'https://shopify.com'}, 'Request return'),
    root.createComponent(Button, {appearance: 'critical'}, 'Cancel order'),
  ]);
  menuFragment.appendChild(menu);
  const button = root.createComponent(
    Button,
    {overlay: menuFragment},
    'Manage',
  );

  root.appendChild(button);
}
