import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Picker',
  overviewPreviewDescription: 'Opens a Picker in your app',
  description: `The Picker API provides a search-based interface to help users find and select one or more resources that you provide, such as product reviews, email templates, or subscription options, and then returns the selected resource ids to your extension.

> Tip:
> If you are picking products, product variants, or collections, you should use the [Resource Picker](resource-picker) API instead.`,
  isVisualComponent: true,
  category: 'API',
  thumbnail: 'picker.png',
  requires:
    'an Admin [block](/docs/api/admin-extensions/unstable/extension-targets#block-locations), [action](/docs/api/admin-extensions/unstable/extension-targets#action-locations), or [print](/docs/api/admin-extensions/unstable/extension-targets#print-locations) extension.',
  defaultExample: {
    image: 'picker.png',
    codeblock: {
      title: 'Picker',
      tabs: [
        {
          code: './examples/template-picker.js',
          language: 'js',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'picker',
      description: `The \`picker\` API is a function that accepts an options argument for configuration and returns a Promise that resolves to the picker instance once the picker modal is opened.`,
      type: 'PickerApi',
    },
  ],
  examples: {
    description: 'Pickers with different options',
    examples: [
      {
        description:
          "Minimal required fields picker configuration.\n\nIf you don't provide the required options (`heading` and `items`), the picker will not open and an error will be logged.",
        codeblock: {
          title: 'Simple picker',
          tabs: [
            {
              code: './examples/minimal.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Setting a specific number of selectable items. In this example, the user can select up to 2 items.',
        codeblock: {
          title: 'Limited selectable items',
          tabs: [
            {
              code: './examples/multiple-limit.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Setting an unlimited number of selectable items.',
        codeblock: {
          title: 'Unlimited selectable items',
          tabs: [
            {
              code: './examples/multiple-true.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Providing preselected items in the picker. These will be selected when the picker opens but can be deselected by the user.',
        codeblock: {
          title: 'Preselected items',
          tabs: [
            {
              code: './examples/preselected.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Providing disabled items in the picker. These will be disabled and cannot be selected by the user.',
        codeblock: {
          title: 'Disabled items',
          tabs: [
            {
              code: './examples/disabled.js',
              language: 'js',
            },
          ],
        },
      },
    ],
  },
  related: [
    {
      name: 'Resource Picker',
      subtitle: 'APIs',
      url: 'resource-picker',
      type: 'pickaxe-3',
    },
  ],
};

export default data;
