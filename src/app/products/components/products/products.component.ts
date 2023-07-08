import { Component,OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products:any[]=[];
  categories:any[]=[];
  isLoadng:boolean=true;
  constructor(private _ProductServiceService:ProductServiceService){}
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
    }
  getAllProducts() {
    this._ProductServiceService.getAllProducts().subscribe( response => {
      this.products=response;
      this.isLoadng=false;
  });
}
  getAllCategories() {
    this._ProductServiceService.getAllCategories().subscribe (response => {
      this.categories=response;
      this.isLoadng=false;
    });
  }
  chosenCategory(event:any) {
    let value = event.target.value;
    if (value=='all') {
      this.getAllProducts();
    }else{
      this._ProductServiceService.chosenCategory(value).subscribe(response => {
        this.products=response;
        this.isLoadng=false;
      });
    }
  }
}

