import {SkeletonTextBlock as BaseSkeletonTextBlock} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type SkeletonTextBlockProps = ReactPropsFromRemoteComponentType<
  typeof BaseSkeletonTextBlock
>;

export const SkeletonTextBlock = createRemoteReactComponent(
  BaseSkeletonTextBlock,
);
