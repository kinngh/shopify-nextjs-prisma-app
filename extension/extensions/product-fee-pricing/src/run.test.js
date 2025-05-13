import { describe, it, expect } from 'vitest';
import { run } from './run';

/**
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

describe('cart transform function', () => {
  it('returns no operations', () => {
    const result = run({});
    const expected = /** @type {FunctionRunResult} */ ({ operations: [] });

    expect(result).toEqual(expected);
  });
});