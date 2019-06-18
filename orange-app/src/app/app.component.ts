import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr = [
    {id: 1, name: 'jeden'},
    {id: 2, name: 'dwa'}
  ];
  title = 'orange-app';
  isActive = true;
  initialValue = 1;
  showTestContainer: boolean;

  constructor(private testService: TestService) {
    this.showTestContainer = this.testService.getShowTest();
  }

  testIncrementedHandler(counterValue) {
    alert('Counter: ' + counterValue)
  }
}
