import { catchError, tap } from "rxjs/operators";
import { ICartItem } from "./cart";
import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { Observable, of } from "rxjs";

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: "root",
})
export class ShoppingCartService extends ApiService {
  shoppingCart: ICartItem[];

  constructor(http: HttpClient) {
    super(http, API_URL + "/ShoppingCart");
  }

  addToCart(item: ICartItem) {
    if (1 == 1) {
      this.shoppingCart.push(item);
    } else {
      this.create(item).subscribe();
    }
  }
  getCartItems(): Observable<ICartItem[]> {
    if (false) {
      return of(this.shoppingCart);
    } else {
      return this.getById(1) as Observable<ICartItem[]>;
    }
  }
  deleteItem(customerId: number, productId: string) {
    if (false) {
      let index = this.shoppingCart.findIndex((i) => i.customerId == customerId && i.productId == productId);
      this.shoppingCart.splice(index, 1);
    } else {
      return this.http.delete(this.apiEndpoint + "/" + customerId + "/" + productId).pipe(
        catchError(this.handleError),
        tap(() => console.log("borrado exitosamente"))
      );
    }
  }
}
