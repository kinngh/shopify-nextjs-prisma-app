import {useSessionToken} from '..';

import {mount} from './mount';

describe('useSessionToken', () => {
  it('returns sessionToken from the api', () => {
    const mockGetSessionToken = {
      get: jest.fn(),
    };

    const {value} = mount.hook(() => useSessionToken(), {
      extensionApi: {
        extension: {
          target: 'customer-account.order-status.block.render' as const,
        },
        sessionToken: mockGetSessionToken,
      },
    });

    expect(value).toMatchObject(mockGetSessionToken);
  });
});
