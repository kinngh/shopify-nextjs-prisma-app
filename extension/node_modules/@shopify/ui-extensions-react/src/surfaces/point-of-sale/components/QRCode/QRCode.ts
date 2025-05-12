import {
  QRCode as BaseQRCode,
  QRCodeProps,
} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export const QRCode = createRemoteReactComponent<
  typeof BaseQRCode,
  QRCodeProps
>(BaseQRCode);
