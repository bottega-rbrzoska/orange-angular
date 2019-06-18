import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>Counter: {{myCounter | currency}}</div>
  <input #myInput (keyup)="keyupHandler(myInput.value)">
  {{myInput.value | uppercase}}
  <div>Updated: {{today | date:'medium'}}</div>
    <button class="btn btn-danger" (click)="incr()">Incr</button>
  `
})
export class TestComponent implements OnInit {
  @Output() isIncremented = new EventEmitter();

  @Input() myCounter = 0;
  today = new Date();
  private _testNumVar: number | string;
  constructor() {
    console.log(this.myCounter)
  }

  ngOnInit() {
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

}


