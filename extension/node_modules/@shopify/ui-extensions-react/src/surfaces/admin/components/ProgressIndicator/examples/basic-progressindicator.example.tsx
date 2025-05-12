import {
  reactExtension,
  ProgressIndicator,
} from '@shopify/ui-extensions-react/admin';

reactExtension('Playground', () => <App />);

function App() {
  return (
    <ProgressIndicator size="small-200" />
  );
}
