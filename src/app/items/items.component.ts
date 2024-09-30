import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { DairyService } from '../services/dairy.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
@Input()
items?:Product;

constructor(private service:DairyService,private cartservices:CartService){}
  ngOnInit(): void {
   
  }

tocart(item:any){
// this.service.addCart(this.items).subscribe()
this.cartservices.addtoCart(item);
}
  


}
