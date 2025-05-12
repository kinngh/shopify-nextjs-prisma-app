import {
  reactExtension,
  Button,
  Menu,
} from '@shopify/ui-extensions-react/customer-account';
import React from 'react';

export default reactExtension(
  'customer-account.page.render',
  () => <App />,
);

function App() {
  return (
    <Button
      overlay={
        <Menu>
          <Button
            onPress={() =>
              console.log('Submit problem')
            }
          >
            Submit problem
          </Button>
          <Button to="https://shopify.com">
            Request return
          </Button>
          <Button appearance="critical">
            Cancel order
          </Button>
        </Menu>
      }
    >
      Manage
    </Button>
  );
}
