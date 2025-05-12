import {useApi} from '../api';

import {mount} from './mount';

describe('useApi', () => {
  it('returns api', async () => {
    const extensionApi = {
      extension: {target: 'purchase.checkout.block.render' as const},
    };
    const {value} = mount.hook(
      () => useApi<'purchase.checkout.block.render'>(),
      {
        extensionApi,
      },
    );

    expect(value).toMatchObject(extensionApi);
  });

  it('throws when not run inside a checkout UI extension', async () => {
    const runner = async () => {
      return mount.hook(() => useApi());
    };

    await expect(runner).rejects.toThrow(
      'You can only call this hook when running as a checkout UI extension.',
    );
  });
});
