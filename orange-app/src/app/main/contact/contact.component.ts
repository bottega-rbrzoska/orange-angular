import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactService } from '../../core/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild(ContactFormComponent, { static: true}) contactFormComponent:ContactFormComponent;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  handleSendMessage(msg) {
    this.contactService.sendMessage(msg)
      .subscribe(() => this.contactFormComponent.contactForm.reset(),
        (err) => alert('cos poszlo nie tak'));
  }

}
