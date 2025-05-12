import {ProgressIndicator as BaseProgressIndicator} from '@shopify/ui-extensions/admin';
import type {ProgressIndicatorProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const ProgressIndicator = createRemoteReactComponent<
  'ProgressIndicator',
  ProgressIndicatorProps
>(BaseProgressIndicator);
export type {ProgressIndicatorProps} from '@shopify/ui-extensions/admin';
