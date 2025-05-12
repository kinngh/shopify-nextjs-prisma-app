import {SkeletonText as BaseSkeletonText} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type SkeletonTextProps = ReactPropsFromRemoteComponentType<
  typeof BaseSkeletonText
>;

export const SkeletonText = createRemoteReactComponent(BaseSkeletonText);
