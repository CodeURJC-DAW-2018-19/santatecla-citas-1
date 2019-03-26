import { LoginService } from './auth/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent {
  private logged = this.loginService.isLogged;

  constructor(private loginService: LoginService){}

  logout(){
    this.loginService.logOut();
  }
}
