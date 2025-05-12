import {BlockSpacer as BaseBlockSpacer} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type BlockSpacerProps = Omit<
  ReactPropsFromRemoteComponentType<typeof BaseBlockSpacer>,
  'children'
>;

export const BlockSpacer = createRemoteReactComponent(BaseBlockSpacer);
