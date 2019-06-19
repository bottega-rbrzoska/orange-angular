import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter-form',
  templateUrl: './product-filter-form.component.html',
  styleUrls: ['./product-filter-form.component.scss']
})
export class ProductFilterFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  save(form) {
    console.log(form)
  }

}
