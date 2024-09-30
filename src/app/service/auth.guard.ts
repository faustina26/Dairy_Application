import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate
{

  constructor(private authService : AuthService, private routeservice:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
   {
    //return this.authService.getLoggedstatus();
    if(this.authService.isLoggedIn)
    {
      // this.routeservice.navigateByUrl("cart")
      return true;
    }
    else{
      this.routeservice.navigateByUrl("login")
      return false;
    }
  }
  
}