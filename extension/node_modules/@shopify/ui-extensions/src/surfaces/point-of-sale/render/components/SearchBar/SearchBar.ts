import {createRemoteComponent} from '@remote-ui/core';

export interface SearchBarProps {
  /**
   * The initial text value in the search bar. This is different from `placeHolder`, which is displayed in the search bar when the search bar doesn't have a populated string.
   */
  initialValue?: string;
  /**
   * A callback containing the new text value of the search bar.
   */
  onTextChange?: (value: string) => void;
  /**
   * A callback when the search button is tapped.
   */
  onSearch: (value: string) => void;
  /**
   * A callback when the input is focused.
   */
  onFocus?: () => void;
  /**
   * Whether the text can be changed.
   */
  editable?: boolean;
  /**
   * The placeholder value to display in the search bar when no text is entered.
   */
  placeholder?: string;
}

export const SearchBar = createRemoteComponent<'SearchBar', SearchBarProps>(
  'SearchBar',
);
