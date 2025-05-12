import {useNote} from '..';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useNote', () => {
  it('returns the current order note', async () => {
    const note = 'the note';
    const extensionApi = {
      extension: {
        target: 'customer-account.order-status.block.render' as const,
      },
      note: createMockStatefulRemoteSubscribable(note),
    };

    const {value} = mount.hook(() => useNote(), {extensionApi});

    expect(value).toBe(note);
  });
});
