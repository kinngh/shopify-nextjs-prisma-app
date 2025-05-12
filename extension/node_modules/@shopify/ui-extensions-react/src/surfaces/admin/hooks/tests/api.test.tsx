import {useApi} from '../api';

import {mount} from './mount';

describe('useApi', () => {
  it('returns api', async () => {
    const extensionApi = {
      extension: {target: 'Playground' as const},
    };
    const {value} = mount.hook(() => useApi<'Playground'>(), {
      extensionApi,
    });

    expect(value).toMatchObject(extensionApi);
  });

  it('throws when api not provided', async () => {
    const runner = async () => {
      return mount.hook(() => useApi());
    };
    await expect(runner).rejects.toThrow('No extension api found.');
  });
});
