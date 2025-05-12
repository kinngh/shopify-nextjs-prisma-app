import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Action Extension API',
  description:
    'This API is available to all action extension types. Refer to the [tutorial](/docs/apps/admin/admin-actions-and-blocks/build-an-admin-action) for more information. Note that the [`AdminAction`](/docs/api/admin-extensions/components/other/adminaction) component is required to build Admin action extensions.',
  isVisualComponent: false,
  type: 'API',
  definitions: [
    {
      title: 'ActionExtensionApi',
      description: '',
      type: 'ActionExtensionApi',
    },
  ],
  category: 'API',
  subCategory: 'Target APIs',
  related: [],
};

export default data;
