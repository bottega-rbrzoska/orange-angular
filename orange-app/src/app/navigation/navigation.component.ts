import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TestService } from '../test.service';
import { fromEvent, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  @ViewChild('testCheckbox', {static: true}) checkbox: ElementRef<any>;
  constructor(private testService: TestService, private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  login() {
    this.authService.logIn();
  }
  logout() {
    this.authService.logOut();
  }
  ngOnInit() {
    this.testService.showTest$
      .pipe(take(1))
      .subscribe(checked => this.checkbox.nativeElement.checked = checked);


    fromEvent(this.checkbox.nativeElement, 'change')
      .pipe(
        map((ev: any) => ev.target.checked)
      )
      .subscribe(checked => this.testService.pushNewShowTest(checked))
  }
}
