import { StorageService } from './login/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent {
  logged = this.userStorage.isAuthenticated();

  constructor(private userStorage: StorageService) {}

  logout() {
    this.userStorage.removeCurrentSession();
  }
}
