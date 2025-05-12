import {BaseData} from './BaseData';
import {Cart} from '../../api';

export interface CartUpdateEventData extends BaseData {
  cart: Cart;
}
