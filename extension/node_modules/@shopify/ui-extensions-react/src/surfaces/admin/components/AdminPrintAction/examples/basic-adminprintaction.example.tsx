import React from 'react';
import {
  reactExtension,
  AdminPrintAction,
  Text,
} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <AdminPrintAction src="https://example.com">
      <Text>Modal content</Text>
    </AdminPrintAction>
  );
}

export default reactExtension(
  'Playground',
  () => <App />,
);
