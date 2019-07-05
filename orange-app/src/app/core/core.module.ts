import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ContactService } from './contact.service';
import { ProductService } from './product.service';
import { TestService } from './test.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    ContactService,
    ProductService,
    TestService
  ]
})
export class CoreModule { }
