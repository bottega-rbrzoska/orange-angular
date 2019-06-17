import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr = [
    {id: 1, name: 'jeden'},
    {id: 2, name: 'dwa'}
  ]
  title = 'orange-app';
  isActive = true;
  initialValue = 1;
  testIncrementedHandler(counterValue) {
    alert('Counter: ' + counterValue)
  }
}
