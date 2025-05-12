import {render, ChoiceList} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <ChoiceList
      name="Company name"
      choices={[
        {label: 'Hidden', id: '1'},
        {label: 'Optional', id: '2'},
        {label: 'Required', id: '3'},
      ]}
    />
  );
}