import {
  Button,
  CustomerAccountAction,
  TextBlock,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/customer-account';
import React from 'react';

export default reactExtension('customer-account.order.action.render', () => (
  <App />
));

function App() {
  const api = useApi<'customer-account.order.action.render'>();

  return (
    <CustomerAccountAction
      title="Extension title"
      primaryAction={
        <Button
          onPress={() => {
            api.close();
          }}
        >
          Click to close
        </Button>
      }
    >
      <TextBlock>Extension content</TextBlock>
    </CustomerAccountAction>
  );
}
