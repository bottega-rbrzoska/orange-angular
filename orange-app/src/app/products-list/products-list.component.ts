import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
 product = {
   "id":"1505a93e-bc9e-4d55-90d3-33fcec33674d",
   "isActive":true,
   "price":"64.85",
   "avatar":"https://picsum.photos/150",
   "itemsAvailable":8,
   "category":"electronic",
   "name":"Reprehenderit consequat elit cillum magna voluptate amet ad officia do ad proident.",
   "description":"Sit irure pariatur nulla sit pariatur nulla. Laborum proident ad culpa excepteur eu irure eiusmod Lorem tempor non veniam in consectetur. Sunt eiusmod adipisicing eu ad nostrud velit dolor ea cillum ut qui elit adipisicing.\n\nAdipisicing laborum labore in esse excepteur dolore ut qui do commodo sit. Exercitation sunt in aute officia nostrud ut incididunt sit culpa consequat in aliqua. Irure sunt commodo excepteur nisi adipisicing ullamco ea consectetur commodo cillum. Sit proident excepteur aliquip eiusmod aliquip ipsum ea aliquip cupidatat consectetur.",
   "created":1553640169515,
   "createdBy":""
 }
  constructor() { }

  ngOnInit() {
  }

  handleDelete(id) {
   console.log(id)
  }

}
