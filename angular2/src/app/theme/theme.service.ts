import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ThemeService {
  constructor(private http: HttpClient) { }

  getThemes() {
    return this.http.get('https://localhost:8080/api/themes/');
  }

  getTheme(id: number) {
    return this.http.get('https://localhost:8080/api/themes/' + id);
  }
}
