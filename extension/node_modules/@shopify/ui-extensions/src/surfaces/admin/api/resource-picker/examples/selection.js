const selected = await resourcePicker({type: 'product'});

if (selected) {
  console.log(selected);
} else {
  console.log('Picker was cancelled by the user');
}
