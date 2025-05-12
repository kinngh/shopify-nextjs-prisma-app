import {Spinner as BaseSpinner} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type SpinnerProps = ReactPropsFromRemoteComponentType<
  typeof BaseSpinner
>;

export const Spinner = createRemoteReactComponent(BaseSpinner);
