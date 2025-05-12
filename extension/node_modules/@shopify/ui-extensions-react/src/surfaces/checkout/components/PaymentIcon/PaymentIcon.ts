import {PaymentIcon as BasePaymentIcon} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type {PaymentMethod} from '@shopify/ui-extensions/checkout';
export type PaymentIconProps = ReactPropsFromRemoteComponentType<
  typeof BasePaymentIcon
>;

export const PaymentIcon = createRemoteReactComponent(BasePaymentIcon);
