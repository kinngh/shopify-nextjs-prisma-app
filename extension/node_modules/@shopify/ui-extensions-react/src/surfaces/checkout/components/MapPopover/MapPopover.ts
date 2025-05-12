import {MapPopover as BaseMapPopover} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type MapPopoverProps = ReactPropsFromRemoteComponentType<
  typeof BaseMapPopover
>;

export const MapPopover = createRemoteReactComponent(BaseMapPopover);
