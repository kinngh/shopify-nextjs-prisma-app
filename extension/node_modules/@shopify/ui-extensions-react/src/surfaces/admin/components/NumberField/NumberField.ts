import {NumberField as BaseNumberField} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const NumberField = createRemoteReactComponent(BaseNumberField);
export type {NumberFieldProps} from '@shopify/ui-extensions/admin';
