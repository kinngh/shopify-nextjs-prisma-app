/**
 * @property `title` the title of the `TextField`.
 * @property `initialValue` populates the `TextField` with an text initial value.
 * @property `placeholder` sets a placeholder value for when the `TextField` is empty.
 * @property `isValid` set whether the current value in the `TextField` is valid.
 * @property `errorMessage` sets an error message to present to the user.
 * @property `onChangeText` a callback that is executed every time the `TextField` value changes.
 */
export interface BaseTextFieldProps {
  /**
   * The title of the `TextField`.
   */
  title?: string;
  /**
   * Populates the `TextField` with an text initial value.
   */
  initialValue?: string;
  /**
   * Sets a placeholder value for when the `TextField` is empty.
   */
  placeholder?: string;
  /**
   * Set whether the current value in the `TextField` is valid.
   */
  isValid?: boolean;
  /**
   * Sets an error message to present to the user.
   */
  errorMessage?: string;
  /**
   * A callback that is executed every time the `TextField` value changes.
   */
  onChangeText?: (value: string) => void;
}
