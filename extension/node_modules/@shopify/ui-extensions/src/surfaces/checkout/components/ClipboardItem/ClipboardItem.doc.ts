import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ClipboardItem',
  description:
    'Enables clipboard functionality when its `id` is referenced by the `activateTarget` property of a `Button`, `Pressable`, or `Link` component. When activated, it copies the text to the clipboard and displays a `Tooltip` confirmation. \n\n `ClipboardItem` is a non-rendering component.',
  requires: '',
  isVisualComponent: false,
  type: '',
  definitions: [
    {
      title: 'ClipboardItemProps',
      description: '',
      type: 'ClipboardItemProps',
    },
  ],
  category: 'Components',
  subCategory: 'utilities',
  defaultExample: {
    image: 'clipboard-basic.png',
    codeblock: {
      title: 'Basic Copy to Clipboard',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/ClipboardItem/examples/basic-clipboarditem.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-clipboarditem.example.ts',
          language: 'js',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      getExample('ui-components/clipboarditem-qrcode', ['jsx', 'js']),
      getExample('ui-components/clipboarditem-oncopy', ['jsx', 'js']),
    ],
  },
  related: [
    {
      name: 'Button',
      subtitle: 'Component',
      url: 'button',
      type: 'Component',
    },
    {
      name: 'Pressable',
      subtitle: 'Component',
      url: 'pressable',
      type: 'Component',
    },
    {
      name: 'Link',
      subtitle: 'Component',
      url: 'link',
      type: 'Component',
    },
    {
      name: 'QR Code',
      subtitle: 'Component',
      url: 'qrcode',
      type: 'Component',
    },
  ],
};

export default data;
