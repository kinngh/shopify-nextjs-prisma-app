import {SizeKeyword} from './sizes';

export type PaddingKeys = SizeKeyword | 'none';

export interface PaddingProps {
  /**
   * Adjust the padding of all edges in pixels.
   *
   * @default '0'
   */
  padding?: PaddingKeys;

  /**
   * Adjust the block-padding.
   *
   * This overrides the block value of `padding`.
   *
   * @default '0'
   */
  paddingBlock?: PaddingKeys;

  /**
   * Adjust the block-start padding.
   *
   * This overrides the block-start value of `paddingBlock`.
   *
   * @default '0'
   */
  paddingBlockStart?: PaddingKeys;

  /**
   * Adjust the block-end padding.
   *
   * This overrides the block-end value of `paddingBlock`.
   *
   * @default '0'
   */
  paddingBlockEnd?: PaddingKeys;

  /**
   * Adjust the inline padding.
   *
   *
   * This overrides the inline value of `padding`.
   *
   * @default '0'
   */
  paddingInline?: PaddingKeys;

  /**
   * Adjust the inline-start padding.
   *
   * This overrides the inline-start value of `paddingInline`.
   *
   * @default '0'
   */
  paddingInlineStart?: PaddingKeys;

  /**
   * Adjust the inline-end padding.
   *
   * This overrides the inline-end value of `paddingInline`.

   * @default '0'
   */
  paddingInlineEnd?: PaddingKeys;
}

export type SizeUnits = `${number}px` | `${number}%` | `0`;
export type SizeUnitsOrNone = SizeUnits | 'none';
export type SizeUnitsOrAuto = SizeUnits | 'auto';

export interface SizingProps {
  /**
   * Adjust the block size.
   *
   * Auto takes the block size of the box's children.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/block-size
   *
   * @default 'auto'
   */
  blockSize?: SizeUnitsOrAuto;

  /**
   * Adjust the minimum block size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size
   *
   * @default '0'
   */
  minBlockSize?: SizeUnits;

  /**
   * Adjust the maximum block size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size
   *
   * @default 'none'
   */
  maxBlockSize?: SizeUnitsOrNone;

  /**
   * Adjust the inline size.
   *
   * Auto takes the inline size of the box's children.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size
   *
   * @default 'auto'
   */
  inlineSize?: SizeUnitsOrAuto;

  /**
   * Adjust the minimum inline size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size
   *
   * @default '0'
   */
  minInlineSize?: SizeUnits;

  /**
   * Adjust the maximum inline size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size
   *
   * @default 'none'
   */
  maxInlineSize?: SizeUnitsOrNone;
}
