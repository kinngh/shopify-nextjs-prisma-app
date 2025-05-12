import {CustomerAccountAction as BaseCustomerAccountAction} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type CustomerAccountActionProps = ReactPropsFromRemoteComponentType<
  typeof BaseCustomerAccountAction
>;

export const CustomerAccountAction = createRemoteReactComponent(
  BaseCustomerAccountAction,
  {fragmentProps: ['primaryAction', 'secondaryAction']},
);
