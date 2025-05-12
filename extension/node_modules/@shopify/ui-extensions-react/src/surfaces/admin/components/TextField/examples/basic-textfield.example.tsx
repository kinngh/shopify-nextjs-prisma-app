import {render, TextField} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return <TextField label="Enter some text" />;
}
