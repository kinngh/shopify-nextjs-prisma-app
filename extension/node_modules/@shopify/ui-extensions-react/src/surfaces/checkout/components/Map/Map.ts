import {Map as BaseMap} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type MapProps = ReactPropsFromRemoteComponentType<typeof BaseMap>;

export const Map = createRemoteReactComponent(BaseMap);
