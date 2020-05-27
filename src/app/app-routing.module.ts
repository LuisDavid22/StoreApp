import { ShoppingCartComponent } from "./shopping-cart/shopping-cart/shopping-cart.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
  },
  {
    path: "product",
    component: ProductListComponent,
  },
  {
    path: "product/:id",
    component: ProductDetailComponent,
  },
  {
    path: "myCart",
    component: ShoppingCartComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
