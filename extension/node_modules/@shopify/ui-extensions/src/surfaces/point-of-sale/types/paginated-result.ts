/**
 * Contains a page of fetched results.
 */
export interface PaginatedResult<T> {
  /**
   * The items returned from the fetch.
   */
  items: T[];

  /**
   * The cursor of the last item. This can be used to fetch more results.
   * The format of this cursor may look different depending on if POS is fetching results from the remote API, or its local database. However, that should not affect its usage with the search functions.
   */
  lastCursor?: string;

  /**
   * Whether or not there is another page of results that can be fetched.
   */
  hasNextPage: boolean;
}
