import {useAuthenticationState} from '..';
import type {Extension} from '@shopify/ui-extensions/customer-account';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useAuthenticationState Hooks', () => {
  it('returns authenticationState', () => {
    const authenticationStateSubscribable =
      createMockStatefulRemoteSubscribable(
        'fully_authenticated',
      ) as Extension['authenticationState'];

    const {value} = mount.hook(useAuthenticationState, {
      extensionApi: {
        extension: {
          target: 'customer-account.order-status.block.render' as const,
        },
        authenticationState: authenticationStateSubscribable,
      },
    });
    expect(value).toBeDefined();
    expect(value).toBe('fully_authenticated');
  });
});
