import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { LoginDataService } from '../service/login-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

constructor(private fb:FormBuilder,private regservice:LoginDataService,private _snackBar:MatSnackBar){}
  
  registerForm = this.fb.group(
    {
      firstName: ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[^0-9].*$/)]],
      lastName: ['',Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
          ),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
          ),
        ],
      ],
      gender: [''],
      age: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          ),
        ],
      ],
      phone: ['', [Validators.pattern(/^[789]\d{9,9}$/)]],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zipCode: ['', [Validators.pattern(/^\d{5,6}$/)]],
      }),
    },
    { validators: this.mustMatchPassword }
  );

  // validateAge(fc: AbstractControl) {
  //   const ageValue = fc.value;
  //   if (ageValue < 18) {
  //     return { invalidAge: true };
  //   }
  //   return null;
  // }

  mustMatchPassword(fg: AbstractControl) {
    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;
    if (!password || !confirmPassword) {
      return null;
    }
    if (password != confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get street() {
    return this.registerForm.get('address')?.get('street');
  }

  get city() {
    return this.registerForm.get('address')?.get('city');
  }

  get state() {
    return this.registerForm.get('address')?.get('state');
  }

  get zipCode() {
    return this.registerForm.get('address')?.get("zipCode");
  }

  onSubmit(){
    if(this.registerForm.valid){

      this.regservice.addUserData(this.registerForm.value).subscribe({
        next:data=>{
          this._snackBar.open("SuccessFully Registered",
          'success',{duration:3000,panelClass:['mat-toolbar','mat-primary']}
          )
        },
        error:e=>{
          this._snackBar.open("Registration Failed",
          'failure',{duration:3000,panelClass:['mat-toolbar','mat-primary']}
          )
        }
      })
    }


  }
}
