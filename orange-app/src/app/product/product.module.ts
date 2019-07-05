import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductReactiveFilterFormComponent } from './product-reactive-filter-form/product-reactive-filter-form.component';
import { ProductFilterFormComponent } from './product-filter-form/product-filter-form.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductItemComponent,
    ProductFilterComponent,
    ProductFilterFormComponent,
    ProductReactiveFilterFormComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
