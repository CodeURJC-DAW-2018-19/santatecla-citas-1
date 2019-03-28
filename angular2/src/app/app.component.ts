import { LoginService } from './auth/login.service';
import { Component } from '@angular/core';
import { TabService } from './tabs/tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent {

  constructor(private loginService: LoginService, private tabService: TabService) {}

  logout() {
    this.loginService.logOut();
  }

}
