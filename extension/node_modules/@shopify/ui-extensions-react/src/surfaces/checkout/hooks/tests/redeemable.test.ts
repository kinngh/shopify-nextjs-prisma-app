import type {ExtensionTarget} from '@shopify/ui-extensions/checkout';

import {useApplyRedeemableChange} from '../redeemable';
import {ExtensionHasNoMethodError} from '../../errors';

import {mount} from './mount';

describe('Redeemable API hooks', () => {
  describe('useApplyRedeemableChange()', () => {
    it('returns the applyRedeemableChange function', async () => {
      const target: ExtensionTarget = 'purchase.checkout.gift-card.render';
      const extensionApi = {
        applyRedeemableChange: jest.fn,
        extension: {target},
      };
      const {value} = mount.hook(() => useApplyRedeemableChange(), {
        extensionApi,
      });
      expect(value).toBe(jest.fn);
    });

    it('raises when applyRedeemableChange is not available', async () => {
      const runner = async () => {
        const target: ExtensionTarget = 'purchase.checkout.block.render';
        return mount.hook(() => useApplyRedeemableChange(), {
          extensionApi: {
            extension: {target},
          },
        });
      };
      await expect(runner).rejects.toThrow(ExtensionHasNoMethodError);
    });
  });
});
