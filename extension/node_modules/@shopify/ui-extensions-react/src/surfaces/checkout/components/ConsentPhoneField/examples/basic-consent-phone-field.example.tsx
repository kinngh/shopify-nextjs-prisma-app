import {
  reactExtension,
  ConsentPhoneField,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <ConsentPhoneField
      label="Phone"
      policy="sms-marketing"
    />
  );
}
