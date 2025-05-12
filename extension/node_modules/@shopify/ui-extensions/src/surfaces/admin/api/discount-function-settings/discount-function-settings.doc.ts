import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Discount Function Settings API',
  description:
    'This API is available to Discount Function Settings extensions. Refer to the [tutorial](/docs/apps/build/discounts/build-ui-extension) for more information. Note that the [`FunctionSettings`](/docs/api/admin-extensions/components/forms/functionsettings) component is required to build Discount Function Settings extensions.',
  isVisualComponent: false,
  type: 'API',
  definitions: [
    {
      title: 'applyMetafieldChange',
      description: 'Applies a change to the discount function settings.',
      type: 'ApplyMetafieldChange',
    },
    {
      title: 'data',
      description:
        'The object exposed to the extension that contains the discount function settings.',
      type: 'DiscountFunctionSettingsData',
    },
  ],
  category: 'API',
  subCategory: 'Target APIs',
  related: [],
};

export default data;
