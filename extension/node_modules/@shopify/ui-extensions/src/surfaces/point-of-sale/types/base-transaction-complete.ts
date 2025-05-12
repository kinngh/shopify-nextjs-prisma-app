import type {Customer, Discount} from './cart';
import type {Money} from './money';
import type {Payment} from './payment';
import type {ShippingLine} from './shipping-line';
import type {TaxLine} from './tax-line';
import type {TransactionType} from './transaction-type';

export interface BaseTransactionComplete {
  transactionType: TransactionType;
  orderId?: number;
  customer?: Customer;
  discounts?: Discount[];
  taxTotal: Money;
  subtotal: Money;
  grandTotal: Money;
  paymentMethods: Payment[];
  balanceDue: Money;
  shippingLines?: ShippingLine[];
  taxLines?: TaxLine[];
}
