import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter-form',
  templateUrl: './product-filter-form.component.html',
  styleUrls: ['./product-filter-form.component.scss']
})
export class ProductFilterFormComponent implements OnInit {

  formModel = {
    text1: 'initial',
    select1: '1'
  }
  constructor() { }

  ngOnInit() {
  }

  save(form) {
   if(form.valid) {
     console.log(this.formModel)
   } else {
     alert('popraw błendy')
   }
  }

}
