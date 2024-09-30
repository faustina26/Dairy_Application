import { Component, OnInit } from '@angular/core';
import { DairyService } from '../services/dairy.service';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-displayview',
  templateUrl: './displayview.component.html',
  styleUrl: './displayview.component.css'
})
export class DisplayviewComponent implements OnInit {
  n:Product[]=[]
constructor(private service:DairyService,private cartservice:CartService){}
  ngOnInit(): void { 
    this.service.getProducts().subscribe({
      next:data=>{   
        this.n=data; 
        // this.n.forEach((a:any)=>{
        //   Object.assign(a,{quantity:1,total:a.price})
        // })  
      }
    })
  }
  
onSearchNote(senote:string)
{
  this.service.getProducts().subscribe({
    next: (data) => {
      if (senote === '' || !senote ) {
        this.n = data;
      }

      else {
        this.n = data.filter((note) =>
          note.productName?.toLowerCase().startsWith(senote.toLowerCase()))
      }
    },
    error: (error) => {
      alert('Failed to Fetch Notes Due to Server Error !!');
    }
  })
}

category(value:any){
  // console.log(value)
this.service.getProducts().subscribe({
  next:data=>{
    if(value==""|| !value){
      this.n=data;
    }
    if(value=="All"){
      this.n=data;
    }
    else{
      this.n=data.filter(c=>
     c.category?.toLowerCase().startsWith(value.toLowerCase())        
      )
    }
  }
})
}



}
