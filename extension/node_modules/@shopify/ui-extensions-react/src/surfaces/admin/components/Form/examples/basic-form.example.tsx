import React, { useCallback, useState } from 'react';
import {
  reactExtension,
  Form,
  TextField,
} from '@shopify/ui-extensions-react/admin';

export default reactExtension("admin.product-details.block.render", () => <App />);

function App() {
  const [value, setValue] = useState("");
  const [error, setError] = useState('');

  const onSubmit = useCallback(
    async () => {
      // API call to save the values
      const res = await fetch('/save', {method:'POST', body: JSON.stringify({name: value})});
      if (!res.ok) {
        const json = await res.json();
        const errors = json.errors.join(',');
        setError(errors);
      }
    },
    [value]
  );

  const onReset = useCallback(async () => {
     // Reset to initial value
     setValue('')
     // Clear errors
     setError('')
  }, []);

  const onInput = useCallback((nameValue) => {
    if (!nameValue) {
      setError("Please enter a name.");
    }
  }, [])

  // Field values can only be updated on change when using Remote UI.
  const onChange = useCallback((nameValue) => {
    setValue(nameValue);
  }, [])


  return (
    <Form id="form" onSubmit={onSubmit} onReset={onReset}>
      <TextField label="name" value={value} onInput={onInput} onChange={onChange} error={error} />
    </Form>
  );
}
