import { Session } from './session.model';
import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {User} from './user.model';

@Injectable()
export class StorageService{

  private currentUser: User = null;

  constructor(private router: Router) {}

  setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  removeCurrentSession(): void {
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return (this.currentUser != null) ? true : false;
  }

  logout(): void{
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }
}
