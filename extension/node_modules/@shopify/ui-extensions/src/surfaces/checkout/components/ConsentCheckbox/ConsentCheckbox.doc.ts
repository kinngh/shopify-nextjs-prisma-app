import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ConsentCheckbox',
  description:
    "Use buyer consent checkboxes for collecting the buyer's approval for a given policy.",
  thumbnail: 'consent-checkbox-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ConsentCheckboxProps',
      description: '',
      type: 'ConsentCheckboxProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'consent-checkbox-default.png',
    codeblock: {
      title: 'Basic ConsentCheckbox',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/ConsentCheckbox/examples/basic-consent-checkbox.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-consent-checkbox.example.ts',
          language: 'js',
        },
      ],
    },
  },
  examples: {
    description:
      "Use buyer consent checkboxes in conjunction with buyer consent phone fields for collecting the buyer's approval for a given policy.\n\nThe consent phone field is not required in order to use the consent checkbox component. This example demonstrates how they can be used together.",
    examples: [
      {
        image: 'consent-combo-example.png',
        codeblock: {
          title: 'ConsentCheckbox with ConsentPhoneField',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/ConsentCheckbox/examples/with-consent-phone-field-consent-checkbox.example.tsx',
              language: 'tsx',
            },
            {
              title: 'JS',
              code: './examples/with-consent-phone-field-consent-checkbox.example.ts',
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
