import {
  reactExtension,
  ConsentCheckbox,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <ConsentCheckbox policy="sms-marketing">
      Text me with news and offers
    </ConsentCheckbox>
  );
}
