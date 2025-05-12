import {
  reactExtension,
  Select,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Select
      label="Pickup time"
      value="1"
      options={[
        {
          value: '1',
          label: '9:00 AM',
        },
        {
          value: '2',
          label: '9:30 AM',
        },
        {
          value: '3',
          label: '10:00 AM',
        },
        {
          value: '4',
          label: '10:30 AM',
        },
        {
          value: '5',
          label: '11:00 AM',
        },
        {
          value: '6',
          label: '11:30 AM',
        },
      ]}
    />
  );
}
