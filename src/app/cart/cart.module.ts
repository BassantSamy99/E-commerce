import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { AdminCartComponent } from './components/cart/admin-cart/admin-cart.component';



@NgModule({
  declarations: [
    CartComponent,
    AdminCartComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CartModule { }
