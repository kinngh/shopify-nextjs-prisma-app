import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeResponsiveConditionalStyle} from '../../style/types';
import type {IdProps, Spacing} from '../shared';

export interface InlineSpacerProps extends IdProps {
  /**
   * Adjust size of the spacer
   *
   * @defaultValue 'base'
   **/
  spacing?: MaybeResponsiveConditionalStyle<Exclude<Spacing, 'none'>>;
}

/**
 * InlineSpacer is used to create empty inline space, typically when variable spacing
 * is needed between multiple elements.
 *
 * Note that you should favor InlineStack when spacing between all elements is the same.
 */
export const InlineSpacer = createRemoteComponent<
  'InlineSpacer',
  InlineSpacerProps
>('InlineSpacer');
