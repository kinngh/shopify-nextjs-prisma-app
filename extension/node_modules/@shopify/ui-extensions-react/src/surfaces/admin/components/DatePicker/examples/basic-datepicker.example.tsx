import React, { useState } from 'react';
import {
  render,
  DatePicker,
  type Selected
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  const [selected, setSelected] = useState<Selected>('2023-11-08')
  return (
    <DatePicker selected={selected} onChange={setSelected} />
  );
}
