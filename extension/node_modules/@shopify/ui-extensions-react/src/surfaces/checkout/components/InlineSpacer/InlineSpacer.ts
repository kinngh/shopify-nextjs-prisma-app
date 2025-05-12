import {InlineSpacer as BaseInlineSpacer} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type InlineSpacerProps = ReactPropsFromRemoteComponentType<
  typeof BaseInlineSpacer
>;

export const InlineSpacer = createRemoteReactComponent(BaseInlineSpacer);
