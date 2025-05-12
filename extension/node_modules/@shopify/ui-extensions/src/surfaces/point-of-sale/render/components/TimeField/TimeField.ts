import {createRemoteComponent} from '@remote-ui/core';
import {InputProps} from '../shared/InputField';

export interface TimeFieldProps
  extends Pick<
    InputProps,
    | 'value'
    | 'error'
    | 'label'
    | 'disabled'
    | 'onFocus'
    | 'onBlur'
    | 'onChange'
    | 'action'
    | 'helpText'
  > {
  /**
   * (Android only) Whether the clock displays in 24 hour time instead of 12 hour time.
   * @defaultValue false
   */
  is24Hour?: boolean;
}

export const TimeField = createRemoteComponent<'TimeField', TimeFieldProps>(
  'TimeField',
);
