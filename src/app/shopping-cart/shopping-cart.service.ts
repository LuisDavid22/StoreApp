import { catchError, tap, switchMap } from "rxjs/operators";
import { ICartItem } from "./cart";
import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { Observable, of, BehaviorSubject } from "rxjs";

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: "root",
})
export class ShoppingCartService extends ApiService {
  shoppingCart: ICartItem[];
  private refreshItemsNumber = new BehaviorSubject(0);
  readonly itemsNumber$ = this.refreshItemsNumber.pipe(switchMap(() => this.getItemsNumber(this.userId)));
  userId: number = 1;

  constructor(http: HttpClient) {
    super(http, API_URL + "/ShoppingCart");
  }

  addToCart(productId: string, quantity: number) {
    let item: ICartItem = {
      customerId: this.userId,
      productId,
      quantity,
    };

    if (false) {
      this.shoppingCart.push(item);
    } else {
      //return this.http.post(this.apiEndpoint + "/" + item.customerId + "/" + item.productId + "?quantity=" + item.quantity,)
      return this.create(item).pipe(tap(() => this.refreshItemsNumber.next(0)));
    }
  }
  getCartItems(): Observable<ICartItem[]> {
    if (this.shoppingCart) {
      return of(this.shoppingCart);
    } else {
      return this.getById(1).pipe(tap((data: ICartItem[]) => (this.shoppingCart = data))) as Observable<ICartItem[]>;
    }
  }
  deleteItem(customerId: number, productId: string) {
    if (false) {
      let index = this.shoppingCart.findIndex((i) => i.customerId == customerId && i.productId == productId);
      this.shoppingCart.splice(index, 1);
    } else {
      return this.http.delete(this.apiEndpoint + "/" + customerId + "/" + productId).pipe(
        catchError(this.handleError),
        tap(() => {
          console.log("borrado exitosamente");
          this.refreshItemsNumber.next(0);
        })
      );
    }
  }

  getItemsNumber(id: number) {
    if (false) {
      let count = this.shoppingCart.filter((x) => x.customerId == id).length;
      return of(count);
    }
    return this.http.get(this.apiEndpoint + "/getItemsNumber/" + id);
  }
}
