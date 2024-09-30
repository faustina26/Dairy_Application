import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { DairyService } from '../services/dairy.service';
import { CartService } from '../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  
product :Product[]=[];

constructor(private service:DairyService,private cartservice:CartService,private _snackbar:MatSnackBar){
 this.cartservice.getProducts().subscribe((res)=>{
  this.product=res;

 })
}


incrementQuantity(product: any): void {
  product.quantity = (product.quantity || 0) + 1;
}

decrementQuantity(product: any): void {
  if (product.quantity && product.quantity > 1) {
    product.quantity -= 1;
  }
}
getTotalPrice(product: any): number {
  const total=product.price * product.quantity
  return total;
}
calculateOverallPrice(): number {
  let overallPrice = 0;

  for (const product of this.product) {
    overallPrice += this.getTotalPrice(product);
  }

  return overallPrice;
}


removeItem(product:any){
  this.cartservice.removeCartItem(product);
}
placeorder(){
  this._snackbar.open("Order placed successfully!",'success',{
    duration:3000,panelClass:['mat-toolbar','mat-primary']}
    )
}

}