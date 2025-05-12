import {
  POSBlock as BasePOSBlock,
  POSBlockProps,
} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';
import {POSBlockRow} from './POSBlockRow';

export const POSBlock = createRemoteReactComponent<
  typeof BasePOSBlock,
  POSBlockProps,
  typeof POSBlockRow
>(BasePOSBlock);
