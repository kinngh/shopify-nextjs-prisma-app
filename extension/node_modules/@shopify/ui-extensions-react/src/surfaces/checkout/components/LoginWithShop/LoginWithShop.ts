import {LoginWithShop as BaseLoginWithShop} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type LoginWithShopProps = ReactPropsFromRemoteComponentType<
  typeof BaseLoginWithShop
>;

export const LoginWithShop = createRemoteReactComponent(BaseLoginWithShop, {});
