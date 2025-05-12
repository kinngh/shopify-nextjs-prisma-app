import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ConsentPhoneField',
  description:
    'Display a phone field for customers to sign up for text message marketing, noting that the phone field value will be automatically saved during checkout.',
  thumbnail: 'consent-phonefield-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ConsentPhoneFieldProps',
      description: '',
      type: 'ConsentPhoneFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'consent-phonefield-default.png',
    codeblock: {
      title: 'Basic ConsentPhoneField',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/ConsentPhoneField/examples/basic-consent-phone-field.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-consent-phone-field.example.ts',
          language: 'js',
        },
      ],
    },
  },
  examples: {
    description:
      "Use buyer consent phone fields in conjunction with buyer consent checkboxes for collecting the buyer's approval for a given policy.\n\nThe consent phone field component is not required in order to use the consent checkbox component. This example demonstrates how they can be used together.",
    examples: [
      {
        image: 'consent-combo-example.png',
        codeblock: {
          title: 'ConsentCheckbox with ConsentPhoneField',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/ConsentPhoneField/examples/with-consent-checkbox-consent-phone-field.example.tsx',
              language: 'tsx',
            },
            {
              title: 'JS',
              code: './examples/with-consent-checkbox-consent-phone-field.example.ts',
              language: 'js',
            },
          ],
        },
      },
    ],
  },
  related: [
    {
      name: 'ConsentCheckbox',
      subtitle: 'Component',
      url: 'consent-checkbox',
      type: 'Component',
    },
  ],
};

export default data;
