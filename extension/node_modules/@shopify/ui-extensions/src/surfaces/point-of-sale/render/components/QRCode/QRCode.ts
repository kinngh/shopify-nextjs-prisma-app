import {createRemoteComponent} from '@remote-ui/core';

/**
 * The `QRCode` component renders a QR code in Shopify POS.
 * @property `value` the content to be encoded in the QR code.
 */
export interface QRCodeProps {
  /**
   * The content to be encoded in the QR code.
   */
  value: string;
}

export const QRCode = createRemoteComponent<'QRCode', QRCodeProps>('QRCode');
