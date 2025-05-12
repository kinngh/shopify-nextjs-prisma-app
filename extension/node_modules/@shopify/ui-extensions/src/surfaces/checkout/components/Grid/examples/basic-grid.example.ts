import {extension, Grid, View} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const grid = root.createComponent(
    Grid,
    {
      columns: ['20%', 'fill', 'auto'],
      rows: [300, 'auto'],
    },
    [
      root.createComponent(
        View,
        {border: 'base', padding: 'base'},
        '20% / 300',
      ),
      root.createComponent(
        View,
        {border: 'base', padding: 'base'},
        'fill / 300',
      ),
      root.createComponent(
        View,
        {border: 'base', padding: 'base'},
        'auto / 300',
      ),
      root.createComponent(
        View,
        {border: 'base', padding: 'base'},
        '20% / auto',
      ),
      root.createComponent(
        View,
        {border: 'base', padding: 'base'},
        'fill / auto',
      ),
      root.createComponent(
        View,
        {border: 'base', padding: 'base'},
        'auto / auto',
      ),
    ],
  );

  root.appendChild(grid);
});
