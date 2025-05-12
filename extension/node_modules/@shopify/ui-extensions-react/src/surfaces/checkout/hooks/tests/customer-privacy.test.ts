import type {CustomerPrivacy} from '@shopify/ui-extensions/checkout';

import {useCustomerPrivacy} from '../customer-privacy';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useCustomerPrivacy', () => {
  it('returns customer privacy settings and data from the API', () => {
    const customerPrivacyValue: CustomerPrivacy = {
      allowedProcessing: {
        marketing: true,
        analytics: true,
        preferences: false,
        saleOfData: false,
      },
      metafields: [{key: 'test-key', value: 'test-value'}],
      saleOfDataRegion: true,
      shouldShowBanner: true,
      region: {
        countryCode: 'CA',
        provinceCode: 'ON',
      },
      visitorConsent: {
        marketing: true,
        analytics: true,
      },
    };

    const extensionApi = {
      customerPrivacy:
        createMockStatefulRemoteSubscribable(customerPrivacyValue),
    };

    const {value} = mount.hook(() => useCustomerPrivacy(), {extensionApi});

    expect(value).toMatchObject(customerPrivacyValue);
  });
});
