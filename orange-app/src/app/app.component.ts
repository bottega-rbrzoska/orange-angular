import { Component } from '@angular/core';
import { TestService } from './test.service';
import { filter, map, tap } from 'rxjs/operators';

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
    this.testService.showTestObservable
      .pipe(
        tap(val => console.log(val)),
        filter( val => val === false),
        map(val => val ? 'o k... true!!' : 'o w ch..... false!!')
      )
      .subscribe(console.info);
    console.log('subject subscription')
    this.testService.showTest$.subscribe(val => {
      this.showTestContainer = val;
      console.log('From subject:' + val);
    })
  }

  testIncrementedHandler(counterValue) {
    alert('Counter: ' + counterValue)
  }
}
