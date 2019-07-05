import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../core/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.products$;
  }

  ngOnInit() {
  }

  handleDelete(id) {
   console.log(id)
  }

  handleFilter(filter) {
    this.productService.refreshProducts(filter);
  }

}
