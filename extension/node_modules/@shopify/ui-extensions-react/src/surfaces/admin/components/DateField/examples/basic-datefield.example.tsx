import React, {useState} from 'react';
import {
  render,
  DateField,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  const [value, setValue] =
    useState('2023-11-08');
  return (
    <DateField
      label="DateField"
      value={value}
      onChange={setValue}
    />
  );
}
