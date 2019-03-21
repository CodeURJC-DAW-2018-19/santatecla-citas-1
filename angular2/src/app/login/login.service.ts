import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginObject } from './login.object';
import { Session } from './session.model';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  private basePath = 'https://localhost:8080/api/user/login';

  login(loginObj: LoginObject): Observable<LoginObject>{
    return this.http.post<LoginObject>(this.basePath, loginObj);
  }

  logout() {
    return this.http.post(this.basePath, {});
  }
}
