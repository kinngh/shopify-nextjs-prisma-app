<Pressable
  onPress={() => alert('press')}
  border={Style.default(['base', 'dotted']).when(
    {viewportInlineSize: {min: 'small'}},
    ['base', 'dotted', 'none', 'base'],
  )}
>
  Content
</Pressable>
