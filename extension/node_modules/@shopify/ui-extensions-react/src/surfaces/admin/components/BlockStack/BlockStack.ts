import {BlockStack as BaseBlockStack} from '@shopify/ui-extensions/admin';
import type {BlockStackProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const BlockStack = createRemoteReactComponent<
  'BlockStack',
  BlockStackProps
>(BaseBlockStack);
export type {BlockStackProps} from '@shopify/ui-extensions/admin';
