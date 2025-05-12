import {createRemoteComponent} from '@remote-ui/core';
import type {
  AccessibilityRoleProps,
  PaddingProps,
  SizingProps,
} from '../shared';
import {DisplayProps} from '../shared/display';

export interface BoxProps
  extends AccessibilityRoleProps,
    SizingProps,
    PaddingProps,
    DisplayProps {}

export const Box = createRemoteComponent<'Box', BoxProps>('Box');
