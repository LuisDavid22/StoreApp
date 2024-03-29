import { ShoppingCartService } from "./../../shopping-cart/shopping-cart.service";
import { IProduct } from "./../product";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  product: IProduct;
  quantityToBuy: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productApi: ProductService,
    private cartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get("id");

    if (this.productId) {
      this.getProduct();
    } else {
      this.router.navigate(["/product"]);
    }
  }

  getProduct() {
    this.productApi.getById(this.productId).subscribe((response: IProduct) => {
      this.product = response;
    });
  }
  onQuantityChanged(value: number) {
    this.quantityToBuy = value;
    console.log(this.quantityToBuy);
  }

  addToCart() {
    this.cartService.addToCart(this.product["productId"], this.quantityToBuy).subscribe();
  }
}
