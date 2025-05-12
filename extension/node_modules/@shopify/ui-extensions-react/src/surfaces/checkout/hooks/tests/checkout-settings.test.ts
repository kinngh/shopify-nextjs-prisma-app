import type {CheckoutSettings} from '@shopify/ui-extensions/checkout';

import {useCheckoutSettings} from '../checkout-settings';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useCheckoutSettings', () => {
  it('returns checkout settings from the api', () => {
    const checkoutSettings = {
      orderSubmission: 'ORDER',
      shippingAddress: {
        isEditable: true,
      },
      paymentTermsTemplate: undefined,
    } as CheckoutSettings;

    const extensionApi = {
      checkoutSettings: createMockStatefulRemoteSubscribable(checkoutSettings),
    };

    const {value} = mount.hook(() => useCheckoutSettings(), {
      extensionApi,
    });

    expect(value).toStrictEqual(checkoutSettings);
  });
});
