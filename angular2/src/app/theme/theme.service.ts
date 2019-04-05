import { Text } from './theme.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theme } from './theme.model';

export interface Text {
  id?: number;
  text: string;
}

@Injectable()
export class ThemeService {
  constructor(private http: HttpClient) {}

  getThemes() {
    return this.http.get('/api/themes/');
  }

  getSize() {
    return this.http.get('/api/themes/size');
  }

  getThemesByPage(page: number) {
    return this.http.get('/api/themes/?page=' + page);
  }

  getTheme(id: number) {
    return this.http.get('/api/themes/' + id);
  }

  getImage(id: number): Observable<Blob> {
    return this.http.get('/api/themes/' + id + '/image', {responseType: 'blob'});
  }

  uploadImage(id: number, file: any) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post('/api/themes/' + id + '/image', formData);
  }

  searchTheme(name: string, page: number) {
    return this.http.get('/api/themes/search/' + name + '/?page=' + page);
  }

  saveTheme(theme: Theme): Observable<Theme> {
    const body = JSON.stringify(theme);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (!theme.id) {
      return this.http.post<Theme>('/api/themes/', body, { headers });
    } else {
      return this.http.put<Theme>('/api/themes/' + theme.id, body, { headers });
    }

  }

  removeTheme(theme: Theme): Observable<Theme> {
    return this.http.delete<Theme>('/api/themes/' + theme.id);
  }

  getPDF(id: number) {
    return this.http.get('/api/themes/' + id + '/PDF', {responseType: 'blob'});
  }

  addQuote(idT: number, idQ: number): Observable<Theme> {
    return this.http.post<Theme>('/api/themes/' + idT + '/quote/' + idQ, null);
  }

  addText(id: number, text: Text) {
    const formData = new FormData();

    formData.append('text', text.text);

    return this.http.post<Theme>('/api/themes/' + id + '/text/', formData);
  }

  removeQuote(theme: Theme, id: number) {
    return this.http.delete('/api/themes/' + theme.id + '/quote/' + id);
  }

  removeText(theme: Theme, id: number) {
    return this.http.delete('/api/themes/' + theme.id + '/text/' + id);
  }

}
