import {render, EmailField} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return <EmailField label="Enter your email address" />;
}
