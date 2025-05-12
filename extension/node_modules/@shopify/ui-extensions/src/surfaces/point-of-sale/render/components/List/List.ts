import {RemoteFragment, createRemoteComponent} from '@remote-ui/core';
import {BadgeProps} from '../Badge/Badge';
import {ColorType} from '../Text/Text';

export interface ToggleSwitch {
  /**
   * Whether or not the toggle switch is on or off.
   */
  value?: boolean;

  /**
   * Whether or not the toggle switch is disabled.
   */
  disabled?: boolean;
}

export interface SubtitleType {
  /**
   * The subtitles to display beneath the main label.
   */
  content: string;

  /**
   * Property used to modify the subtitle appearance.
   */
  color?: ColorType;
}

export type ListRowSubtitle = string | SubtitleType;

export interface ListRowLeftSide {
  /**
   * The main label that will be displayed on the left side of the row.
   */
  label: string;
  /**
   * The subtitles to display beneath the main label. Up to 3 subtitles can be displayed.
   * Subtitles can optionally be configured with colors by passing an object with a `content` and `color` properties.
   */
  subtitle?: [ListRowSubtitle, ListRowSubtitle?, ListRowSubtitle?];
  /**
   * Colored badges that are displayed underneath the `title` and `subtitles`.
   */
  badges?: BadgeProps[];
  image?: {
    /**
     * A link to an image to be displayed on the far left side of the row.
     */
    source?: string;
    /**
     * A number that is displayed on the top right of the image.
     */
    badge?: number;
  };
}

export interface ListRowRightSide {
  /**
   * The main label that will be displayed on the right side of the row.
   */
  label?: string;
  /**
   * Show a chevron. Set this to true if pressing on the row navigates to another screen.
   * @defaultValue `false`
   */
  showChevron?: boolean;
  /**
   * A toggle switch that is be displayed on the right side of the row.
   */
  toggleSwitch?: ToggleSwitch;
}

export interface ListRow {
  /**
   * The unique identifier for this list item.
   */
  id: string;
  /**
   * The user interface of the left side of the row.
   */
  leftSide: ListRowLeftSide;
  /**
   * The user interface of the right side of the row.
   */
  rightSide?: ListRowRightSide;
  /**
   * Callback for when the user taps the row.
   */
  onPress?: () => void;
}

export interface ListProps {
  /**
   * A large display title at the top of the `List`.
   */
  title?: string;
  /**
   * A header component for the list.
   */
  listHeaderComponent?: RemoteFragment;
  /**
   * The array of `ListRow` which will be converted into rows for this list.
   */
  data: ListRow[];
  /**
   * Whether or not more data is being loaded. Set this to `true` when paginating and fetching more data for the list.
   */
  isLoadingMore?: boolean;
  /**
   * The logic behind displaying an image or placeholder. `automatic` will display an image or placeholder if it detects
   * that a `ListItem` in `data` has an `imageUri` value. `never` will never display images or placeholders. `always` will
   * always display images or placeholders if `imageUri` is undefined or empty.
   * @defaultValue `automatic`
   */
  imageDisplayStrategy?: 'automatic' | 'always' | 'never';
  /**
   * Callback for when the user reaches the end of the `List`. This can be used to fire a request to load more data.
   */
  onEndReached?: () => void;
}

export const List = createRemoteComponent<'List', ListProps>('List');
