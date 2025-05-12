import {createRemoteComponent} from '@remote-ui/core';
import {
  AutocompleteProps,
  TextAutocompleteField,
  InputProps,
  MinMaxLengthProps,
  FieldDecorationProps,
} from '../shared';

export interface TextFieldProps
  extends InputProps<string>,
    MinMaxLengthProps,
    AutocompleteProps<TextAutocompleteField>,
    FieldDecorationProps {}

export const TextField = createRemoteComponent<'TextField', TextFieldProps>(
  'TextField',
);
