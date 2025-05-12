import {Progress as BaseProgress} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ProgressProps = ReactPropsFromRemoteComponentType<
  typeof BaseProgress
>;

export const Progress = createRemoteReactComponent(BaseProgress);
