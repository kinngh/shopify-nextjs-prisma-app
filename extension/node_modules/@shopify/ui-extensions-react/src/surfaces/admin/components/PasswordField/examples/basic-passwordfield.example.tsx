import {
  render,
  BlockStack,
  TextField,
  PasswordField
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <BlockStack>
      <TextField label="Enter some text" />
      <PasswordField label="Enter some text" />
    </BlockStack>
  )
}
