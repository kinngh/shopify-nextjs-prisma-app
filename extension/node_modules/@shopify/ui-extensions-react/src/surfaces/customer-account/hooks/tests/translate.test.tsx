import React from 'react';

import {useTranslate} from '..';

import {mount} from './mount';

describe('useTranslate', () => {
  it('returns string translation', async () => {
    const simpleTranslation = 'This is a simple string translation';
    const translateInSandbox = jest.fn(() => simpleTranslation);

    const extensionApi = {
      i18n: {
        translate: translateInSandbox,
      },
    };

    const {value} = mount.hook(() => useTranslate(), {extensionApi});
    const translate = value;

    expect(translate('exampleKey')).toStrictEqual(simpleTranslation);
  });

  it('returns array with strings, numbers, and components', async () => {
    function Name() {
      return <p>Fred</p>;
    }

    const simpleTranslation = [
      'Hello, ',
      // eslint-disable-next-line react/jsx-key
      <Name />,
      ' . You are applicant #',
      1,
    ];
    const translateInSandbox = jest.fn(() => simpleTranslation);

    const extensionApi = {
      i18n: {
        translate: translateInSandbox,
      },
    };

    const {value} = mount.hook(() => useTranslate(), {extensionApi});
    const translate = value;

    // Expect that a the same array is returned, with any valid components wrapped in a React.Fragment
    expect(translate('exampleKey')).toMatchObject([
      'Hello, ',
      expect.objectContaining({type: Name}),
      ' . You are applicant #',
      1,
    ]);
  });

  it('returns array with an element that is not a string, number, or component', async () => {
    const simpleTranslation = ['Hello, ', undefined, ' .'];
    const translateInSandbox = jest.fn(() => simpleTranslation);

    const extensionApi = {
      i18n: {
        translate: translateInSandbox,
      },
    };

    const {value} = mount.hook(() => useTranslate(), {extensionApi});
    const translate = value;

    expect(translate('exampleKey')).toStrictEqual(simpleTranslation);
  });
});
