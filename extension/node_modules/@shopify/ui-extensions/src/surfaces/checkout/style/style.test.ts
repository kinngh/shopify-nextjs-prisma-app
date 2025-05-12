import {Style} from './style';

describe('Style', () => {
  describe('default()', () => {
    it('returns a conditional value with a default', () => {
      const defaultValue = Style.default('default');

      expect(defaultValue).toStrictEqual({
        default: 'default',
        conditionals: [],
      });
    });

    it('returns a conditional value with a default and a condition when chained with when()', () => {
      const defaultValue = Style.default('default');

      expect(defaultValue.when({hover: true}, 'value')).toStrictEqual({
        default: 'default',
        conditionals: [{value: 'value', conditions: {hover: true}}],
      });
    });

    it('returns a memoized value', () => {
      expect(Style.default('default')).toBe(Style.default('default'));
    });

    it('returns a new value when passed value is different', () => {
      expect(Style.default('default1')).not.toBe(Style.default('default2'));
    });
  });

  describe('when()', () => {
    it('returns a conditional value with no default', () => {
      const conditionalValue = Style.when({hover: true}, 'value');

      expect(conditionalValue).toStrictEqual({
        conditionals: [{value: 'value', conditions: {hover: true}}],
      });
    });

    it('returns a conditional value with a composed condition', () => {
      const conditionalValue = Style.default('default').when(
        {hover: true, viewportInlineSize: {min: 'small'}},
        'value1',
      );

      expect(conditionalValue).toStrictEqual({
        default: 'default',
        conditionals: [
          {
            value: 'value1',
            conditions: {hover: true, viewportInlineSize: {min: 'small'}},
          },
        ],
      });
    });

    it('returns a memoized value', () => {
      expect(Style.when({hover: true}, 'value')).toBe(
        Style.when({hover: true}, 'value'),
      );
    });

    it('returns a new value when passed value is different', () => {
      expect(Style.when({hover: true}, 'value1')).not.toBe(
        Style.when({hover: true}, 'value2'),
      );
    });
  });

  describe('when().when()', () => {
    it('returns a conditional value with default and two conditions', () => {
      const conditionalValue = Style.default('default')
        .when({hover: true}, 'value1')
        .when({viewportInlineSize: {min: 'small'}}, 'value2');

      expect(conditionalValue).toStrictEqual({
        default: 'default',
        conditionals: [
          {value: 'value1', conditions: {hover: true}},
          {value: 'value2', conditions: {viewportInlineSize: {min: 'small'}}},
        ],
      });
    });

    it('returns a memoized value', () => {
      expect(
        Style.when({hover: true}, 'value 1')
          .when({focus: true}, 'value 2')
          .when({viewportInlineSize: {min: 'small'}}, 'value 3'),
      ).toBe(
        Style.when({hover: true}, 'value 1')
          .when({focus: true}, 'value 2')
          .when({viewportInlineSize: {min: 'small'}}, 'value 3'),
      );
    });

    it('returns a memoized value after calling with a different value once', () => {
      const firstValue = Style.when({hover: true}, 'value1').when(
        {focus: true},
        'value2',
      );

      Style.when({hover: true}, 'value1').when({focus: true}, 'value3');

      const thirdValue = Style.when({hover: true}, 'value1').when(
        {focus: true},
        'value2',
      );

      expect(firstValue).toBe(thirdValue);
    });
  });

  describe('prototype chain', () => {
    it('returns a different when method on the prototype chain for each instance', () => {
      const style1 = Style.when({hover: true}, 'value 1').when(
        {viewportInlineSize: {min: 'small'}},
        'value 2',
      );
      const style2 = Style.when({focus: true}, 'value 3').when(
        {viewportInlineSize: {min: 'small'}},
        'value 4',
      );

      expect(Object.getPrototypeOf(style1)).not.toBe(
        Object.getPrototypeOf(style2),
      );
    });
  });
});
