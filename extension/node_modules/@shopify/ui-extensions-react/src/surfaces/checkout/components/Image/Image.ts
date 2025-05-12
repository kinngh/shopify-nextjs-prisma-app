import {Image as BaseImage} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ImageProps = ReactPropsFromRemoteComponentType<typeof BaseImage>;

export const Image = createRemoteReactComponent(BaseImage);
