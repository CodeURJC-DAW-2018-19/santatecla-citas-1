import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class QuoteService {
  constructor(private http: HttpClient) { }

  getQuotes() {
    return this.http.get('/api/quotes/');
  }

  getQuote(id: number) {
    return this.http.get('/api/quotes/' + id);
  }
}
