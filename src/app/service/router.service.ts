import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }
  navigatetocart(){
    this.router.navigate(['cart']);
  }
  navigatetologin(){
    this.router.navigate(['login'])
  }
}
