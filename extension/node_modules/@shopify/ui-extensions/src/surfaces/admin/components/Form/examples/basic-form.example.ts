import {
  extend,
  Form,
  TextField,
} from '@shopify/ui-extensions/admin';

extend('admin.product-details.block.render', (root) => {
  let name = '';

  const textField = root.createComponent(
    TextField,
    {
      label: 'name',
      value: name,
      onChange: (value) => {
        textField.updateProps({value});
        name = value;
      },
    }
  );

  const onSubmit = async () => {
    // API call to save the values
    const res = await fetch('/save', {method:'POST', body: JSON.stringify({name})});
    if (!res.ok) {
      const json = await res.json();
      // The Host can catch these errors and do something with them.
      throw Error(`There were errors: ${json.errors.join(',')}`);
    }
  };

  const onReset = async () => {
    name = '';
  };

  const form = root.createComponent(
    Form,
    {onSubmit, onReset}
  );

  form.appendChild(textField);
  root.appendChild(form);
});
