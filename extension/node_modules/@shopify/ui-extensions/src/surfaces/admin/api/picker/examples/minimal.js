const pickerInstance = await picker({
  heading: 'Select an item',
  headers: [{title: 'Main heading'}],
  items: [
    {
      id: '1',
      heading: 'Item 1',
    },
    {
      id: '2',
      heading: 'Item 2',
    },
  ],
});

const selected = await pickerInstance.selected;
