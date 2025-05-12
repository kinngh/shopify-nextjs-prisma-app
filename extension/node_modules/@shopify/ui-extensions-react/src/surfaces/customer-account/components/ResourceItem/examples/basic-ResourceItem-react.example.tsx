import {
  ResourceItem,
  Button,
  Text,
  View,
  reactExtension,
} from '@shopify/ui-extensions-react/customer-account';
import React from 'react';

export default reactExtension(
  'customer-account.page.render',
  () => <App />,
);

function App() {
  return (
    <View maxInlineSize={300}>
      <ResourceItem
        accessibilityLabel="Resource Item"
        onPress={() => {}}
        actionLabel="Manage"
        action={
          <>
            <Button
              kind="primary"
              onPress={() => {}}
            >
              Pay now
            </Button>
            <Button onPress={() => {}}>
              Second action
            </Button>
            <Button onPress={() => {}}>
              Third action
            </Button>
          </>
        }
      >
        Resource item content
      </ResourceItem>
    </View>
  );
}
