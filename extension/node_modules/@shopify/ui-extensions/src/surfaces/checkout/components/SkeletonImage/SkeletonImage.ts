import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeResponsiveConditionalStyle} from '../../style/types';
import type {IdProps} from '../shared';

export interface SkeletonImageProps extends IdProps {
  /**
   * Adjust the block size of the skeleton.
   */
  blockSize?: MaybeResponsiveConditionalStyle<number | `${number}%` | 'fill'>;
  /**
   * Adjust the inline size of the skeleton.
   */
  inlineSize?: MaybeResponsiveConditionalStyle<number | `${number}%` | 'fill'>;
  /**
   * Displays the skeleton at the specified aspect ratio (fills the width of the
   * parent container and sets the height accordingly).
   */
  aspectRatio?: number;
}
/**
 * SkeletonImage is used to provide a low fidelity representation of an image before it appears on the page.
 */
export const SkeletonImage = createRemoteComponent<
  'SkeletonImage',
  SkeletonImageProps
>('SkeletonImage');
