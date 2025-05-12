import {BlockStack as BaseBlockStack} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type BlockStackProps = ReactPropsFromRemoteComponentType<
  typeof BaseBlockStack
>;

export const BlockStack = createRemoteReactComponent(BaseBlockStack);
