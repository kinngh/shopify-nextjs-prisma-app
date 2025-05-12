import {URLField as BaseURLField} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const URLField = createRemoteReactComponent(BaseURLField);
export type {URLFieldProps} from '@shopify/ui-extensions/admin';
