import {mount} from './mount';
import {useNavigation} from '..';

describe('useNavigation', () => {
  it('returns the navigation', () => {
    const mock = {
      navigate: jest.fn(),
    };

    const {value} = mount.hook(useNavigation, {
      extensionApi: {
        navigation: mock,
      },
    });

    expect(value).toStrictEqual(mock);
  });
});
