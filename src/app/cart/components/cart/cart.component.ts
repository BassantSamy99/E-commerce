import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartProduct:any[]=[];
  orderSent:boolean=false;
  total:number=0;
constructor() {
  this.showCartProducts();
}
showCartProducts() {
  this.cartProduct=JSON.parse(localStorage.getItem('cart')!);
  this.totalProductsPrice();
}
plusQuantity(index:number) {
this.cartProduct[index].amount++;
localStorage.setItem('cart',JSON.stringify(this.cartProduct));
this.showCartProducts();
}
minusQuantity(index:number) {
this.cartProduct[index].amount--;
if (this.cartProduct[index].amount <= 1) {
this.cartProduct[index].amount=1;
localStorage.setItem('cart',JSON.stringify(this.cartProduct));
this.showCartProducts();
}
localStorage.setItem('cart',JSON.stringify(this.cartProduct));
this.showCartProducts();
}
totalProductsPrice() {
  this.total=0;
  for (let product in this.cartProduct) {
    this.total += Math.ceil(this.cartProduct[product].item.price * this.cartProduct[product].amount);
  }

}
deleteProduct(index:number) {
  this.cartProduct.splice(index,1);
  localStorage.setItem('cart',JSON.stringify(this.cartProduct));
  // this.showCartProducts();
  this.totalProductsPrice();
}
clearCart() {
localStorage.removeItem('cart');
this.showCartProducts();
this.totalProductsPrice();
location.reload();
}
inputChangeQuantity(event:any,index:number) {
  this.cartProduct[index].amount=event.target.value;
  localStorage.setItem('cart',JSON.stringify(this.cartProduct));
this.showCartProducts();
}
}
