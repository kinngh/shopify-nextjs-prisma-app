import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Banner',
  description:
    'Use this component if you need to communicate to merchants in a prominent way.',
  requires: '',
  thumbnail: 'banner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'BannerProps',
      description: '',
      type: 'BannerProps',
    },
  ],
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'banner-default.png',
    codeblock: {
      title: 'Simple Banner example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Banner/examples/basic-banner.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-banner.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
