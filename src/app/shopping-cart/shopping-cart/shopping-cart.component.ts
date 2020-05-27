import { RouterModule } from "@angular/router";
import { Observable, observable, of, pipe, BehaviorSubject } from "rxjs";
import { ICartItem } from "./../cart";
import { ShoppingCartService } from "./../shopping-cart.service";
import { Component, OnInit } from "@angular/core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { tap, switchMap } from "rxjs/operators";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"],
})
export class ShoppingCartComponent implements OnInit {
  //cartItems: Observable<ICartItem[]>;
  items: ICartItem[];

  private readonly refreshItems = new BehaviorSubject(undefined);
  readonly cartItems: Observable<ICartItem[]> = this.refreshItems.pipe(
    switchMap(() => this.service.getCartItems().pipe(tap((data) => (this.items = data))))
  );

  constructor(private service: ShoppingCartService) {}
  faTrashAlt = faTrashAlt;
  ngOnInit(): void {
    // this.cartItems = this.service.getCartItems().pipe(tap((data) => (this.items = data)));
    this.refreshItems.next(undefined);
  }
  getTotal() {
    if (this.items?.length > 0) {
      return this.items?.reduce((a, b) => a + b["product"]["price"] * b["quantity"], 0);
    }
  }

  deleteItem(customerId: number, productId: string) {
    this.service.deleteItem(customerId, productId).subscribe(() => this.refreshItems.next(undefined));
  }
}
