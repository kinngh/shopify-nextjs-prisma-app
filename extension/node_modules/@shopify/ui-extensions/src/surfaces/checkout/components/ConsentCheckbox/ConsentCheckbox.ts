import {createRemoteComponent} from '@remote-ui/core';

import type {CheckboxProps} from '../Checkbox/Checkbox';

export interface ConsentCheckboxProps extends Omit<CheckboxProps, 'value'> {
  /**
   * The policy for which buyer consent is being collected for.
   *
   * `sms-marketing`: Represents the policy for SMS marketing consent.
   */
  policy: 'sms-marketing';
}

export const ConsentCheckbox = createRemoteComponent<
  'ConsentCheckbox',
  ConsentCheckboxProps
>('ConsentCheckbox');
