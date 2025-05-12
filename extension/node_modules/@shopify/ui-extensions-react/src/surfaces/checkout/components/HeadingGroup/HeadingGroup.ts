import {HeadingGroup as BaseHeadingGroup} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type HeadingGroupProps = ReactPropsFromRemoteComponentType<
  typeof BaseHeadingGroup
>;

export const HeadingGroup = createRemoteReactComponent(BaseHeadingGroup);
