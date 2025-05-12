import {Tooltip as BaseTooltip} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type TooltipProps = ReactPropsFromRemoteComponentType<
  typeof BaseTooltip
>;

export const Tooltip = createRemoteReactComponent(BaseTooltip);
