import { ShoppingCartModule } from "./shopping-cart/shopping-cart.module";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart/shopping-cart.component";
import { SharedModule } from "./shared/shared.module";
import { QuantityBoxComponent } from "./shared/quantity-box/quantity-box.component";
import { ProductsModule } from "./products/products.module";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { NotFoundComponent } from "./not-found/not-found.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [AppComponent, MenuComponent, NotFoundComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ProductsModule,
    SharedModule,
    ShoppingCartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
