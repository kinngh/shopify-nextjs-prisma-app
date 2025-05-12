import {Grid as BaseGrid} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type GridProps = ReactPropsFromRemoteComponentType<typeof BaseGrid>;

export const Grid = createRemoteReactComponent(BaseGrid);
