import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-reactive-filter-form',
  templateUrl: './product-reactive-filter-form.component.html',
  styleUrls: ['./product-reactive-filter-form.component.scss']
})
export class ProductReactiveFilterFormComponent implements OnInit {

  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      text1: new FormControl('initial', [Validators.required, Validators.maxLength(10)]),
      select1: new FormControl('1')
    });

    this.myForm.controls.text1.valueChanges.subscribe(textValue => {
      if(textValue.includes('dupa')) {
        this.myForm.controls.select1.disable()
      } else {
        this.myForm.controls.select1.enable()
      }
    });
  }

  ngOnInit() {
  }

  search() {
    console.log(this.myForm.getRawValue())
  }
}
