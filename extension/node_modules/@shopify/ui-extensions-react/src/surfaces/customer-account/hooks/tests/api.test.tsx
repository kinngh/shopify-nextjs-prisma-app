import {useApi} from '..';

import {mount} from './mount';

describe('useApi', () => {
  it('returns api', async () => {
    const extensionApi = {
      extension: {
        target: 'customer-account.order-status.block.render' as const,
      },
    };
    const {value} = mount.hook(
      () => useApi<'customer-account.order-status.block.render'>(),
      {
        extensionApi,
      },
    );

    expect(value).toMatchObject(extensionApi);
  });

  it('throws when not run inside a UI extension', async () => {
    const runner = async () => {
      return mount.hook(() => useApi());
    };

    await expect(runner).rejects.toThrow(
      'You can only call this hook when running as a customer account UI extension.',
    );
  });
});
