import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'PhoneField',
  description:
    'A PhoneField is an input field that merchants can type into optimized for phone numbers with a country code base auto-formatting. The country code is required for the initial render of the field but it can be overriden later by the user either by selecting a country in the country selection dropdown or by manually editing the country phone code directly in the text field.',
  requires: '',
  isVisualComponent: true,
  thumbnail: 'phonefield-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'PhoneFieldProps',
      description: '',
      type: 'PhoneFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'phonefield-default.png',
    codeblock: {
      title: 'Basic PhoneField',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/PhoneField/examples/basic-phonefield.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-phonefield.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [],
};

export default data;
