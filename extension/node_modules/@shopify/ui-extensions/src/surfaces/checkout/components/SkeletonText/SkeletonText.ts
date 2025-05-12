import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps, TextSize, Size} from '../shared';

export interface SkeletonTextProps extends IdProps {
  /**
   * @private
   * Use to emphasize a word or a group of words.
   */
  emphasis?: 'bold';
  /**
   * Adjust the length of the text when no children are passed.
   */
  inlineSize?: Extract<Size, 'small' | 'base' | 'large'>;
  /**
   * Size of the text the skeleton replaces.
   */
  size?: TextSize;
}

/**
 * SkeletonText is used to provide a low fidelity representation of text content before it appears on the page.
 */
export const SkeletonText = createRemoteComponent<
  'SkeletonText',
  SkeletonTextProps
>('SkeletonText');
