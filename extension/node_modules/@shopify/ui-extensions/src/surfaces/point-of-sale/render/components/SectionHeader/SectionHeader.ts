import {createRemoteComponent} from '@remote-ui/core';

export interface SectionHeaderProps {
  /**
   * Title to be displayed.
   */
  title: string;
  /**
   * Action button to be displayed. The SectionHeader must have a `title` for `action` to work.
   */
  action?: {
    /**
     * Label for the action button.
     */
    label: string;
    /**
     * Function to handle action button press.
     */
    onPress: () => void;
    /**
     * Whether or not the action button is disabled.
     */
    disabled?: boolean;
  };
  /**
   * Whether or not the divider line under the SectionHeader should be hidden.
   */
  hideDivider?: boolean;
}

export const SectionHeader = createRemoteComponent<
  'SectionHeader',
  SectionHeaderProps
>('SectionHeader');
