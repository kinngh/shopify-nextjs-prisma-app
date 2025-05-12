import {useNote} from '../note';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useNote', () => {
  it('returns the current order note', async () => {
    const note = 'the note';
    const extensionApi = {
      note: createMockStatefulRemoteSubscribable(note),
    };

    const {value} = mount.hook(() => useNote(), {extensionApi});

    expect(value).toBe(note);
  });
});
