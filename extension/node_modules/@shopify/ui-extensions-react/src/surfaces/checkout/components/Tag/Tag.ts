import {Tag as BaseTag} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type TagProps = ReactPropsFromRemoteComponentType<typeof BaseTag>;

export const Tag = createRemoteReactComponent(BaseTag);
