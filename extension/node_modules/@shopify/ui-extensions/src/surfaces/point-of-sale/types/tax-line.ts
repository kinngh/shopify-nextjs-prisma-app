import type {Money} from './money';

export interface TaxLine {
  title: string;
  price: Money;
  rate: number;
  uuid?: string;
  rateRange?: {min: number; max: number};
  enabled?: boolean;
}
