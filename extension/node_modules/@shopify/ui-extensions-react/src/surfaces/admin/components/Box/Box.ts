import {Box as BaseBox} from '@shopify/ui-extensions/admin';
import type {BoxProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Box = createRemoteReactComponent<'Box', BoxProps>(BaseBox);
export type {BoxProps} from '@shopify/ui-extensions/admin';
