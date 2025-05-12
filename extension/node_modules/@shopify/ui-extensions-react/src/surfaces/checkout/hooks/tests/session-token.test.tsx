import {useSessionToken} from '../session-token';

import {mount} from './mount';

describe('useSessionToken', () => {
  it('returns sessionToken from the api', () => {
    const mockGetSessionToken = {
      get: jest.fn(),
    };

    const {value} = mount.hook(() => useSessionToken(), {
      extensionApi: {
        sessionToken: mockGetSessionToken,
      },
    });

    expect(value).toMatchObject(mockGetSessionToken);
  });
});
