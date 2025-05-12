import {createRemoteComponent} from '@remote-ui/core';

import type {IconSource} from '../Icon/Icon';
import type {IdProps} from '../shared';

export interface TagProps extends IdProps {
  children?: string;
  /**
   * Icon source
   */
  icon?: IconSource;
  /**
   * A label used for buyers using assistive technologies. When set, any
   * `children` supplied to this component will not be announced to screen reader users.
   */
  accessibilityLabel?: string;
  /**
   * Callback when tag is removed
   */
  onRemove?(): void;
}

/**
 * A Tag is used to help label, organize or categorize objects. It is commonly used in Checkout to display the discounts applied to a cart.
 */
export const Tag = createRemoteComponent<'Tag', TagProps>('Tag');
