import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ImageGroup',
  description:
    'Display up to 4 images in a grid or stacked layout. For example, images of products in a wishlist or subscription. When there are more than 4 images, the component indicates how many more images are not displayed.',
  thumbnail: 'imagegroup-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ImageGroupProps',
      description: '',
      type: 'ImageGroupProps',
    },
  ],
  category: 'components',
  defaultExample: {
    image: 'imagegroup-preview.png',
    altText:
      'An example of the ImageGroup component shows 3 circular images of plants displayed in a row, each one slightly overlapping the previous image—in a horizontal stacked pattern. To the right, there is another group of 3 images of plants, arranged in a 2x2 grid. There is one square image in the upper-left quadrant, one square image in the lower-left quadrant, and the entire right half of the grid is occupied by one image.',
    codeblock: {
      title: 'Basic ImageGroup',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/customer-account/components/ImageGroup/examples/basic-ImageGroup-react.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-ImageGroup-js.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
- Use with the [ResourceItem](/docs/api/customer-account-ui-extension/unstable/components/resourceitem) component
- Optimize image file sizes and consider lazy loading for performance.
`,
    },
  ],
  related: [],
};

export default data;
