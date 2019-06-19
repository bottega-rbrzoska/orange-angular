import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { share } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable()
export class TestService {
  private showTest = false;
  private showTestSubject;
  private testApiDataSubject = new BehaviorSubject<any[]>([]);

  showTestObservable = new Observable((observer) => {
    setTimeout(() => observer.next(true), 1000);
    setTimeout(() => observer.next(false), 2000);
    setTimeout(() => observer.next(true), 3000);
  });

  get showTest$() {
    return this.showTestSubject.asObservable();
  }
  constructor( private http: HttpClient ) {
    this.showTestSubject = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('test')) || false)
  }
  getShowTest() {
    return this.showTest;
  }

  getTestDataFromApi$() {
    return this.testApiDataSubject.asObservable();
  }

  refreshData() {
    this.http.get<{val: number}[]>(`${apiUrl}/test`).subscribe(data => this.testApiDataSubject.next(data))
  }

  setShowTest(val) {
    console.log(val);
    this.showTest = val;
  }

  pushNewShowTest(val: boolean) {
    this.showTestSubject.next(val);
    localStorage.setItem('test', val.toString())
  }

}
