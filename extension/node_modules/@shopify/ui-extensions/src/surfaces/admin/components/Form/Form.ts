import {createRemoteComponent} from '@remote-ui/core';

export interface FormProps {
  /**
   * A unique identifier for the form.
   */
  id?: string;

  /**
   * A callback that is run when the form is submitted.
   */
  onSubmit(): void | Promise<void>;

  /**
   * A callback that is run when the form is reset.
   */
  onReset(): void | Promise<void>;
}

export const Form = createRemoteComponent<'Form', FormProps>('Form');
