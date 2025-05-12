import type {Money} from './money';

export interface ShippingLine {
  handle?: string;
  price: Money;
  title?: string;
}

export interface CalculatedShippingLine extends ShippingLine {
  type: 'Calculated';
  methodType: 'SHIPPING' | 'RETAIL';
}

export interface CustomShippingLine extends ShippingLine {
  type: 'Custom';
}
