import {CheckoutSettings} from '@shopify/ui-extensions/customer-account';

import {useCheckoutSettings} from '..';

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
      extension: {
        target: 'customer-account.order-status.block.render' as const,
      },
      checkoutSettings: createMockStatefulRemoteSubscribable(checkoutSettings),
    };

    const {value} = mount.hook(() => useCheckoutSettings(), {
      extensionApi,
    });

    expect(value).toStrictEqual(checkoutSettings);
  });
});
