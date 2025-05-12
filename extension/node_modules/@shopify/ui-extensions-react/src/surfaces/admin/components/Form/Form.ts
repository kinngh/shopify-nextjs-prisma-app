import {Form as BaseForm} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Form = createRemoteReactComponent(BaseForm);
export type {FormProps} from '@shopify/ui-extensions/admin';
