import {
  Page,
  Button,
  reactExtension,
} from '@shopify/ui-extensions-react/customer-account';
import React from 'react';

export default reactExtension('customer-account.page.render', () => <App />);

function App() {
  return (
    <Page
      title="Order #1411"
      subtitle="Confirmed Oct 5"
      secondaryAction={<Button accessibilityLabel="Button" onPress={() => {}}/>}
      primaryActionLabel="Manage"
      primaryAction={
        <>
          <Button onPress={() => {}}>Buy again</Button>
          <Button onPress={() => {}}>Second action</Button>
          <Button onPress={() => {}}>Third action</Button>
        </>
      }
    >
      Content
    </Page>
  );
}
