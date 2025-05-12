import type {ExtensionTarget} from '@shopify/ui-extensions/checkout';

import {
  useApplyPaymentMethodAttributesChange,
  usePaymentMethodAttributeValues,
  usePaymentMethodAttributes,
} from '../payment-method';
import {ExtensionHasNoMethodError, ScopeNotGrantedError} from '../../errors';

import {createMockStatefulRemoteSubscribable, mount} from './mount';

describe('Payment Method API hooks', () => {
  describe('usePaymentMethodAttributes', () => {
    const paymentMethodAttributes = [{key: 'test_key', value: 'test_value'}];

    it('returns the paymentMethodAttributes value', async () => {
      const {value} = mount.hook(() => usePaymentMethodAttributes(), {
        extensionApi: {
          paymentMethodAttributes: createMockStatefulRemoteSubscribable(
            paymentMethodAttributes,
          ),
        },
      });
      expect(value).toBe(paymentMethodAttributes);
    });

    it('raises when paymentMethodAttributes is not available', async () => {
      const runner = async () => {
        return mount.hook(() => usePaymentMethodAttributes(), {
          extensionApi: {},
        });
      };
      await expect(runner).rejects.toThrow(ScopeNotGrantedError);
    });
  });

  describe('usePaymentMethodAttributeValues', () => {
    const paymentMethodAttributes = [{key: 'test_key', value: 'test_value'}];
    const extensionApi = {
      paymentMethodAttributes: createMockStatefulRemoteSubscribable(
        paymentMethodAttributes,
      ),
    };

    it('returns the paymentMethodAttributes values', async () => {
      const {value} = mount.hook(
        () => usePaymentMethodAttributeValues(['test_key']),
        {extensionApi},
      );
      expect(value).toStrictEqual(['test_value']);
    });

    it('returns undefined for not found keys', async () => {
      const {value} = mount.hook(
        () => usePaymentMethodAttributeValues(['test_key', 'test_key3']),
        {extensionApi},
      );
      expect(value).toStrictEqual(['test_value', undefined]);
    });

    it('returns an empty array if payment attributes object is undefined', async () => {
      const {value} = mount.hook(
        () => usePaymentMethodAttributeValues(['test_key', 'test_key3']),
        {
          extensionApi: {
            paymentMethodAttributes:
              createMockStatefulRemoteSubscribable(undefined),
          },
        },
      );
      expect(value).toStrictEqual([]);
    });

    it('returns an empty array if payment attributes object is an empty array', async () => {
      const {value} = mount.hook(
        () => usePaymentMethodAttributeValues(['test_key', 'test_key3']),
        {
          extensionApi: {
            paymentMethodAttributes: createMockStatefulRemoteSubscribable([]),
          },
        },
      );
      expect(value).toStrictEqual([]);
    });
  });

  describe('useApplyPaymentMethodAttributesChange()', () => {
    it('returns the applyPaymentMethodAttributesChange function', async () => {
      const target: ExtensionTarget =
        'purchase.checkout.payment-option-item.details.render';
      const extensionApi = {
        applyPaymentMethodAttributesChange: jest.fn,
        extension: {target},
      };
      const {value} = mount.hook(
        () => useApplyPaymentMethodAttributesChange(),
        {
          extensionApi,
        },
      );
      expect(value).toBe(jest.fn);
    });

    it('raises when applyPaymentMethodAttributesChange is not available', async () => {
      const runner = async () => {
        const target: ExtensionTarget = 'purchase.checkout.block.render';
        return mount.hook(() => useApplyPaymentMethodAttributesChange(), {
          extensionApi: {
            extension: {target},
          },
        });
      };
      await expect(runner).rejects.toThrow(ExtensionHasNoMethodError);
    });
  });
});
