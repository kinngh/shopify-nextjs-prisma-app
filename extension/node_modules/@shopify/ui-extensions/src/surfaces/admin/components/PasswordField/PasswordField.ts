import {createRemoteComponent} from '@remote-ui/core';
import {
  AutocompleteProps,
  AnyAutocompleteField,
  InputProps,
  MinMaxLengthProps,
} from '../shared';

export interface PasswordFieldProps
  extends InputProps<string>,
    MinMaxLengthProps,
    AutocompleteProps<PasswordAutocompleteField> {}

export type PasswordAutocompleteField = Extract<
  AnyAutocompleteField,
  'new-password' | 'current-password'
>;

export const PasswordField = createRemoteComponent<
  'PasswordField',
  PasswordFieldProps
>('PasswordField');
