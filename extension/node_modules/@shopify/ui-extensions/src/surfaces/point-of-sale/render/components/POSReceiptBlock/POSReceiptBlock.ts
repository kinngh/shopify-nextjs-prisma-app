import {createRemoteComponent} from '@remote-ui/core';
import {QRCode} from '../QRCode/QRCode';
import {Text} from '../Text/Text';

/**
 * Renders a `POSReceiptBlock`. A `POSReceiptBlock` only accepts
 * `Text` and `QRCode` as children (more to be added in the future).
 */
export interface POSReceiptBlockProps {}
export type AllowedChildrenComponents = typeof Text | typeof QRCode;

export const POSReceiptBlock = createRemoteComponent<
  'POSReceiptBlock',
  POSReceiptBlockProps,
  AllowedChildrenComponents
>('POSReceiptBlock');
