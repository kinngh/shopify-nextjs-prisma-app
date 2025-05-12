const selected = await resourcePicker({
  type: 'product',
  filter: {
    hidden: true,
    variants: false,
    draft: false,
    archived: false,
  },
});
