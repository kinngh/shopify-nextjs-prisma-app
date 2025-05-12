/**
 * A simple isEqual function that can be used to compare two style objects that's
 * good enough for our use case on the style builder.
 */
export function isEqual<
  T =
    | Record<string, any>
    | any[]
    | number
    | boolean
    | string
    | null
    | undefined,
>(first: T, second: T): boolean {
  if (Object.is(first, second)) {
    return true;
  }

  if (typeof first === 'object' && typeof second === 'object') {
    if (Array.isArray(first) && Array.isArray(second)) {
      if (first.length === second.length) {
        return first.every((value: any, index: number) =>
          isEqual(value, second[index]),
        );
      }
    } else {
      const firstEntries = Object.entries(first!);
      const secondEntries = Object.entries(second!);
      if (firstEntries.length === secondEntries.length) {
        return firstEntries.every(([key]) =>
          isEqual(
            (first as Record<string, any>)[key],
            (second as Record<string, any>)[key],
          ),
        );
      }
    }
  }

  return false;
}
