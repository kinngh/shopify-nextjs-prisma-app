import {Modal as BaseModal} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ModalProps = ReactPropsFromRemoteComponentType<typeof BaseModal>;

export const Modal = createRemoteReactComponent(BaseModal, {
  fragmentProps: ['primaryAction', 'secondaryActions'],
});
