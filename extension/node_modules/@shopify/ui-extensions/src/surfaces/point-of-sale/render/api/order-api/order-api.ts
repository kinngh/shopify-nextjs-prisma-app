/**
 * Interface to access the order
 */
export interface OrderApi {
  order: OrderApiContent;
}

/**
 * Interface for Order details
 */
export interface OrderApiContent {
  /**
   * The unique identifier for the order
   */
  id: number;

  /**
   * The name of the order
   */
  name: string;

  /**
   * The unique identifier of the customer associated with the order
   */
  customerId?: number;
}
