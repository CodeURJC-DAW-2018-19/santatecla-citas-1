import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from './quote.model';

@Injectable()
export class QuoteService {
  constructor(private http: HttpClient) { }

  getQuotes() {
    return this.http.get('/api/quotes/');
  }

  getQuotesByPage(page: number) {
    return this.http.get('/api/quotes/?page=' + page);
  }

  getQuote(id: number) {
    return this.http.get('/api/quotes/' + id);
  }

  searchQuote(name: string) {
    return this.http.get('/api/quotes/search/' + name);
  }

  saveQuote(quote: Quote): Observable<Quote> {
    const body = JSON.stringify(quote);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (!quote.id) {
      return this.http.post<Quote>('/api/quotes/', body, { headers });
    } else {
      return this.http.put<Quote>('/api/quotes/' + quote.id, body, { headers });
    }

  }

  removeQuote(quote: Quote): Observable<Quote> {
    return this.http.delete<Quote>('/api/quotes/' + quote.id);
  }

}
