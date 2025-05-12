import React from 'react';
import {
  render,
  DatePicker,
  type Selected
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  const [selected, setSelected] = React.useState<Selected>({start: '2023-11-08', end: '2023-11-10' });

  return (
    <DatePicker selected={selected} onChange={setSelected} />
  );
}
