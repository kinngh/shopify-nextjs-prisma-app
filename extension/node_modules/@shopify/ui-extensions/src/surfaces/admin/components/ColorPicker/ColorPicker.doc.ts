import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ColorPicker',
  description: 'Use this component if you need to select a color.',
  requires: '',
  thumbnail: 'colorpicker-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ColorPickerProps',
      description: '',
      type: 'ColorPickerProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'colorpicker-default.png',
    codeblock: {
      title: 'Simple ColorPicker example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ColorPicker/examples/basic-colorpicker.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-colorpicker.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [
    {
      type: 'component',
      name: 'Select',
      url: '/docs/api/admin-extensions/components/forms/select',
    },
  ],
};

export default data;
