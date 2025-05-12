import {SizeKeyword} from './sizes';

export type SpacingKeyword = SizeKeyword | 'none';

export interface GapProps {
  /**
   * Adjust spacing between elements.
   * @default 'none'
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
}

export type ContentPosition = 'center' | 'start' | 'end';
export type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly';
