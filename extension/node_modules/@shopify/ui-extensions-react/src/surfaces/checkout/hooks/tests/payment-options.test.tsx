import type {
  PaymentOption,
  SelectedPaymentOption,
} from '@shopify/ui-extensions/checkout';

import {
  useAvailablePaymentOptions,
  useSelectedPaymentOptions,
} from '../payment-options';

import {mount, createMockStatefulRemoteSubscribable} from './mount';
import type {PartialExtensionApi} from './mount';

describe('Payment Methods API hooks', () => {
  describe('useAvailablePaymentOptions', () => {
    it('returns the available payment methods', async () => {
      const paymentOptions: PaymentOption[] = [
        {handle: 'bogus', type: 'other'},
        {handle: 'direct', type: 'creditCard'},
      ];

      const extensionApi: PartialExtensionApi = {
        availablePaymentOptions:
          createMockStatefulRemoteSubscribable(paymentOptions),
      };

      const {value} = mount.hook(() => useAvailablePaymentOptions(), {
        extensionApi,
      });

      expect(value).toBe(paymentOptions);
    });
  });

  describe('useSelectedPaymentOptions', () => {
    it('returns a single selected payment method', async () => {
      const availablePaymentOptions: PaymentOption[] = [
        {handle: 'bogus', type: 'other'},
        {handle: 'direct', type: 'creditCard'},
      ];

      const selectedPaymentOptionHandles: SelectedPaymentOption[] = [
        {handle: 'bogus', type: 'other'},
      ];

      const selectedPaymentOptions: SelectedPaymentOption[] = [
        {handle: 'bogus', type: 'other'},
      ];

      const extensionApi: PartialExtensionApi = {
        availablePaymentOptions: createMockStatefulRemoteSubscribable(
          availablePaymentOptions,
        ),
        selectedPaymentOptions: createMockStatefulRemoteSubscribable(
          selectedPaymentOptionHandles,
        ),
      };

      const {value} = mount.hook(() => useSelectedPaymentOptions(), {
        extensionApi,
      });

      expect(value).toStrictEqual(selectedPaymentOptions);
    });

    it('returns multiple selected payment methods', async () => {
      const availablePaymentOptions: PaymentOption[] = [
        {handle: 'bogus', type: 'other'},
        {handle: 'direct', type: 'creditCard'},
      ];

      const selectedPaymentOptionHandles: SelectedPaymentOption[] = [
        {handle: 'bogus', type: 'other'},
        {handle: 'direct', type: 'creditCard'},
      ];

      const selectedPaymentOptions: SelectedPaymentOption[] = [
        {handle: 'bogus', type: 'other'},
        {handle: 'direct', type: 'creditCard'},
      ];

      const extensionApi: PartialExtensionApi = {
        availablePaymentOptions: createMockStatefulRemoteSubscribable(
          availablePaymentOptions,
        ),
        selectedPaymentOptions: createMockStatefulRemoteSubscribable(
          selectedPaymentOptionHandles,
        ),
      };

      const {value} = mount.hook(() => useSelectedPaymentOptions(), {
        extensionApi,
      });

      expect(value).toStrictEqual(selectedPaymentOptions);
    });
  });
});
