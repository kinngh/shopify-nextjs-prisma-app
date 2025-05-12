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

export interface BlockStackProps
  extends AccessibilityRoleProps,
    AccessibilityLabelProps,
    Pick<GapProps, 'gap' | 'blockGap' | 'rowGap'>,
    GlobalProps,
    SizingProps,
    PaddingProps {
  /**

  /**
   * Position children along the main axis
   *
   * @defaultValue 'start'
   */
  inlineAlignment?: CrossAxisAlignment;

  /**
   * Position children along the cross axis
   *
   * @defaultValue 'start'
   */
  blockAlignment?: MainAxisAlignment;
}

export const BlockStack = createRemoteComponent<'BlockStack', BlockStackProps>(
  'BlockStack',
);
