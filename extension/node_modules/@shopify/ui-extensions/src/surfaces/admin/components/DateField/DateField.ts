import {createRemoteComponent} from '@remote-ui/core';
import type {DatePickerProps} from '../DatePicker/DatePicker';
import type {TextFieldProps} from '../TextField/TextField';

export interface DateFieldProps
  extends Pick<
      TextFieldProps,
      | 'label'
      | 'name'
      | 'id'
      | 'readOnly'
      | 'onFocus'
      | 'onInput'
      | 'onBlur'
      | 'onChange'
      | 'error'
      | 'value'
    >,
    Pick<
      DatePickerProps<string>,
      'yearMonth' | 'defaultYearMonth' | 'disabled' | 'onYearMonthChange'
    > {}

export const DateField = createRemoteComponent<'DateField', DateFieldProps>(
  'DateField',
);
