import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, startWith, tap, withLatestFrom } from 'rxjs/operators';
import { combineLatest, concat, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: [ './product-filter.component.scss' ]
})
export class ProductFilterComponent implements OnInit {

  @ViewChild('textSearch', { static: true }) textSearch: ElementRef;
  @ViewChild('categorySelect', { static: true }) select: ElementRef;
  @Output() filter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    combineLatest(
      fromEvent(this.textSearch.nativeElement, 'keyup').pipe(map(e => e[ 'target' ].value), startWith('')),
      fromEvent(this.select.nativeElement, 'change').pipe(map(e => e[ 'target' ].value), startWith(''))
    ).pipe(
      debounceTime(400),
      map(([ text, category ]) => ({ text, category })),
      distinctUntilChanged()
    ).subscribe(val => this.filter.emit(val));
  }

}
