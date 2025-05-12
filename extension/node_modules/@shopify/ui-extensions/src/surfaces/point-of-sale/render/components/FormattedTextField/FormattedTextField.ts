import {createRemoteComponent} from '@remote-ui/core';
import type {AutoCapitalizationType} from '../shared/auto-capitalization-type';
import type {BaseTextFieldProps} from '../shared/BaseTextField';

/**
 * Dictates what type of values can be used in a `TextField`.
 */
export type InputType = 'text' | 'number' | 'currency' | 'giftcard' | 'email';
/**
 * @property `inputType` the `InputType` of the `TextField`. This will select the appropriate keyboard.
 * @property `autoCapitalize` dictates when the text should be auto-capitalized.
 * @property `customValidator` applies a custom validator that can dictate whether or not an entered value is valid.
 */
export interface FormattedTextFieldProps extends BaseTextFieldProps {
  /**
   * The `InputType` of the `TextField`. This will select the appropriate keyboard.
   */
  inputType?: InputType;
  /**
   * Dictates when the text should be auto-capitalized.
   */
  autoCapitalize?: AutoCapitalizationType;
}

/**
 * @deprecated Use the `TextField` component instead.
 */
export const FormattedTextField = createRemoteComponent<
  'FormattedTextField',
  FormattedTextFieldProps
>('FormattedTextField');
