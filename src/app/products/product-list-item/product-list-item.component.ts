import { IProduct } from './../product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
@Input()product:IProduct;


  constructor() { }

  ngOnInit(): void {
  }

}
