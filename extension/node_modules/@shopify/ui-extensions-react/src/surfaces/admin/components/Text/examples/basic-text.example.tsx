import {render, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <BlockStack inlineAlignment="center" gap>
      <Text fontWeight="bold">Name:</Text>
      <Text>Jane Doe</Text>
    </BlockStack>
  );
}
