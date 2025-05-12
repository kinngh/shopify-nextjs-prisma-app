import {Chat as BaseChat} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ChatProps = ReactPropsFromRemoteComponentType<typeof BaseChat>;

export const Chat = createRemoteReactComponent(BaseChat);
