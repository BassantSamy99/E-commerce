import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FormsModule } from '@angular/forms';

// import { LoadingComponent } from '../shared/components/loading/loading.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    FormsModule,

    SharedModule
    // LoadingComponent

  ]
})
export class ProductsModule { }
