const pickerInstance = await picker({
  heading: 'Disabled items',
  items: [
    {
      id: '1',
      heading: 'Item 1',
      disabled: true,
    },
    {
      id: '2',
      heading: 'Item 2',
    },
  ],
});

const selected = await pickerInstance.selected;
