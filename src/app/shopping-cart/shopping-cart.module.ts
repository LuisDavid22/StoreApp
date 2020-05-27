import { AppRoutingModule } from "./../app-routing.module";
import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [ShoppingCartComponent],
})
export class ShoppingCartModule {}
