import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HistogramService {

  constructor(private http: HttpClient) {}

  getHistogram(): any {
    return this.http.get('/api/histogram');
  }

}
