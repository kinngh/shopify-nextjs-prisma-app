import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ProductThumbnail',
  description:
    'Product thumbnail is a representation of a product image. It provides a visual preview of the item, so buyers can quickly identify products.',
  thumbnail: 'productthumbnail-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ProductThumbnailProps',
      description: '',
      type: 'ProductThumbnailProps',
    },
  ],
  category: 'Components',
  subCategory: 'Media',
  defaultExample: {
    image: 'productthumbnail-default.png',
    codeblock: {
      title: 'Basic ProductThumbnail',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/ProductThumbnail/examples/basic-productthumbnail.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-productthumbnail.example.ts',
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
      sectionContent:
        '**High-quality images and consistent aspect ratio**\n\n- Use optimized product images that ensure visual clarity and loading speed. Maintain a consistent aspect ratio for product thumbnails to avoid distortion or stretching of the images.\n\n**Consistent visual style and appropriate sizes**\n\n- Keep a consistent visual style for product thumbnails throughout your store. Use appropriate size for product thumbnails depending on the layout and use case. This consistency helps buyers recognize and associate the thumbnails with your product offerings.\n\n**Accessibility considerations**\n\n- Ensure product thumbnails are accessible with descriptive alternative text (alt text).',
    },
  ],
  related: [],
};

export default data;
