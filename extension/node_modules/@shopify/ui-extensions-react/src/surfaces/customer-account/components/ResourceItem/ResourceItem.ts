import {ResourceItem as BaseResourceItem} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ResourceItemProps = ReactPropsFromRemoteComponentType<
  typeof BaseResourceItem
>;

export const ResourceItem = createRemoteReactComponent(BaseResourceItem, {
  fragmentProps: ['action'],
});
