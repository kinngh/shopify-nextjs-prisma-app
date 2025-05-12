import {createRemoteComponent} from '@remote-ui/core';

export interface ToggleButtonProps {
  /**
   * A unique identifier for the toggle button.
   */
  id: string;
  /**
   * A label used for buyers using assistive technologies. When set, any
   * `children` supplied to this component will not be announced to screen reader users.
   */
  accessibilityLabel?: string;
  /**
   * Disables the button, disallowing any interaction.
   */
  disabled?: boolean;
  /**
   * Callback when button is pressed.
   */
  onPress?(): void;
}

/**
 * Options inside a `ToggleButtonGroup`.
 */
export const ToggleButton = createRemoteComponent<
  'ToggleButton',
  ToggleButtonProps
>('ToggleButton');
