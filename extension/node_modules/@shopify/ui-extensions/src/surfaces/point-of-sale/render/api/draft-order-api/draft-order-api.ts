export interface DraftOrderApi {
  draftOrder: DraftOrderApiContent;
}

export interface DraftOrderApiContent {
  /**
   * The unique identifier for the draft order
   */
  id: number;

  /**
   * The name of the draft order
   */
  name: string;

  /**
   * The unique identifier of the customer associated with the draft order
   */
  customerId?: number;
}
