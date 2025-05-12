import {createRemoteComponent} from '@remote-ui/core';

/**
 * Represents the properties for the TimePicker component.
 * @property selected - The selected time.
 * @property onChange - A callback for changes.
 * @property visibleState - Controls the visible state, and a callback to set the visible state as false when the dialog closes.
 * @property is24Hour - (Android only) Whether the clock displays in 24 hour time instead of 12 hour time.
 * @property inputMode - Whether to display the picker in inline (clock) mode or spinner mode.
 */
export interface TimePickerProps {
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
   * Controls the visible state, and a callback to set the visible state as false when the dialog closes.
   */
  visibleState: [boolean, (visible: boolean) => void];
  /**
   * (Android only) Whether the clock displays in 24 hour time instead of 12 hour time.
   * @defaultValue false
   */
  is24Hour?: boolean;
  /**
   * Whether to display the picker in inline (clock) mode or spinner mode.
   * iOS only supports 'spinner'.
   * @defaultValue 'inline'
   */
  inputMode?: 'inline' | 'spinner';
}

export const TimePicker = createRemoteComponent<'TimePicker', TimePickerProps>(
  'TimePicker',
);
