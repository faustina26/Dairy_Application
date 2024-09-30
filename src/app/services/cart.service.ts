import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItemList:any=[]
productList=new BehaviorSubject<any>([])
  constructor() { }


 getProducts(){
  return this.productList.asObservable()
 } 
 setProduct(product:any){
  this.cartItemList.push(...product)
this.productList.next(product)
 }

addtoCart(product:any){
  const existingProduct = this.cartItemList.find((item: { id: any; }) => item.id === product.id);

    if (existingProduct) {
      // If the product exists, increment its quantity
      existingProduct.quantity += 1;
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      const newProduct = { ...product, quantity: 1 };
      this.cartItemList.push(newProduct);
    }

    this.productList.next(this.cartItemList);
}

removeCartItem(product:any){
  this.cartItemList.map((a:any,index:any)=>{
    if(product.id===a.id){
      this.cartItemList.splice(index,1);
    }
  })
}
removeAllCart(){
  this.cartItemList=[];
  this.productList.next(this.cartItemList);
}



}
