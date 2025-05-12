import type {RemoteSubscribable} from '@remote-ui/async-subscription';
import type {
  Address,
  Cart,
  CartUpdateInput,
  Customer,
  CustomSale,
  SetLineItemDiscountInput,
  SetLineItemPropertiesInput,
} from '../../../types/cart';

/**
 * Access and modify the merchant’s current cart.
 */
export interface CartApi {
  cart: CartApiContent;
}

export type CartDiscountType = 'Percentage' | 'FixedAmount' | 'Code';

export type LineItemDiscountType = 'Percentage' | 'FixedAmount';

export interface CartApiContent {
  /** Provides a subscription to POS cart changes.
   * Provides an initial value and a callback to subscribe to value changes. Currently supports only one subscription.
   * You can utilize `makeStatefulSubscribable` on a `RemoteSubscribable` to implement multiple subscriptions.
   * Using `makeStatefulSubscribable` or the corresponding hooks counts as a subscription.
   */
  subscribable: RemoteSubscribable<Cart>;

  /** Bulk update the cart
   * @param cartState the cart state to set
   * @returns the updated cart
   */
  bulkCartUpdate(cartState: CartUpdateInput): Promise<Cart>;

  /** Apply a cart level discount
   * @param type the type of discount applied (example: 'Percentage')
   * @param title the title attributed with the discount
   * @param amount the percentage or fixed monetary amount deducted with the discount. Pass in `undefined` if using discount codes.
   */
  applyCartDiscount(
    type: CartDiscountType,
    title: string,
    amount?: string,
  ): Promise<void>;

  /** Add a code discount to the cart
   * @param code the code for the discount to add to the cart
   */
  addCartCodeDiscount(code: string): Promise<void>;

  /** Remove the cart discount */
  removeCartDiscount(): Promise<void>;

  /** Remove all cart and line item discounts
   * @param disableAutomaticDiscounts Whether or not automatic discounts should be enabled after removing the discounts.
   */
  removeAllDiscounts(disableAutomaticDiscounts: boolean): Promise<void>;

  /** Clear the cart */
  clearCart(): Promise<void>;

  /** Set the customer in the cart
   * @param customer the customer object to add to the cart
   */
  setCustomer(customer: Customer): Promise<void>;

  /** Remove the current customer from the cart */
  removeCustomer(): Promise<void>;

  /** Add a custom sale to the cart
   * @param customSale the custom sale object to add to the cart
   * @returns {string} the uuid of the line item added
   */
  addCustomSale(customSale: CustomSale): Promise<string>;

  /** Add a line item by variant ID to the cart
   * @param variantId the product variant's numeric ID to add to the cart
   * @param quantity the number of this variant to add to the cart
   * @returns {string} the uuid of the line item added
   */
  addLineItem(variantId: number, quantity: number): Promise<string>;

  /** Remove the line item at this uuid from the cart
   * @param uuid the uuid of the line item that should be removed
   */
  removeLineItem(uuid: string): Promise<void>;

  /** Adds custom properties to the cart
   * @param properties the custom key to value object to attribute to the cart
   */
  addCartProperties(properties: Record<string, string>): Promise<void>;

  /** Removes the specified cart properties
   * @param keys the collection of keys to be removed from the cart properties
   */
  removeCartProperties(keys: string[]): Promise<void>;

  /** Adds custom properties to the specified line item
   * @param uuid the uuid of the line item to which the properties should be stringd
   * @param properties the custom key to value object to attribute to the line item
   */
  addLineItemProperties(
    uuid: string,
    properties: Record<string, string>,
  ): Promise<void>;

  /** Adds custom properties to multiple line items at the same time.
   * @param lineItemProperties the collection of custom line item properties to apply to their respective line items.
   */
  bulkAddLineItemProperties(
    lineItemProperties: SetLineItemPropertiesInput[],
  ): Promise<void>;

  /** Removes the specified line item properties
   * @param uuid the uuid of the line item to which the properties should be removed
   * @param keys the collection of keys to be removed from the line item properties
   */
  removeLineItemProperties(uuid: string, keys: string[]): Promise<void>;

  /** Add a discount on a line item to the cart
   * @param uuid the uuid of the line item that should receive a discount
   * @param type the type of discount applied (example: 'Percentage')
   * @param title the title attributed with the discount
   * @param amount the percentage or fixed monetary amount deducted with the discout
   */
  setLineItemDiscount(
    uuid: string,
    type: LineItemDiscountType,
    title: string,
    amount: string,
  ): Promise<void>;

  /** Set line item discounts to multiple line items at the same time.
   * @param lineItemDiscounts a map of discounts to add. They key is the uuid of the line item you want to add the discount to. The value is the discount input.
   */
  bulkSetLineItemDiscounts(
    lineItemDiscounts: SetLineItemDiscountInput[],
  ): Promise<void>;

  /** Sets an attributed staff to all line items in the cart.
   * @param staffId the ID of the staff. Providing undefined will clear the attributed staff from all line items.
   */
  setAttributedStaff(staffId: number | undefined): Promise<void>;

  /** Sets an attributed staff to a specific line items in the cart.
   * @param staffId the ID of the staff. Providing undefined will clear the attributed staff on the line item.
   * @param lineItemUuid the UUID of the line item.
   */
  setAttributedStaffToLineItem(
    staffId: number | undefined,
    lineItemUuid: string,
  ): Promise<void>;

  /** Remove all discounts from a line item
   * @param uuid the uuid of the line item whose discounts should be removed
   */
  removeLineItemDiscount(uuid: string): Promise<void>;

  /** Add an address to the customer (Customer must be present)
   * @param address the address object to add to the customer in cart
   */
  addAddress(address: Address): Promise<void>;

  /**
   * Delete an address from the customer (Customer must be present)
   * @param addressId the address ID to delete
   */
  deleteAddress(addressId: number): Promise<void>;

  /** Update the default address for the customer (Customer must be present)
   * @param addressId the address ID to set as the default address
   */
  updateDefaultAddress(addressId: number): Promise<void>;
}
