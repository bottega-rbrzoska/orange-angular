import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product;
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteProduct() {
    this.delete.emit(this.product.id);
  }

}
