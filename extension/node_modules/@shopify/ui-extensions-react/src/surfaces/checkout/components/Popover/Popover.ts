import {Popover as BasePopover} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type PopoverProps = ReactPropsFromRemoteComponentType<
  typeof BasePopover
>;

export const Popover = createRemoteReactComponent(BasePopover);
