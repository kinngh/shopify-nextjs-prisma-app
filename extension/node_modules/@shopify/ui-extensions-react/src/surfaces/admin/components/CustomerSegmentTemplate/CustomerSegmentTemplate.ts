import {CustomerSegmentTemplate as BaseCustomerSegmentTemplate} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const CustomerSegmentTemplate = createRemoteReactComponent(
  BaseCustomerSegmentTemplate,
);
export type {CustomerSegmentTemplateProps} from '@shopify/ui-extensions/admin';
