import {render, MoneyField} from '@shopify/ui-extensions-react/admin';
import {useState} from 'react';

render('Playground', () => <App />);

function App() {
  const [value, setValue] = useState({ amount: 100, currencyCode: 'USD' });

  return <MoneyField label="Enter an amount" value={value} onChange={setValue} />;
}
