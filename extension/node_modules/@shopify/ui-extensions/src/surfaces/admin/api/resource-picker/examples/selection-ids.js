const selected = await resourcePicker({
  type: 'product',
  selectionIds: [
    {
      id: 'gid://shopify/Product/12345',
      variants: [
        {
          id: 'gid://shopify/ProductVariant/1',
        },
      ],
    },
    {
      id: 'gid://shopify/Product/67890',
    },
  ],
});
