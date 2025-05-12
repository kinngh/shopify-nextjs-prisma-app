import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextArea',
  description:
    'This component is perfect when you need to allow users to input larger amounts of text, such as for comments, feedback, or any other multi-line input.',
  requires: '',
  thumbnail: 'textarea-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'TextAreaProps',
      description: '',
      type: 'TextAreaProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'textarea-default.png',
    codeblock: {
      title: 'Simple TextArea example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/TextArea/examples/basic-textarea.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-textarea.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [
    {
      type: 'component',
      name: 'TextField',
      url: '/docs/api/admin-extensions/components/forms/textfield',
    },
  ],
};

export default data;
