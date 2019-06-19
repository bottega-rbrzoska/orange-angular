import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Output() sendMessage = new EventEmitter();
  contactForm: FormGroup;
  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.maxLength(30)])
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.contactForm.valid) {
      this.sendMessage.emit(this.contactForm.value);
      this.contactForm.reset()
    }
  }

}
