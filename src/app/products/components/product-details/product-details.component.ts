import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';
ProductServiceService

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  id:number=0;
  productDetails:any;
  isLoading:boolean=true;
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductServiceService:ProductServiceService) {}
  ngOnInit(): void {
    this.id=this._ActivatedRoute.snapshot.params['id'];
    this.getProductDetails();
  }
  getProductDetails() {
    this._ProductServiceService.getProductDetails(this.id).subscribe(res =>
      {
        this.productDetails=res;
      this.isLoading=false;
      });

  }
}
