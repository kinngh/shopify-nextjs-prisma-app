import {Form as BaseForm} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type FormProps = ReactPropsFromRemoteComponentType<typeof BaseForm>;

export const Form = createRemoteReactComponent(BaseForm);
