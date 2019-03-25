import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginObject } from './login.object';
import { Session } from './session.model';

const basePath = 'https://localhost:8080/api/user';

@Injectable()
export class LoginService {

  auth: string;

  constructor(private http: HttpClient) {}

  /*login(loginObj: LoginObject): Observable<LoginObject>{
    return this.http.post<LoginObject>(this.basePath + 'login', loginObj);
  }

  logout() {
    return this.http.post(this.basePath + 'logout', {});
  }*/

  logIn(user: string, pass: string) {
    this.auth = 'Basic ' + utf8_to_b64(user + ':' + pass);

    const headers = new HttpHeaders({
        Authorization: this.auth,
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Cache-Control': 'no-cache'
    });

    return this.http.get(basePath + '/login', { withCredentials: true, headers });
  }

  logOut() {
    return this.http.get(URL + '/logout', { withCredentials: true });
  }

}

function utf8_to_b64(str) {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }),
  );
}
