import { observable } from "rxjs";
import { ShoppingCartService } from "./shopping-cart/shopping-cart.service";
import { ProductService } from "./products/product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "StoreApp";
  //cartItems: number;
  get cartItems() {
    return this.cartService.itemsNumber$;
  }

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    // this.cartService.itemsNumber$.subscribe((data: number) => {
    //   this.cartItems = data;
    // });
  }

  // getCartItemsNumber() {
  //   this.cartService.getItemsNumber(1).subscribe((data: number) => {
  //     this.cartItems = data;
  //   });
  // }
}
