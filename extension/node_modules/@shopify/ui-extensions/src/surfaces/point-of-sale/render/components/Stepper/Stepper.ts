import {createRemoteComponent} from '@remote-ui/core';

export interface StepperProps {
  /**
   * The initial value of the stepper.
   */
  initialValue: number;

  /**
   * A callback when the value of the stepper changes.
   */
  onValueChanged: (value: number) => void;

  /**
   * Use to set the minimum value of the stepper.
   * @defaultValue 1
   */
  minimumValue?: number;

  /**
   * Use to set the maximum value of the stepper.
   */
  maximumValue?: number;

  /**
   * Only use this field if you wish to override the internal state of this component.
   */
  value?: number;

  /**
   * Whether the field can be modified.
   * @defaultValue false
   */
  disabled?: boolean;
}

export const Stepper = createRemoteComponent<'Stepper', StepperProps>(
  'Stepper',
);
