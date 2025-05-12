import {Badge as BaseBadge} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type BadgeProps = ReactPropsFromRemoteComponentType<typeof BaseBadge>;

export const Badge = createRemoteReactComponent(BaseBadge);
