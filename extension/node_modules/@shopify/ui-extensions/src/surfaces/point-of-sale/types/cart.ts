import {CountryCode} from './country-code';
import {TaxLine} from './tax-line';

export interface Cart {
  subtotal: string;
  taxTotal: string;
  grandTotal: string;
  note?: string;
  cartDiscount?: Discount;
  cartDiscounts: Discount[];
  customer?: Customer;
  lineItems: LineItem[];
  properties: Record<string, string>;
}

export interface CartUpdateInput {
  note?: string;
  cartDiscount?: Discount;
  cartDiscounts: Discount[];
  customer?: Customer;
  lineItems: LineItem[];
  properties: Record<string, string>;
}

export interface Customer {
  id: number;
}

export interface LineItem {
  uuid: string;
  price?: number;
  quantity: number;
  title?: string;
  variantId?: number;
  productId?: number;
  discounts: Discount[];
  taxable: boolean;
  taxLines: TaxLine[];
  sku?: string;
  vendor?: string;
  properties: {[key: string]: string};
  isGiftCard: boolean;
  attributedUserId?: number;
}

export interface Discount {
  amount: number;
  discountDescription?: string;
  type?: string;
}

/**
 * Parameters for adding custom properties to a line item.
 */
export interface SetLineItemPropertiesInput {
  /**
   * The uuid belonging to the line item which should receive the custom properties.
   */
  lineItemUuid: string;
  /**
   * The custom properties to apply to the line item.
   */
  properties: Record<string, string>;
}

/**
 * Parameters for adding a line item discount.
 */
export interface SetLineItemDiscountInput {
  /**
   * The uuid belonging to the line item which should receive the discount.
   */
  lineItemUuid: string;
  /**
   * The discount to be applied to the line item.
   */
  lineItemDiscount: LineItemDiscount;
}

export interface LineItemDiscount {
  /**
   * The title of the line item discount.
   */
  title: string;
  /**
   * The discount type.
   */
  type: 'Percentage' | 'FixedAmount';
  /**
   * The percentage or fixed amount for the discount.
   */
  amount: string;
}

export interface CustomSale {
  quantity: number;
  title: string;
  price: string;
  taxable: boolean;
}

export interface Address {
  address1?: string;
  address2?: string;
  city?: string;
  company?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  province?: string;
  country?: string;
  zip?: string;
  name?: string;
  provinceCode?: string;
  countryCode?: CountryCode;
}
