import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'QRCode',
  description: 'Used to quickly access scannable data.',
  requires: '',
  isVisualComponent: true,
  thumbnail: 'qrcode-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'QRCodeProps',
      description: '',
      type: 'QRCodeProps',
    },
  ],
  category: 'Components',
  subCategory: 'Other',
  defaultExample: {
    image: 'qrcode-default.png',
    codeblock: {
      title: 'Basic QR Code',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/QRCode/examples/basic-qrcode.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-qrcode.example.ts',
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
- Always test that the QR code is scannable from a smartphone.
- Include a square logo if that’s what your customers are familiar with.
- Increase usability by adding a text description of what the QR code does.
- Always provide an alternate method for customers to access the content of the QR code.
  - If the content is a URL, provide a [\`Link\`](/docs/api/checkout-ui-extensions/components/link) nearby.
  - If the content is data, provide a [\`Button\`](/docs/api/checkout-ui-extensions/components/button) to copy the data to the clipboard, or show the data in a readonly [\`TextField\`](/docs/api/checkout-ui-extensions/components/textfield).`,
    },
  ],
  examples: {
    description: '',
    examples: [
      getExample('ui-components/qrcode-image', ['jsx', 'js']),
      getExample('ui-components/qrcode-fill-size', ['jsx', 'js']),
      getExample('ui-components/clipboarditem-qrcode', ['jsx', 'js']),
    ],
  },
  related: [
    {
      name: 'ClipboardItem',
      subtitle: 'Component',
      url: 'clipboarditem',
      type: 'Component',
    },
  ],
};

export default data;
