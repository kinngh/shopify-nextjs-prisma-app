import {InlineStack as BaseInlineStack} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type InlineStackProps = ReactPropsFromRemoteComponentType<
  typeof BaseInlineStack
>;

export const InlineStack = createRemoteReactComponent(BaseInlineStack);
