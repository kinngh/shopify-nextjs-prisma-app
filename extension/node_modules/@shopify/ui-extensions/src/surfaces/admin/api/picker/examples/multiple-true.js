const pickerInstance = await picker({
  heading: 'Select items',
  multiple: true,
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
    {
      id: '3',
      heading: 'Item 3',
    },
  ],
});

const selected = await pickerInstance.selected;
