import {InlineLayout as BaseInlineLayout} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type InlineLayoutProps = ReactPropsFromRemoteComponentType<
  typeof BaseInlineLayout
>;

export const InlineLayout = createRemoteReactComponent(BaseInlineLayout);
