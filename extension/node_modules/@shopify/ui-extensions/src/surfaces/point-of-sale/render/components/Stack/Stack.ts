import {createRemoteComponent} from '@remote-ui/core';
import type {PaddingProps, SizingProps} from '../shared/box';
import {
  ContentDistribution,
  ContentPosition,
  SpacingKeyword,
  GapProps,
} from '../shared/inner-layouts';
import {
  HorizontalSpacing,
  Spacing,
  VerticalSpacing,
} from '../shared/deprecated-types';

/**
 *
 * @deprecated Use the `block` or `inline` as a value instead.
 */
type DeprecatedStackDirection = 'vertical' | 'horizontal';

export interface StackProps extends PaddingProps, SizingProps, GapProps {
  /**
   * Sets how the Stack's children are placed within the Stack.
   * 'vertical' and 'horizontal' are deprecated. Using these values will use the Stack implementation from 2024-10.
   *
   * @default 'inline'
   */
  direction?: 'inline' | 'block' | DeprecatedStackDirection;

  /**
   * The alignment of the children along the main axis.
   *
   * @defaultValue 'flex-start'
   * @deprecated Use the `justifyContent` prop instead.
   */
  alignment?: ContentPosition | ContentDistribution;

  /**
   * Aligns the Stack along the main axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   * @default 'start'
   */
  justifyContent?: ContentPosition | ContentDistribution;

  /**
   * Aligns the Stack along the cross axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   * @default 'start'
   */
  alignContent?: 'stretch' | ContentPosition | ContentDistribution;

  /**
   * Aligns the Stack's children along the cross axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   * @default 'stretch'
   */
  alignItems?: 'stretch' | 'baseline' | ContentPosition;

  /**
   * The vertical padding around the stack.
   * @deprecated Use the `paddingBlock` prop instead.
   */
  paddingVertical?: VerticalSpacing;

  /**
   * The horizontal padding around the stack.
   * @deprecated Use the `paddingInline` prop instead.
   */
  paddingHorizontal?: HorizontalSpacing;

  /**
   * The spacing between each child in the stack.
   * @defaultValue 1
   * @deprecated Use the `gap` prop instead.
   */
  spacing?: Spacing;

  /**
   * The size of the gap between each child in the stack.
   * @defaultValue '0'
   */
  gap?: SpacingKeyword;

  /**
   * Adjust spacing between elements in the block axis.
   *
   * This overrides the row value of `gap`.
   *
   * @default '' - meaning no override
   */
  rowGap?: SpacingKeyword | '';

  /**
   * Adjust spacing between elements in the inline axis.
   *
   * This overrides the column value of `gap`.
   *
   * @default '' - meaning no override
   */
  columnGap?: SpacingKeyword | '';

  /**
   * Whether the children should be stretched to fill the cross axis.
   */
  flexChildren?: boolean;

  /**
   * The flex value for the stack. Flex 1 will stretch the stack to fill the parent.
   */
  flex?: number;

  /**
   * Wrap behavior for the children of the stack.
   * @deprecated Has no effect, content will always wrap.
   */
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export const Stack = createRemoteComponent<'Stack', StackProps>('Stack');
