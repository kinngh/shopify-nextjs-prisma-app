import {createRemoteComponent} from '@remote-ui/core';

export interface RadioButtonListProps {
  /**
   * 	The radio button options.
   */
  items: string[];
  /**
   * A callback to be performed when the radio list item is selected.
   */
  onItemSelected: (item: string) => void;
  /**
   * The name of the selected item. Warning: This is a controlled component, so this prop must be used in conjunction with onItemSelected.
   */
  initialSelectedItem?: string;
  /**
   * Whether the initialSelectedItem renders at the top of the list.
   */
  initialOffsetToShowSelectedItem?: boolean;
}

export const RadioButtonList = createRemoteComponent<
  'RadioButtonList',
  RadioButtonListProps
>('RadioButtonList');
