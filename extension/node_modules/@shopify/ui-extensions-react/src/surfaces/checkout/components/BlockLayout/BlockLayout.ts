import {BlockLayout as BaseBlockLayout} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type BlockLayoutProps = ReactPropsFromRemoteComponentType<
  typeof BaseBlockLayout
>;

export const BlockLayout = createRemoteReactComponent(BaseBlockLayout);
