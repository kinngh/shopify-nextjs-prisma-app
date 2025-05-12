import {TextField as BaseTextField} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const TextField = createRemoteReactComponent(BaseTextField);
export type {TextFieldProps} from '@shopify/ui-extensions/admin';
