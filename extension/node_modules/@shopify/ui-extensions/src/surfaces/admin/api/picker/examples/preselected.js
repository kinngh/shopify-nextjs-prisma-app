const pickerInstance = await picker({
  heading: 'Preselected items',
  items: [
    {
      id: '1',
      heading: 'Item 1',
      selected: true,
    },
    {
      id: '2',
      heading: 'Item 2',
    },
  ],
});

const selected = await pickerInstance.selected;
