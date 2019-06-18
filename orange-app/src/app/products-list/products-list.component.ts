import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
 products: Product[] = [];
  constructor( private productService: ProductService) {
    this.subscription = this.productService.products$.subscribe( prods =>  this.products = prods);
  }

  ngOnInit() {
  }

  handleDelete(id) {
   console.log(id)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
