import {createRemoteComponent} from '@remote-ui/core';

import type {PhoneFieldProps} from '../PhoneField/PhoneField';

export type ConsentPolicy = 'sms-marketing';

export interface ConsentPhoneFieldProps extends Omit<PhoneFieldProps, 'value'> {
  /**
   * The policy for which buyer consent is being collected for.
   *
   * `sms-marketing`: Represents the policy for SMS marketing consent.
   */
  policy: ConsentPolicy;
}

export const ConsentPhoneField = createRemoteComponent<
  'ConsentPhoneField',
  ConsentPhoneFieldProps
>('ConsentPhoneField');
