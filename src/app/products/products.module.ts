import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [ProductListItemComponent, ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ],
  exports:[ProductListItemComponent,ProductListComponent]
})
export class ProductsModule { }
