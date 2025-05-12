import {mount} from './mount';
import {useNavigationCurrentEntry} from '..';
import {destroyAll} from '@quilted/react-testing';

describe('useNavigationCurrentEntry', () => {
  function createMock() {
    return {
      navigate: jest.fn(),
      currentEntry: {state: jest.fn(), url: 'extension:/'},
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      updateCurrentEntry: jest.fn(),
    };
  }

  it('returns the entry', () => {
    const mock = createMock();
    const {value} = mount.hook(useNavigationCurrentEntry, {
      extensionApi: {
        navigation: mock,
      },
    });

    expect(value).toStrictEqual(mock.currentEntry);
  });

  it('calls addEventListener', () => {
    const mock = createMock();
    mount.hook(useNavigationCurrentEntry, {
      extensionApi: {
        navigation: mock,
      },
    });

    expect(mock.addEventListener).toHaveBeenCalledWith(
      'currententrychange',
      expect.any(Function),
    );
  });

  it('calls removeEventListener on destroy', () => {
    const mock = createMock();
    mount.hook(useNavigationCurrentEntry, {
      extensionApi: {
        navigation: mock,
      },
    });

    destroyAll();

    expect(mock.removeEventListener).toHaveBeenCalledWith(
      'currententrychange',
      expect.any(Function),
    );
  });

  it('throws an error when its not a full page extension or order full page extension', async () => {
    const mock = {
      navigate: jest.fn(),
    };

    const runner = async () => {
      return mount.hook(useNavigationCurrentEntry, {
        extensionApi: {
          navigation: mock,
        },
      });
    };

    await expect(runner).rejects.toThrow(
      'useNavigationCurrentEntry must be used in an extension with the customer-account.page.render or customer-account.order.page.render target only',
    );
  });
});
