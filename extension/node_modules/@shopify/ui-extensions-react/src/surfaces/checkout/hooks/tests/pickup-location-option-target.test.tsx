import type {
  ExtensionTarget,
  PickupLocationOption,
} from '@shopify/ui-extensions/checkout';

import {usePickupLocationOptionTarget} from '../pickup-location-option-target';
import {ExtensionHasNoTargetError} from '../../errors';

import {createMockStatefulRemoteSubscribable, mount} from './mount';

describe('usePickupLocationOptionTarget', () => {
  const pickupLocationOption = {
    handle: 'pickup_method_1',
    title: 'Pickup method 1',
    description: 'something',
    type: 'pickup',
    code: 'pickup_method_1',
    location: {
      address: {
        address1: '123 Fake St',
        address2: null,
        city: 'Ottawa',
        company: null,
        country: 'Canada',
        firstName: 'Bob',
        lastName: 'Bobsen',
        phone: '555-555-5555',
        province: 'Ontario',
        zip: 'K2P0V6',
      },
    },
  } as PickupLocationOption;

  it('throws if extension target has no api.target', async () => {
    const runner = async () => {
      const target: ExtensionTarget = 'purchase.checkout.block.render';
      return mount.hook(() => usePickupLocationOptionTarget(), {
        extensionApi: {
          extension: {target},
          target: undefined,
          isTargetSelected: createMockStatefulRemoteSubscribable(true),
        },
      });
    };

    await expect(runner).rejects.toThrow(ExtensionHasNoTargetError);
  });

  it('throws if extension target has no api.isTargetSelected', async () => {
    const runner = async () => {
      const target: ExtensionTarget = 'purchase.checkout.block.render';
      return mount.hook(() => usePickupLocationOptionTarget(), {
        extensionApi: {
          extension: {target},
          target: createMockStatefulRemoteSubscribable(pickupLocationOption),
          isTargetSelected: undefined,
        },
      });
    };

    await expect(runner).rejects.toThrow(ExtensionHasNoTargetError);
  });

  it('returns the pickup location option target if it exists', async () => {
    const target: ExtensionTarget =
      'purchase.checkout.pickup-location-option-item.render-after';
    const {value} = mount.hook(() => usePickupLocationOptionTarget(), {
      extensionApi: {
        extension: {target},
        target: createMockStatefulRemoteSubscribable(pickupLocationOption),
        isTargetSelected: createMockStatefulRemoteSubscribable(true),
      },
    });

    expect(value).toStrictEqual({
      pickupLocationOptionTarget: pickupLocationOption,
      isTargetSelected: true,
    });
  });
});
