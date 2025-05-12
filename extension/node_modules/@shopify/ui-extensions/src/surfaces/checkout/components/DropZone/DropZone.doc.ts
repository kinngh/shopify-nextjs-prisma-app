import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DropZone',
  description: `DropZone allows file uploads through drag-and-drop functionality into a designated area on a page, or by activating a button. At present, DropZone does not offer image upload preview capabilities. The use of object URLs directly in an image component is not possible due to the extension and host operating on separate domains.
    \n Any element focused within the Dropzone component, including child elements such as the 'Add file' button, will initiate the file selector when the Enter or Spacebar key is pressed.
    `,
  thumbnail: 'dropzone-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'DropZoneProps',
      description: '',
      type: 'DropZoneProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'dropzone-preview.png',
    altText:
      'An image showcasing the DropZone component with a button to add files with error and dragged over states.',
    codeblock: {
      title: 'DropZone',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/DropZone/examples/basic-DropZone-react.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-DropZone-js.example.ts',
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
### File storage

File storage for uploads must be implemented separately. Metafields and the corresponding [Checkout API](https://shopify.dev/docs/api/checkout-ui-extensions/latest/apis/metafields) or [Customer Accounts API](https://shopify.dev/docs/api/customer/latest/mutations/metafieldsSet) can be utilized to store references to files alongside the relevant objects.

### Mobile

Remember that the drag and drop feature won’t be effective on mobile devices. Adding a button can offer additional context and guide users through the next steps.

<img src='/assets/templated-apis-screenshots/checkout-ui-extensions/unstable/dropzone-mobile-example.png' alt="An example showing DropZone with custom content optimized for mobile devices" />

### Minimum size

To prevent cut-off text and spacing issues, the minimum size of a Dropzone should be 100px by 100px.

<img src='/assets/templated-apis-screenshots/checkout-ui-extensions/unstable/dropzone-minimum-size.png' alt="An example showing DropZone with correct minimum size" />
      `,
    },
  ],
  related: [],
};

export default data;
