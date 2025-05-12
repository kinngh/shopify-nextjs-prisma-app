import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'MapMarker',
  description:
    'MapMarker represents a specific location or point of interest on a map.',
  requires: '',
  thumbnail: 'mapmarker-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'MapMarkerProps',
      description: '',
      type: 'MapMarkerProps',
    },
  ],
  category: 'Components',
  subCategory: 'Interactive',
  defaultExample: {
    image: 'mapmarker-default.png',
    codeblock: {
      title: 'Basic MapMarker',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/MapMarker/examples/basic-mapmarker.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-mapmarker.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `- If your markers are interactive, make sure that the selected marker's icon is different from the rest of the non-selected markers.\n\n- If there are a large number of markers obscuring important features of the map, set the markers to clusterable to help increase the readability of the map.`,
    },
  ],
  related: [
    {
      name: 'Map',
      subtitle: 'Component',
      url: 'map',
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
