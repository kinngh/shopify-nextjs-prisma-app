<Grid
  columns={Style.default('fill').when({viewportInlineSize: {min: 'small'}}, [
    '30%',
    '70%',
  ])}
>
  <View>Content</View>
  <View>Content</View>
</Grid>
