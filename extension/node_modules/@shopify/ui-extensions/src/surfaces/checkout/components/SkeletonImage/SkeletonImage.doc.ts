import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample} from '../../helper.docs';

const loadingSkeletons = getExample('ui-components/loading-skeletons', [
  'jsx',
  'js',
]);

const data: ReferenceEntityTemplateSchema = {
  name: 'SkeletonImage',
  description:
    'SkeletonImage is used to provide a low fidelity representation of an image before it appears on the page.',
  requires: '',
  thumbnail: 'skeletonimage-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'SkeletonImageProps',
      description: '',
      type: 'SkeletonImageProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'skeletonimage-default.png',
    codeblock: {
      title: 'Basic SkeletonImage',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/SkeletonImage/examples/basic-skeletonimage.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-skeletonimage.example.ts',
          language: 'js',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [loadingSkeletons],
  },
  related: [],
};

export default data;
