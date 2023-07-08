import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  @Input() products:any[]=[];
  inCart:any[]=[];
  // itemAdded:boolean=false;
  itemAdded:any[]=[];
  amount:any[]=[];
  clickedIndex:number=0;
  value:number=1;

  constructor() {

  }
  addToCart (item:any,amount:number) {
    if (localStorage.getItem('cart') ) {
      let existItem =  this.inCart.find(element => element.item.id == item.id);
      if (existItem) {
        this.inCart[this.inCart.indexOf(existItem)].amount=amount;
        localStorage.setItem('cart',JSON.stringify(this.inCart) );
      }
      else {
        this.inCart=JSON.parse(localStorage.getItem('cart')!)
        this.inCart.push({item,amount});
      localStorage.setItem('cart',JSON.stringify(this.inCart) );
      
      }
    }
    else {
      this.inCart.push({item,amount});
    localStorage.setItem('cart',JSON.stringify(this.inCart) );


    }
  }
  }


