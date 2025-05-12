import {MapMarker as BaseMapMarker} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type MapMarkerProps = ReactPropsFromRemoteComponentType<
  typeof BaseMapMarker
>;

export const MapMarker = createRemoteReactComponent(BaseMapMarker, {
  fragmentProps: ['overlay'],
});
