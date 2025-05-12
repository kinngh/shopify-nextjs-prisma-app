import {createRemoteComponent} from '@remote-ui/core';

import {
  AccessibilityRoleProps,
  GlobalProps,
  SizingProps,
  PaddingProps,
  GapProps,
  CrossAxisAlignment,
  MainAxisAlignment,
  AccessibilityLabelProps,
} from '../shared';

export interface InlineStackProps
  extends AccessibilityRoleProps,
    AccessibilityLabelProps,
    GapProps,
    GlobalProps,
    SizingProps,
    PaddingProps {
  /**
   * Position children along the main axis
   *
   * @defaultValue 'start'
   */
  inlineAlignment?: MainAxisAlignment;

  /**
   * Position children along the cross axis
   *
   * @defaultValue 'start'
   */
  blockAlignment?: CrossAxisAlignment;
}

export const InlineStack = createRemoteComponent<
  'InlineStack',
  InlineStackProps
>('InlineStack');
