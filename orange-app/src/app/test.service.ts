import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class TestService {

  showTestSubject = new Subject<boolean>();
  private showTest = true;
  showTestObservable = new Observable((observer) => {
    setTimeout(() => observer.next(true), 1000);
    setTimeout(() => observer.next(false), 2000);
    setTimeout(() => observer.next(true), 3000);
  });
  constructor() {
  }
  getShowTest() {
    return this.showTest;
  }

  setShowTest(val) {
    console.log(val);
    this.showTest = val;
  }

}
