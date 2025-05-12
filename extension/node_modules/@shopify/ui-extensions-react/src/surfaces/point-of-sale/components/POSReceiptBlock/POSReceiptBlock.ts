import {
  POSReceiptBlock as BasePOSReceiptBlock,
  POSReceiptBlockProps,
  AllowedChildrenComponents,
} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export const POSReceiptBlock = createRemoteReactComponent<
  typeof BasePOSReceiptBlock,
  POSReceiptBlockProps,
  AllowedChildrenComponents
>(BasePOSReceiptBlock);
