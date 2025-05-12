import {createRemoteComponent} from '@remote-ui/core';

export interface LoginWithShopProps {
  open: boolean;
  openLogin?: boolean;
  doRedirect?: boolean;
  modalTitle: string;
  modalDescription: string;
  modalLogoSrc: string;
  modalContinueText?: string;
  modalCancelText: string;
  onComplete?(): void | Promise<void>;
  onClosed?(): void;
  onStatusChange?(
    status: 'shop_pay' | 'guest' | 'shop_pay_skipped' | 'shop_pay_guest',
  ): void;
}

export const LoginWithShop = createRemoteComponent<
  'LoginWithShop',
  LoginWithShopProps
>('LoginWithShop');
