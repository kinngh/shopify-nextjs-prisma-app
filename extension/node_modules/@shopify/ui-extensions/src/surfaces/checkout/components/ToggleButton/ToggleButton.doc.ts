import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ToggleButton',
  description:
    'Options inside a [ToggleButtonGroup](/docs/api/checkout-ui-extensions/components/forms/togglebuttongroup).',
  thumbnail: 'togglebutton-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ToggleButtonProps',
      description: '',
      type: 'ToggleButtonProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'togglebutton-default.png',
    codeblock: {
      title: 'Basic ToggleButton',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/ToggleButton/examples/basic-togglebutton.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-togglebutton.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      name: 'ToggleButtonGroup',
      subtitle: 'Component',
      url: 'togglebuttongroup',
      type: 'Component',
    },
  ],
};

export default data;
