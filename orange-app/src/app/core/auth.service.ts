import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject(false);
  get isLoggedIn$() {
    return this.isLoggedInSubject.asObservable();
  }
  get isLoggedIn() {
    return this.isLoggedInSubject.getValue();
  }
  constructor() { }

  logIn() {
    //tu sie dzieje całe logowanie i kontakt z serwerem autoryzacyjnym
    this.isLoggedInSubject.next(true);
  }

  logOut() {
    //tu sie dzieje całe wylogowanie i kontakt z serwerem autoryzacyjnym
    this.isLoggedInSubject.next(false);
  }
}
