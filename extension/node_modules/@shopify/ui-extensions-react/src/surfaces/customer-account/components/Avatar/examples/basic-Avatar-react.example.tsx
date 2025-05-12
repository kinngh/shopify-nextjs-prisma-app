import {
  Avatar,
  InlineStack,
  reactExtension,
} from '@shopify/ui-extensions-react/customer-account';
import React from 'react';

export default reactExtension(
  'customer-account.page.render',
  () => <App />,
);

function App() {
  return (
    <InlineStack spacing="large500">
      <Avatar alt="John Doe" />
      <Avatar initials="EW" alt="Evan Williams" />
    </InlineStack>
  );
}
