import {AdminAction as BaseAdminAction} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const AdminAction = createRemoteReactComponent(BaseAdminAction, {
  fragmentProps: ['primaryAction', 'secondaryAction'],
});

export type AdminActionProps = ReactPropsFromRemoteComponentType<
  typeof BaseAdminAction
>;
