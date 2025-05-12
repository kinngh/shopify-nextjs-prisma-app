import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps, TextSize} from '../shared';

export interface SkeletonTextBlockProps extends IdProps {
  /**
   * @private
   * Use to emphasize a word or a group of words.
   */
  emphasis?: 'bold';
  /**
   * Number of lines to display when no children are passed.
   *
   * @defaultValue 1
   */
  lines?: number;
  /**
   * Size of the text the skeleton replaces.
   */
  size?: TextSize;
}

/**
 * SkeletonTextBlock is used to provide a low fidelity representation of a block of text before it appears on the page.
 */
export const SkeletonTextBlock = createRemoteComponent<
  'SkeletonTextBlock',
  SkeletonTextBlockProps
>('SkeletonTextBlock');
