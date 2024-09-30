import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { DairyService } from '../services/dairy.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product:Product={};
  cartservices: any;
constructor(private activatedRoute:ActivatedRoute,private service:DairyService,private _snackBar:MatSnackBar,private cartservice:CartService){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.service.getProduct(+id).subscribe(data => {
        this.product = data;
      })
    });
  }
@Input()
p?:Product;


 addCart(data:any){
  this.cartservice.addtoCart(data);
  console.log(data)
 }

}
