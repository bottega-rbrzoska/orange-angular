import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orange-app';
  initialValue = 1;
  testIncrementedHandler(counterValue) {
    alert('Counter: ' + counterValue)
  }
}
