import type {ExtensionTarget} from '@shopify/ui-extensions/checkout';
import {faker} from '@faker-js/faker';

import {useDeliverySelectionGroups} from '../delivery-selection-groups';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useDeliverySelectionGroups', () => {
  it('returns deliverySelectionGroups if it exists', async () => {
    const deliverySelectionGroup = {
      handle: faker.string.uuid(),
      selected: false,
      title: 'Lowest price',
      associatedDeliveryOptions: [
        {handle: faker.string.uuid()},
        {handle: faker.string.uuid()},
      ],
      cost: {
        amount: 10,
        currencyCode: 'USD',
      },
      costAfterDiscounts: {
        amount: 10,
        currencyCode: 'USD',
      },
    };

    const target: ExtensionTarget =
      'purchase.checkout.shipping-option-list.render-before';

    const {value} = mount.hook(() => useDeliverySelectionGroups(), {
      extensionApi: {
        extension: {target},
        deliverySelectionGroups: createMockStatefulRemoteSubscribable([
          deliverySelectionGroup,
        ]) as any,
      },
    });

    expect(value).toStrictEqual([deliverySelectionGroup]);
  });

  it('returns undefined if delivery selection groups are missing', async () => {
    const target: ExtensionTarget =
      'purchase.checkout.shipping-option-list.render-before';

    const {value} = mount.hook(() => useDeliverySelectionGroups(), {
      extensionApi: {
        extension: {target},
        deliverySelectionGroups:
          createMockStatefulRemoteSubscribable(undefined),
      },
    });

    expect(value).toBeUndefined();
  });
});
