import {
  reactExtension,
  BlockSpacer,
  Button,
  Form,
  Grid,
  GridItem,
  TextField,
  View,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Form
      onSubmit={() =>
        console.log('onSubmit event')
      }
    >
      <Grid
        columns={['50%', '50%']}
        spacing="base"
      >
        <View>
          <TextField label="First name" />
        </View>
        <View>
          <TextField label="Last name" />
        </View>
        <GridItem columnSpan={2}>
          <TextField label="Company" />
        </GridItem>
      </Grid>
      <BlockSpacer spacing="base" />
      <Button accessibilityRole="submit">
        Submit
      </Button>
    </Form>
  );
}
