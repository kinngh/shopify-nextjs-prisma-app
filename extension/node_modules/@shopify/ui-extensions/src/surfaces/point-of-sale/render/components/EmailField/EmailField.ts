import {createRemoteComponent} from '@remote-ui/core';
import type {InputProps} from '../shared/InputField';

export interface EmailFieldProps extends InputProps {}

export const EmailField = createRemoteComponent<'EmailField', EmailFieldProps>(
  'EmailField',
);
