import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Pressable',
  description:
    'Use this component when you need to capture click or press events on its child elements without adding any additional visual styling. It subtly enhances user interaction by changing the cursor when hovering over the child elements, providing a clear indication of interactivity.',
  requires: '',
  thumbnail: 'pressable-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'PressableProps',
      description: '',
      type: 'PressableProps',
    },
  ],
  category: 'Components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'pressable-default.png',
    codeblock: {
      title: 'Simple pressable example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Pressable/examples/basic-pressable.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-pressable.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [
    {
      type: 'component',
      name: 'Button',
      url: '/docs/api/admin-extensions/components/actions/button',
    },
  ],
};

export default data;
