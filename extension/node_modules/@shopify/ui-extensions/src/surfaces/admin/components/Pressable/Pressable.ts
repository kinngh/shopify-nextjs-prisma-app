import {createRemoteComponent} from '@remote-ui/core';
import type {LinkProps} from '../Link/Link';
import type {BoxProps} from '../Box/Box';

export interface PressableProps extends BoxProps, LinkProps {}

export const Pressable = createRemoteComponent<'Pressable', PressableProps>(
  'Pressable',
);
