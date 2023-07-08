import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/components/products/products.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';


const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'prefix'},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'productDetail/:id',component:ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
