import { LoginService } from './auth/login.service';
import { Component } from '@angular/core';
import { TabService } from './tabs/tab.service';

import { Router } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-root',
  providers: [LoginService, HttpClient, TabService],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent {

  constructor(
    private router: Router,
    private loginService: LoginService,
    public tabService: TabService) {}

  logout() {
    this.loginService.logOut();
  }

}
