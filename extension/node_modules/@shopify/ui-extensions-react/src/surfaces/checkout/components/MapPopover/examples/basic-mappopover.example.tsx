import {
  reactExtension,
  Map,
  MapMarker,
  MapPopover,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Map
      apiKey="YOUR_GOOGLE_MAPS_API_KEY"
      latitude={-28.024}
      longitude={140.887}
      zoom={4}
      accessibilityLabel="Map"
    >
      <MapMarker
        latitude={-28.024}
        longitude={140.887}
        accessibilityLabel="Map marker for Innamincka, Australia"
        overlay={
          <MapPopover>
            Blue Mountains National Park store
          </MapPopover>
        }
      />
    </Map>
  );
}
