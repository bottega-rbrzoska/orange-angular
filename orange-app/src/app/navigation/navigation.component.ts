import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {
  }
  toggleShowTest(val) {
    this.testService.setShowTest(val)
  }
}
