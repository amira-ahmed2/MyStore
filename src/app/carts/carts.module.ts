import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule
    
  ]
})
export class CartsModule { }
