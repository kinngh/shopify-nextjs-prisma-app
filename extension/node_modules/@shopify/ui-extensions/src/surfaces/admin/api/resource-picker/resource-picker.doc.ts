import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Resource Picker',
  overviewPreviewDescription: 'Opens a Resource Picker in your app',
  description: `The Resource Picker API provides a search-based interface to help users find and select one or more products, collections, or product variants, and then returns the selected resources to your app. Both the app and the user must have the necessary permissions to access the resources selected.

> Tip:
> If you are picking app resources such as product reviews, email templates, or subscription options, you should use the [Picker](picker) API instead.
`,
  isVisualComponent: true,
  category: 'API',
  thumbnail: 'resource-picker.png',
  requires:
    'an Admin [block](/docs/api/admin-extensions/unstable/extension-targets#block-locations), [action](/docs/api/admin-extensions/unstable/extension-targets#action-locations), or [print](/docs/api/admin-extensions/unstable/extension-targets#print-locations) extension.',
  defaultExample: {
    image: 'resource-picker.png',
    codeblock: {
      title: 'Product picker',
      tabs: [
        {
          code: './examples/product-picker.js',
          language: 'js',
        },
      ],
    },
  },
  examples: {
    description: 'Resource Pickers with different options',
    examples: [
      {
        description: 'Alternate resources',
        codeblock: {
          title: 'Alternate resources',
          tabs: [
            {
              title: 'Collection picker',
              code: './examples/collection-picker.js',
              language: 'js',
            },
            {
              title: 'Product variant picker',
              code: './examples/product-variant-picker.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Preselected resources',
        codeblock: {
          title: 'Product picker with preselected resources',
          tabs: [
            {
              code: './examples/selection-ids.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Action verb',
        codeblock: {
          title: 'Product picker with action verb',
          tabs: [
            {
              code: './examples/action.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Multiple selection',
        codeblock: {
          title: 'Product picker with multiple selection',
          tabs: [
            {
              title: 'Unlimited selectable items',
              code: './examples/multiple-unlimited.js',
              language: 'js',
            },
            {
              title: 'Maximum selectable items',
              code: './examples/multiple-limited.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Filters',
        codeblock: {
          title: 'Product picker with filters',
          tabs: [
            {
              code: './examples/filters.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Filter query',
        codeblock: {
          title: 'Product picker with a custom filter query',
          tabs: [
            {
              code: './examples/filter-query.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Selection',
        codeblock: {
          title: 'Product picker using returned selection payload',
          tabs: [
            {
              code: './examples/selection.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Initial query',
        codeblock: {
          title: 'Product picker with initial query provided',
          tabs: [
            {
              code: './examples/query.js',
              language: 'js',
            },
          ],
        },
      },
    ],
  },
  definitions: [
    {
      title: 'Resource Picker Options',
      description: `The \`Resource Picker\` accepts a variety of options to customize the picker's behavior.`,
      type: 'ResourcePickerOptions',
    },
    {
      title: 'Resource Picker Return Payload',
      description: `The \`Resource Picker\` returns a Promise with an array of the selected resources. The object type in the array varies based on the provided \`type\` option.\n\nIf the picker is cancelled, the Promise resolves to \`undefined\``,
      type: 'SelectPayload',
    },
  ],
  related: [
    {
      name: 'Picker',
      subtitle: 'APIs',
      url: 'picker',
      type: 'pickaxe-3',
    },
  ],
};

export default data;
