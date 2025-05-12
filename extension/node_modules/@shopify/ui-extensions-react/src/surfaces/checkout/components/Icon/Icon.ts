import {Icon as BaseIcon} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type {IconSource} from '@shopify/ui-extensions/checkout';
export type IconProps = ReactPropsFromRemoteComponentType<typeof BaseIcon>;

export const Icon = createRemoteReactComponent(BaseIcon);
