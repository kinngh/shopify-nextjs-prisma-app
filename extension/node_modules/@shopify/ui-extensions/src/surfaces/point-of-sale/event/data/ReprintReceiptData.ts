import {BaseTransactionComplete} from '../../types/base-transaction-complete';
import {LineItem} from '../../types/cart';

export interface ReprintReceiptData extends BaseTransactionComplete {
  transactionType: 'Reprint';
  lineItems: LineItem[];
}
