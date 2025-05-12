import {
  extension,
  BlockSpacer,
  Button,
  Form,
  Grid,
  GridItem,
  TextField,
  View,
} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const fields = root.createComponent(
    Grid,
    {columns: ['50%', '50%'], spacing: 'base'},
    [
      root.createComponent(
        View,
        undefined,
        root.createComponent(TextField, {label: 'First name'}),
      ),
      root.createComponent(
        View,
        undefined,
        root.createComponent(TextField, {label: 'Last name'}),
      ),
      root.createComponent(
        GridItem,
        {columnSpan: 2},
        root.createComponent(TextField, {label: 'Company'}),
      ),
    ],
  );
  const spacer = root.createComponent(BlockSpacer, {spacing: 'base'});
  const button = root.createComponent(
    Button,
    {accessibilityRole: 'submit'},
    'Submit',
  );

  const form = root.createComponent(
    Form,
    {onSubmit: () => console.log('onSubmit event')},
    [fields, spacer, button],
  );

  root.appendChild(form);
});
