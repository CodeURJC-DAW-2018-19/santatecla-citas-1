import { Quote } from '../quote/quote.model';

export interface Theme {
  id: number;
  name: string;
  quotes: Quote[];
}
