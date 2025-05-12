import {useCustomerPrivacy} from '..';
import type {CustomerPrivacy} from '@shopify/ui-extensions/customer-account';
import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useCustomerPrivacy', () => {
  it('returns customer privacy from api', () => {
    const customerPrivacyValue: CustomerPrivacy = {
      allowedProcessing: {
        analytics: false,
        marketing: false,
        preferences: false,
        saleOfData: false,
      },
      visitorConsent: {
        analytics: undefined,
        marketing: undefined,
        preferences: undefined,
        saleOfData: undefined,
      },
      shouldShowBanner: false,
      saleOfDataRegion: false,
      region: undefined,
      metafields: [],
    };

    const {value} = mount.hook(() => useCustomerPrivacy(), {
      extensionApi: {
        extension: {
          target: 'customer-account.order-status.block.render' as const,
        },
        customerPrivacy:
          createMockStatefulRemoteSubscribable(customerPrivacyValue),
      },
    });

    expect(value).toStrictEqual(customerPrivacyValue);
  });
});
