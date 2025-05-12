import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeResponsiveConditionalStyle} from '../../style/types';
import type {IdProps, Spacing} from '../shared';

export interface BlockSpacerProps extends IdProps {
  /**
   * Adjust size of the spacer
   *
   * @defaultValue 'base'
   **/
  spacing?: MaybeResponsiveConditionalStyle<Spacing>;
}

/**
 * BlockSpacer is used to create empty block space, typically when variable spacing
 * is needed between multiple elements.
 *
 * Note that you should favor BlockStack when spacing between all elements is the same.
 */
export const BlockSpacer = createRemoteComponent<
  'BlockSpacer',
  BlockSpacerProps,
  false
>('BlockSpacer');
