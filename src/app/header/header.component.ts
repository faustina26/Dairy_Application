import { Component, OnInit } from '@angular/core';
import { DairyService } from '../services/dairy.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  totalItem:number=0;
constructor(private service:DairyService,private cartservice:CartService){}
  ngOnInit(): void {
 this.cartservice.getProducts().subscribe(res=>{
this.totalItem=res.length;
 })  
  }

}
