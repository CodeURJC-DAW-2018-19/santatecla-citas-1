import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class QuoteService {
  constructor(private http: HttpClient) { }

  getQuotes() {
    return [
      { name: 'Elem1', check: true },
      { name: 'Elem2', check: true },
      { name: 'Elem3', check: false }
    ];
  }
}
