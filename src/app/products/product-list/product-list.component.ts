import { ProductService } from './../product.service';
import { IProduct } from './../product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
products:IProduct[];

  constructor(private productService:ProductService) { } 

  ngOnInit(): void {
    this.productService.getAll()
    .subscribe((response:IProduct[]) =>{
      this.products = response;
      this.products = this.products.concat(this.products,this.products);
    })
  }

}
