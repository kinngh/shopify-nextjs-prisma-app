import {render, URLField} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return <URLField label="Enter store url" />;
}
