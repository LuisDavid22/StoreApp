import { ProductListComponent } from './products/product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentFixture } from '@angular/core/testing';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    component: WelcomeComponent
  },
  {
    path:"product",
    component:ProductListComponent
  },
  {
    path:"product/:id",
    component:NotFoundComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
