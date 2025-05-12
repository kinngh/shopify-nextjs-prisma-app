import {QRCode as BaseQRCode} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type QRCodeProps = ReactPropsFromRemoteComponentType<typeof BaseQRCode>;

export const QRCode = createRemoteReactComponent(BaseQRCode);
