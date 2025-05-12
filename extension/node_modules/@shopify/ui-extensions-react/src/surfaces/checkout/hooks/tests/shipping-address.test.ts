import type {MailingAddress} from '@shopify/ui-extensions/checkout';

import {useShippingAddress} from '../shipping-address';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useShippingAddress', () => {
  it('returns latest shipping address', async () => {
    const address: MailingAddress = {countryCode: 'CA'};
    const extensionApi = {
      shippingAddress: createMockStatefulRemoteSubscribable(address),
    };

    const {value} = mount.hook(() => useShippingAddress(), {extensionApi});

    expect(value).toMatchObject(address);
  });
});
