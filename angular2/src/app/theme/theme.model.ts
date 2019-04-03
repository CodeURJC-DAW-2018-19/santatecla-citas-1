import { Text } from './theme.service';
import { Quote } from '../quote/quote.model';

export interface Theme {
  id?: number;
  name: string;
  quotes: Quote[];
  texts: Text[];
}
