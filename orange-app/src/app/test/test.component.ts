import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestService } from '../core/test.service';

@Component({
  selector: 'app-test',
  template: `<div>Counter: {{myCounter | currency}}</div>
  <input #myInput (keyup)="keyupHandler(myInput.value)">
  {{myInput.value | uppercase}}
  {{testData$ | async | json}}
  <div>Updated: {{today | date:'medium'}}</div>
    <button class="btn btn-danger" (click)="incr()">Incr</button>
  `
})
export class TestComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  testData$;

  @Output() isIncremented = new EventEmitter();

  @Input() myCounter = 0;
  today = new Date();
  private _testNumVar: number | string;
  constructor(private testService: TestService) {
    this.testData$ = this.testService.getTestDataFromApi$();
    this.testService.refreshData();
    this.subscription = testService.showTest$.subscribe(() => console.log('log from test subscription'))
    console.log(this.myCounter)
  }

  ngOnInit() {
    console.log(this.myCounter)
  }
  myLog(val) {
    console.log(this.myCounter)
  }

  incr() {
    this.myCounter++;
    this.today = new Date();
    this.isIncremented.emit(this.myCounter)
  }

  keyupHandler(ev) {
    console.log(ev)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}


