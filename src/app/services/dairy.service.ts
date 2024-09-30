import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DairyService {

  constructor(private http:HttpClient) { }
  // private url_dataUser:string="http://localhost:3001/user_Data"
  private url_products:string="http://localhost:5000/products"
  // http://localhost:8085/inventory/items/{id}


// private url_cart:string="http://localhost:3002/cart";

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url_products)
  }
  getProduct(id:number):Observable<Product>{    
return this.http.get<Product>(`${this.url_products}/${id}`)
  }

//   addCart(data:any):Observable<Product>{
// return this.http.post<Product>(this.url_cart,data)
//   }

//   getCart():Observable<Product[]>{
//     return this.http.get<Product[]>(this.url_cart)
   
//   }
}
