import {render, Badge} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <Badge
      tone="info"
    >
      Fulfilled
    </Badge>
  );
}
