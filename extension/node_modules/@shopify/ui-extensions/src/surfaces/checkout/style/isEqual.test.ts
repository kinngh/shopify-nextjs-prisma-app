import {isEqual} from './isEqual';

describe('isEqual', () => {
  it('returns true when two strings are equal', () => {
    expect(isEqual('a', 'a')).toBe(true);
  });

  it('returns true when two numbers are equal', () => {
    expect(isEqual(1, 1)).toBe(true);
  });

  it('returns true when two booleans are equal', () => {
    expect(isEqual(true, true)).toBe(true);
  });

  it('returns true when two objects are equal', () => {
    expect(
      isEqual(
        {
          string: 'string',
          number: 1,
          boolean: true,
        },
        {
          string: 'string',
          number: 1,
          boolean: true,
        },
      ),
    ).toBe(true);
  });

  it('returns true when two nested objects are equal', () => {
    expect(
      isEqual(
        {
          string: 'string',
          number: 1,
          boolean: true,
          object: {
            foo: 'a',
            bar: 'b',
          },
        },
        {
          object: {
            foo: 'a',
            bar: 'b',
          },
          number: 1,
          string: 'string',
          boolean: true,
        },
      ),
    ).toBe(true);
  });

  it('returns true when two arrays are equal', () => {
    expect(isEqual([1, 'a', true], [1, 'a', true])).toBe(true);
  });

  it('returns true when two nested arrays are equal', () => {
    expect(
      isEqual([1, [2, 'b', false], 'a', true], [1, [2, 'b', false], 'a', true]),
    ).toBe(true);
  });
});
