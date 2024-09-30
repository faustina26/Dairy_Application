import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn:boolean =false;

  getLoggedstatus():boolean{
    return this.isLoggedIn;
  }

  setloggedStatus(status:boolean)
  {
    this.isLoggedIn=status;
  }
}
