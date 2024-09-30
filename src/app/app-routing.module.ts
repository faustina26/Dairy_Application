import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DisplayviewComponent } from './displayview/displayview.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:"home",component:DisplayviewComponent},
  {path:"product-detail/:id", component:ProductDetailComponent},
  {path:"cart",component:CartComponent,canActivate:[AuthGuard]},
  // 
  {path:"login",component:LoginComponent},
  
  {path:"register",component:RegistrationComponent},
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
