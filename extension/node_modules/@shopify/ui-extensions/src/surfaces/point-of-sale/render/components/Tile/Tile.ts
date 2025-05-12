import {createRemoteComponent} from '@remote-ui/core';

/**
 * @property `title` the text set on the main label of the tile.
 * @property `subtitle` the text set on the secondary label of the tile.
 * @property `enabled` sets whether or not the tile can be tapped.
 * @property `destructive` sets whether or not the tile is in a red destructive appearance.
 * @property `badgeValue` the number value displayed in the top right corner of the tile.
 * @property `onPress` the callback that is executed when the tile is tapped.
 */
export interface TileProps {
  /**
   * The text set on the main label of the tile.
   */
  title: string;
  /**
   * The text set on the secondary label of the tile.
   */
  subtitle?: string;
  /**
   * Sets whether or not the tile can be tapped.
   */
  enabled?: boolean;
  /**
   * Sets whether or not the tile is in a red destructive appearance.
   */
  destructive?: boolean;
  /**
   * The number value displayed in the top right corner of the tile.
   */
  badgeValue?: number;
  /**
   * The callback that is executed when the tile is tapped.
   */
  onPress?: () => void;
}

export const Tile = createRemoteComponent<'Tile', TileProps>('Tile');
