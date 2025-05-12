import React from 'react';
import {reactExtension, AdminBlock} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <AdminBlock title="My App Block">
      Block content
    </AdminBlock>
  );
}

export default reactExtension('Playground', () => <App />);
