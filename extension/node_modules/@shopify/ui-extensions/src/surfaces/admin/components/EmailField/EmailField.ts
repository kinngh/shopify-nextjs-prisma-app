import {createRemoteComponent} from '@remote-ui/core';
import {
  AutocompleteProps,
  AnyAutocompleteField,
  AutocompleteAddressGroup,
  InputProps,
  MinMaxLengthProps,
} from '../shared';

export interface EmailFieldProps
  extends InputProps<string>,
    MinMaxLengthProps,
    AutocompleteProps<EmailAutocompleteField> {}

export type EmailAutocompleteField = Extract<
  AnyAutocompleteField,
  'email' | `${AutocompleteAddressGroup} email`
>;

export const EmailField = createRemoteComponent<'EmailField', EmailFieldProps>(
  'EmailField',
);
