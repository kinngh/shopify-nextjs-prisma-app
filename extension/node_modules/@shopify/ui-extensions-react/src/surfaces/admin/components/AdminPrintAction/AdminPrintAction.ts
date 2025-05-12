import {AdminPrintAction as BaseAdminPrintAction} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const AdminPrintAction =
  createRemoteReactComponent(BaseAdminPrintAction);

export type AdminPrintActionProps = ReactPropsFromRemoteComponentType<
  typeof BaseAdminPrintAction
>;
