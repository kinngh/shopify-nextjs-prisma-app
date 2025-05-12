import {createRemoteComponent} from '@remote-ui/core';

/**
 * Represents the result of the pin pad onSubmit function.
 * @typedef {('accept'|'reject')} PinValidationResult
 */
export type PinValidationResult = 'accept' | 'reject';

/**
 * Represents the allowed lengths of a PIN.
 * @typedef {(4|5|6|7|8|9|10)} PinLength
 */
export type PinLength = 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * Represents an action type for the PinPad component.
 * @typedef {Object} PinPadActionType
 * @property {string} label - The label for the action button.
 * @property {function(): number[]} onPress - The function to be called when the action button is pressed.
 */
export interface PinPadActionType {
  /**
   * The label for the action button.
   */
  label: string;
  /**
   * The function to be called when the action button is pressed.
   */
  onPress: () => Promise<number[]>;
}

/**
 * Represents the properties for the PinPad component.
 * @typedef {Object} PinPadProps
 * @property {boolean} [masked] - Whether the entered PIN should be masked.
 * @property {PinLength} [minPinLength] - The minimum length of the PIN.
 * @property {PinLength} [maxPinLength] - The maximum length of the PIN.
 * @property {string} [label] - The content for the prompt on the pin pad.
 * @property {PinPadActionType} [pinPadAction] - The call to action between the entry view and the keypad, consisting of a label and function that returns the pin.
 * @property {function(pin: number[]): Promise<PinValidationResult>} onSubmit - The function to be called when the PIN is submitted.
 * @property {function(pin: number[]): void} [onPinEntry] - The function to be called when a PIN is entered.
 */
export interface PinPadProps {
  /**
   * Whether the entered PIN should be masked.
   */
  masked?: boolean;
  /**
   * The minimum length of the PIN.
   */
  minPinLength?: PinLength;
  /**
   * The maximum length of the PIN.
   */
  maxPinLength?: PinLength;
  /**
   * The content for the prompt on the pin pad.
   */
  label?: string;
  /**
   * The call to action between the entry view and the keypad, consisting of a label and function that returns the pin.
   */
  pinPadAction?: PinPadActionType;
  /**
   * The function to be called when the PIN is submitted.
   */
  onSubmit: (pin: number[]) => Promise<PinValidationResult>;
  /**
   * The function to be called when a PIN is entered.
   */
  onPinEntry?: (pin: number[]) => void;
}

export const PinPad = createRemoteComponent<'PinPad', PinPadProps>('PinPad');
