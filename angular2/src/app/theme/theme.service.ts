import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ThemeService {
  constructor(private http: HttpClient) { }

  getThemes() {
    return this.http.get('/api/themes/');
  }

  getTheme(id: number) {
    return this.http.get('/api/themes/' + id);
  }
}
