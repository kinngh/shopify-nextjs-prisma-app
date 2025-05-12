import {Badge as BaseBadge} from '@shopify/ui-extensions/admin';
import type {BadgeProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Badge = createRemoteReactComponent<'Badge', BadgeProps>(BaseBadge);
export type {BadgeProps} from '@shopify/ui-extensions/admin';
