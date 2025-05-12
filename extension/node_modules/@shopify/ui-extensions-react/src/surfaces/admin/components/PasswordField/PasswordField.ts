import {PasswordField as BasePasswordField} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const PasswordField = createRemoteReactComponent(BasePasswordField);
export type {PasswordFieldProps} from '@shopify/ui-extensions/admin';
