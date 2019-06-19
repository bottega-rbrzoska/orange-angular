import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { TestDirective } from './test.directive';
import { ProductItemComponent } from './product-item/product-item.component';
import { TestService } from './test.service';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductFilterFormComponent } from './product-filter-form/product-filter-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductReactiveFilterFormComponent } from './product-reactive-filter-form/product-reactive-filter-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactService } from './contact.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ContactComponent,
    ProductsListComponent,
    PageNotFoundComponent,
    TestComponent,
    TestDirective,
    ProductItemComponent,
    ProductFilterComponent,
    ProductFilterFormComponent,
    ProductReactiveFilterFormComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [TestService, ProductService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
