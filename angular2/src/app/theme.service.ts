import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ThemeService {
  constructor(private http: HttpClient) { }

  getThemes(){
    return this.http.get("http://localhost:8080/api/themes");
  }

  getTheme(id: number){
    return this.http.get("http://localhost:8080/api/themes/"+id);
  }
}
