import {InlineStack as BaseInlineStack} from '@shopify/ui-extensions/admin';
import type {InlineStackProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const InlineStack = createRemoteReactComponent<
  'InlineStack',
  InlineStackProps
>(BaseInlineStack);
export type {InlineStackProps} from '@shopify/ui-extensions/admin';
