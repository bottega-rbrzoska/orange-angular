import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-reactive-filter-form',
  templateUrl: './product-reactive-filter-form.component.html',
  styleUrls: ['./product-reactive-filter-form.component.scss']
})
export class ProductReactiveFilterFormComponent implements OnInit {

  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      text1: new FormControl('initial', [Validators.required, Validators.maxLength(10), this.badWordsValidator('dupa')]),
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

  private badWordsValidator(badWord: string) : ValidatorFn {
    return (control: AbstractControl) => control.value.includes(badWord) ? { badWord: true } : null;
  }

  ngOnInit() {
  }

  search() {
    this.myForm.reset()
    console.log(this.myForm.getRawValue())
  }
}
