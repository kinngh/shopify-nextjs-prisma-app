import {ScrollView as BaseScrollView} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ScrollViewProps = ReactPropsFromRemoteComponentType<
  typeof BaseScrollView
>;

export const ScrollView = createRemoteReactComponent(BaseScrollView);
