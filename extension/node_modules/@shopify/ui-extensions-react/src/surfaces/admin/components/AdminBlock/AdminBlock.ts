import {AdminBlock as BaseAdminBlock} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const AdminBlock = createRemoteReactComponent(BaseAdminBlock);

export type AdminBlockProps = ReactPropsFromRemoteComponentType<
  typeof BaseAdminBlock
>;
