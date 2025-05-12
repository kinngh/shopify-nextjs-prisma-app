export interface CustomerApi {
  customer: CustomerApiContent;
}

export interface CustomerApiContent {
  /**
   * The unique identifier for the customer
   */
  id: number;
}
