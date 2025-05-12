import {TextField as BaseTextField} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type TextFieldProps = ReactPropsFromRemoteComponentType<
  typeof BaseTextField
>;

export const TextField = createRemoteReactComponent(BaseTextField, {
  fragmentProps: ['accessory'],
});
