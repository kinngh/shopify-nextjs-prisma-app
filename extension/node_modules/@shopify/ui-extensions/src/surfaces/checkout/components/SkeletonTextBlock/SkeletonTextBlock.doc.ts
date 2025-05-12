import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'SkeletonTextBlock',
  description:
    'SkeletonTextBlock is used to provide a low fidelity representation of a block of text before it appears on the page. \n\nOptionally you can use any text content inside `SkeletonTextBlock` to be used as a base for the rendered skeleton',
  requires: '',
  isVisualComponent: true,
  thumbnail: 'skeletontextblock-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'SkeletonTextBlockProps',
      description: '',
      type: 'SkeletonTextBlockProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'skeletontextblock-default.png',
    codeblock: {
      title: 'Basic SkeletonTextBlock',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/SkeletonTextBlock/examples/basic-skeletontextblock.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-skeletontextblock.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [],
};

export default data;
