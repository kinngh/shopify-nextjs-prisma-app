import {EmailField as BaseEmailField} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const EmailField = createRemoteReactComponent(BaseEmailField);
export type {EmailFieldProps} from '@shopify/ui-extensions/admin';
