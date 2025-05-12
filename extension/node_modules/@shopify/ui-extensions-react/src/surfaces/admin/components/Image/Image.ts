import {Image as BaseImage} from '@shopify/ui-extensions/admin';
import type {ImageProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Image = createRemoteReactComponent<'Image', ImageProps>(BaseImage);
export type {ImageProps} from '@shopify/ui-extensions/admin';
