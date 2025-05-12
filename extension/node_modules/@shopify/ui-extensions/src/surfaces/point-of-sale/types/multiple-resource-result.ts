/**
 * The result of a fetch function where the input is multiple IDs.
 * This object contains the resources that were found, as well as an array of IDs specifying which IDs, if any, did not correspond to a resource.
 */
export interface MultipleResourceResult<T> {
  /**
   * The resources that were fetched using the IDs provided.
   */
  fetchedResources: T[];
  /**
   * The IDs for which a resource was not found.
   */
  idsForResourcesNotFound: number[];
}
