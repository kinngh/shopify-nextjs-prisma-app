import {render, TextArea} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return <TextArea label="Enter a scheduled social media posting" rows={4} />;
}
