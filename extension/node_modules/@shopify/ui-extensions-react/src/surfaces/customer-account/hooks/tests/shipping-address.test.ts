import {MailingAddress} from '@shopify/ui-extensions/customer-account';

import {useShippingAddress} from '..';

import {mount, createMockStatefulRemoteSubscribable} from './mount';
import {ScopeNotGrantedError} from '../../errors';

describe('useShippingAddress', () => {
  it('returns latest shipping address', async () => {
    const address: MailingAddress = {countryCode: 'CA'};
    const extensionApi = {
      extension: {
        target: 'customer-account.order-status.block.render' as const,
      },
      shippingAddress: createMockStatefulRemoteSubscribable(address),
    };

    const {value} = mount.hook(() => useShippingAddress(), {extensionApi});

    expect(value).toMatchObject(address);
  });

  it('raises an exception without approval scopes granted', () => {
    expect(() =>
      mount.hook(() => useShippingAddress(), {
        extensionApi: {
          extension: {
            target: 'customer-account.order-status.block.render' as const,
          },
          shippingAddress: undefined,
        },
      }),
    ).toThrow(ScopeNotGrantedError);
  });
});
