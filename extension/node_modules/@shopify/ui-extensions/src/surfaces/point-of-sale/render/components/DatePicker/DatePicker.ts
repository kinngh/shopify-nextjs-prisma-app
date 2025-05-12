import {createRemoteComponent} from '@remote-ui/core';

/**
 * Represents the properties for the DatePicker component.
 * @property selected - The selected time.
 * @property onChange - A callback for changes.
 * @property visibleState - Control the visible state, and a callback to set the visible state as false when the dialog closes.
 * @property inputMode - Whether to display the picker in inline (clock) mode or spinner mode.
 */
export interface DatePickerProps {
  /**
   * The selected time.
   * @defaultValue The current time
   */
  selected?: string;
  /**
   * A callback for changes.
   */
  onChange?(selected: string): void;
  /**
   * Control the visible state, and a callback to set the visible state as false when the dialog closes.
   */
  visibleState: [boolean, (visible: boolean) => void];

  /**
   * Whether to display the picker in inline (calendar) mode or spinner mode.
   * @defaultValue 'inline'
   */
  inputMode?: 'inline' | 'spinner';
}

export const DatePicker = createRemoteComponent<'DatePicker', DatePickerProps>(
  'DatePicker',
);
