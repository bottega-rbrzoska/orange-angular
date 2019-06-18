import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {
  private showTest = false;
  private showTestSubject = new BehaviorSubject<boolean>(this.showTest);

  showTestObservable = new Observable((observer) => {
    setTimeout(() => observer.next(true), 1000);
    setTimeout(() => observer.next(false), 2000);
    setTimeout(() => observer.next(true), 3000);
  });

  get showTest$() {
    return this.showTestSubject.asObservable();
  }
  constructor( private http: HttpClient ) {
  }
  getShowTest() {
    return this.showTest;
  }

  setShowTest(val) {
    console.log(val);
    this.showTest = val;
  }

  pushNewShowTest(val: boolean) {
    this.showTestSubject.next(val);
  }

}
