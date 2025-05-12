import {ProductThumbnail as BaseProductThumbnail} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ProductThumbnailProps = ReactPropsFromRemoteComponentType<
  typeof BaseProductThumbnail
>;

export const ProductThumbnail =
  createRemoteReactComponent(BaseProductThumbnail);
