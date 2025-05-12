import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image',
  description: 'Image is used for large format, responsive images.',
  thumbnail: 'image-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ImageProps',
      description: '',
      type: 'ImageProps',
    },
  ],
  category: 'Components',
  subCategory: 'Media',
  defaultExample: {
    image: 'image-default.png',
    codeblock: {
      title: 'Basic Image',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Image/examples/basic-image.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-image.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'loading',
      title: 'Loading',
      sectionContent:
        '| Value | Description |\n| --- | --- |\n| <code>"eager"</code> | Image is loaded immediately, regardless of whether or not the image is currently within the visible viewport. |\n| <code>"lazy"</code> | Image is loaded when it’s within the visible viewport. |',
    },
  ],
  related: [],
};

export default data;
