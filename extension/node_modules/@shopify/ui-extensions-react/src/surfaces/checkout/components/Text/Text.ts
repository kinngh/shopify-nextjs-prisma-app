import {Text as BaseText} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type TextProps = ReactPropsFromRemoteComponentType<typeof BaseText>;

export const Text = createRemoteReactComponent(BaseText);
