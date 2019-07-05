import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../core/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  interval;
  randomProducts: Product[] = [];
  constructor(private productService: ProductService) {
    this.productService.getRandomProducts().subscribe(prods => this.randomProducts = prods)

    this.interval = setInterval(() => {
      this.productService.getRandomProducts().subscribe(prods => this.randomProducts = prods)
    }, 5000)
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

}
