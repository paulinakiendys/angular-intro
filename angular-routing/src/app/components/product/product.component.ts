import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  items = [
    {"id": 1, "title": "Item A"},
    {"id": 2, "title": "Item B"},
    {"id": 3, "title": "Item C"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
