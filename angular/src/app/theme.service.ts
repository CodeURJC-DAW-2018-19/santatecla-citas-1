import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ThemesService {

  constructor(private http: HttpClient){

  }

  getThemes(){
    this.http.get("http://localhost:8443/api/themes").map(
      response => {
        let themes = response.json();
        return themes;
      }
    )
  }

  getTheme(id: number){
    this.http.get("http://localhost:8443/api/themes/"+id).map(
      response => {
        let themes = response.json();
        return themes;
      }
    )
  }
}
