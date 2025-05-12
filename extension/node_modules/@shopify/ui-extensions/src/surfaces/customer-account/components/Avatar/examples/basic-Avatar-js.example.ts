import {
  Avatar,
  InlineStack,
  extension,
} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root, api) => {
  renderApp(root, api);
});

async function renderApp(root, api) {
  const avatar = root.createComponent(Avatar, {
    alt: 'John Doe',
  });

  const avatarWithInitials = root.createComponent(Avatar, {
    initials: 'EW',
    alt: 'Evan Williams',
  });

  const inlineStack = root.createComponent(InlineStack, {spacing: 'large500'});
  inlineStack.append(avatar);
  inlineStack.append(avatarWithInitials);

  root.append(inlineStack);
}
