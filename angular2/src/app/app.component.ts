import { LoginService } from './auth/login.service';
import { Component } from '@angular/core';
import { Tab } from './tab.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent {

  tabs: Tab[] = [];

  constructor(private loginService: LoginService) {}

  logout() {
    this.loginService.logOut();
  }

  addTab(type: string, id: number) {
    for (let t of this.tabs) {
      if ((t.type === type) && (t.id === id)) {
        return;
      }
    }
    this.tabs.push(new Tab(type, id));
  }

  removeTab(type: string, id: number) {
    this.tabs.forEach((item, index) => {
      if ((item.type === type) && (item.id === id)) {
        this.tabs.splice(index, 1);
      }
    });
  }

  getTabs() {
    return this.tabs;
  }

}
