import {Menu as BaseMenu} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type MenuProps = ReactPropsFromRemoteComponentType<typeof BaseMenu>;

export const Menu = createRemoteReactComponent(BaseMenu);
