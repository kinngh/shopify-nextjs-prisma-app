import {Pressable as BasePressable} from '@shopify/ui-extensions/admin';
import type {PressableProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Pressable = createRemoteReactComponent<
  'Pressable',
  PressableProps
>(BasePressable);
export type {PressableProps} from '@shopify/ui-extensions/admin';
