import {DatePicker as BaseDatePicker} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const DatePicker = createRemoteReactComponent(BaseDatePicker);
export type {DatePickerProps} from '@shopify/ui-extensions/admin';
