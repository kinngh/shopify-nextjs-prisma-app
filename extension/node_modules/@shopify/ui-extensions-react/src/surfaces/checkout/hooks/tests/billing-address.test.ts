import type {MailingAddress} from '@shopify/ui-extensions/checkout';

import {useBillingAddress} from '../billing-address';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useBillingAddress', () => {
  it('returns latest billing address', async () => {
    const address: MailingAddress = {countryCode: 'CA'};
    const extensionApi = {
      billingAddress: createMockStatefulRemoteSubscribable(address),
    };

    const {value} = mount.hook(() => useBillingAddress(), {extensionApi});

    expect(value).toMatchObject(address);
  });
});
