import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TestService } from '../test.service';
import { fromEvent } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('testCheckbox', {static: true}) checkbox: ElementRef<any>;
  constructor(private testService: TestService) {
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
