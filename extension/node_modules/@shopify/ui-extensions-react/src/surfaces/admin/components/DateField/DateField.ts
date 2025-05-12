import {DateField as BaseDateField} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const DateField = createRemoteReactComponent(BaseDateField);
export type {DateFieldProps} from '@shopify/ui-extensions/admin';
