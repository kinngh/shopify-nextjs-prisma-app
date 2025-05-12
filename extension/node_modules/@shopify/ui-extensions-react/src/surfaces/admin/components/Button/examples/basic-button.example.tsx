import {render, Button} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <Button
      onPress={() => {
        console.log('onPress event');
      }}
    >
      Click here
    </Button>
  );
}
