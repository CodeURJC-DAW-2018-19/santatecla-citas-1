import { LoginService } from './auth/login.service';
import { Component } from '@angular/core';
import { TabService } from './tabs/tab.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent {

  constructor(
    private router: Router,
    private loginService: LoginService,
    protected tabService: TabService) {}

  logout() {
    this.loginService.logOut();
  }

}
