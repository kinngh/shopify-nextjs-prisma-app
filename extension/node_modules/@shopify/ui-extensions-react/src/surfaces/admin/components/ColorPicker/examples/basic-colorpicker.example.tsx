import {
  render,
  ColorPicker,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <ColorPicker
      value="rgba(255 0 0 / 0.5)"
      onChange={(value) => {
        console.log({value});
      }}
    />
  );
}
