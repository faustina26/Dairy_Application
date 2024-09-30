import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatButtonModule} from '@angular/material/button'
import{MatListModule} from '@angular/material/list';
import { DisplayviewComponent } from './displayview/displayview.component';
import { SearchComponent } from './search/search.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInput} from '@angular/material/input'
import{MatCardModule} from '@angular/material/card';
import { ItemsComponent } from './items/items.component'
import{MatAutocompleteModule} from '@angular/material/autocomplete';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import {MatBadgeModule} from '@angular/material/badge';
import { CartComponent } from './cart/cart.component';
import{MatChipsModule} from '@angular/material/chips'
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component'
import { MatLabel } from '@angular/material/form-field';
import { RegistrationComponent } from './registration/registration.component';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    DisplayviewComponent,
    SearchComponent,
    ItemsComponent,
    ProductDetailComponent,
    CartComponent,
    LoginComponent,
    RegistrationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   FormsModule,
   HttpClientModule,
   MatToolbarModule,
   MatIconModule,
   MatSidenavModule,
   MatButtonModule,
   MatListModule,
   MatFormFieldModule,
   MatInput,
   MatButtonModule,
   MatCardModule,
   MatAutocompleteModule,
   MatBadgeModule,
   MatChipsModule,
   MatTooltipModule,
   MatSnackBarModule,
   MatLabel,
   ReactiveFormsModule,
   MatRadioModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
