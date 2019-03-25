import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ThemeService {
  constructor(private http: HttpClient) { }

  getThemes() {
    return this.http.get('/api/themes/');
  }

  getThemesByPage(page: number) {
    return this.http.get('/api/themes/?page=' + page);
  }

  getTheme(id: number) {
    return this.http.get('/api/themes/' + id);
  }

  getImage(id: number): Observable<Blob> {
    return this.http.get('api/themes/' + id + '/image', {responseType: 'blob'});
  }

  searchTheme(name: string) {
    return this.http.get('/api/themes/search/' + name);
  }

}
