import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Map',
  description:
    'Use the Map component to provide visual representation of geographic data such as verifying address, package or pickup locations.\n\nPlease note that the merchant or partner has to provide an API key and a set of allowed domains where the map would render.\n\nThe 3 necessary domains needed are:\n\n- `https://*.[MERCHANT-DOMAIN].com`\n\n- `https://shop.app`\n\n- `https://shopify.com` \n\n Where `*` is a wildcard. Learn more about [match patterns](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).\n\n Please refer to the [Google Maps Platform documentation](https://developers.google.com/maps/documentation/javascript/get-api-key) for more details on how to get an API key.',
  requires: '',
  thumbnail: 'map-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'MapProps',
      description: '',
      type: 'MapProps',
    },
  ],
  category: 'Components',
  subCategory: 'Interactive',
  defaultExample: {
    image: 'map-default.png',
    codeblock: {
      title: 'Basic Map',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Map/examples/basic-map.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-map.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      name: 'MapMarker',
      subtitle: 'Component',
      url: 'mapmarker',
      type: 'Component',
    },
    {
      name: 'MapPopover',
      subtitle: 'Component',
      url: 'mappopover',
      type: 'Component',
    },
  ],
};

export default data;
