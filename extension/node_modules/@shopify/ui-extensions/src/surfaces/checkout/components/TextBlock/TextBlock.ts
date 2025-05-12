import {createRemoteComponent} from '@remote-ui/core';

import type {
  Appearance,
  Emphasis,
  IdProps,
  InlineAlignment,
  TextSize,
} from '../shared';

export interface TextBlockProps extends IdProps {
  /**
   * Size of the text
   */
  size?: TextSize;
  /**
   * Use to emphasize a word or a group of words.
   */
  emphasis?: Emphasis;
  /**
   * Changes the visual appearance
   */
  appearance?: Extract<
    Appearance,
    | 'accent'
    | 'subdued'
    | 'info'
    | 'success'
    | 'warning'
    | 'critical'
    | 'decorative'
  >;
  /**
   * Align text along the main axis.
   */
  inlineAlignment?: InlineAlignment;
}

/**
 * Text block is used to render a block of text that occupies the full width available, like a paragraph.
 */
export const TextBlock = createRemoteComponent<'TextBlock', TextBlockProps>(
  'TextBlock',
);
