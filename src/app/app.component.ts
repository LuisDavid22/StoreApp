import { ProductService } from './products/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 constructor(private api:ProductService){

 }
  title = 'StoreApp';

  
}
