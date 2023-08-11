import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {NewproductsComponent} from "./newproducts/newproducts.component";

const routes: Routes = [
  {path:"home" ,component:HomeComponent},
  {path:"products" ,component:ProductsComponent},
  {path:"newProducts" ,component:NewproductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
