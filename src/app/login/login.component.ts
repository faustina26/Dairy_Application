import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Userlogin } from '../models/login';
import { LoginDataService } from '../service/login-data.service';
import { User } from '../models/userdata';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit
{
user:Userlogin={}
userdatalist:User[]=[];

constructor(private fb:FormBuilder,private authservice:AuthService,private router:Router,private loginservice:LoginDataService,private _snackbar:MatSnackBar){}
 

ngOnInit(): void {
    this.loginservice.getUserData().subscribe(data => {
      this.userdatalist = data;
    });
  }



loginForm=this.fb.group({
  email:['',[Validators.required,Validators.pattern(/^\S+@\S+\.\S+$/)]],
  password:['',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]]
})



get email(){
  return this.loginForm.get('email')
}
get password(){
  return this.loginForm.get('password')
}

validateUser(){
if(this.loginForm.valid){

        if(this.filterDataByName()){
          this.authservice.isLoggedIn=true
          this._snackbar.open("Your Account",
          'success',{duration:3000,panelClass:['mat-toolbar','mat-primary']}
          )
          this.router.navigateByUrl("cart")

        }
        else{
        this._snackbar.open("You are a new user! SignUp",
        'failure',{duration:3000,panelClass:['mat-toolbar','mat-primary']}
        )
        }

}
}


  filterDataByName(): boolean {
    if(this.userdatalist.find(user => user.email === this.email?.value&& user.password===this.password?.value)){
      return true
    }
    else{
      return false
    }
  }
}

