interface Metafield {
  description?: string;
  id: string;
  namespace: string;
  key: string;
  value: string;
  type: string;
}

export enum DiscountClass {
  Product = 'PRODUCT',
  Order = 'ORDER',
  Shipping = 'SHIPPING',
}

interface Discount {
  /**
   * the discount's gid
   */
  id: string;
}

/**
 * The object that exposes the validation with its settings.
 */
export interface DiscountFunctionSettingsData {
  id: Discount;
  metafields: Metafield[];
}
