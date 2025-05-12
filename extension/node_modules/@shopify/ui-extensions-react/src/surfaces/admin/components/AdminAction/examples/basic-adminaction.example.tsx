import React from 'react';
import {
  reactExtension,
  AdminAction,
  Button,
  Text,
} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <AdminAction
      title="My App Action"
      primaryAction={
        <Button onPress={() => {}}>Action</Button>
      }
      secondaryAction={
        <Button onPress={() => {}}>
          Secondary
        </Button>
      }
    >
      <Text>Modal content</Text>
    </AdminAction>
  );
}

export default reactExtension(
  'Playground',
  () => <App />,
);
