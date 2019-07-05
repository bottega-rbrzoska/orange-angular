import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteProduct() {
    this.delete.emit(this.product.id);
  }

}
