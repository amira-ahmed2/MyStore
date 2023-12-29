import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartI } from 'src/app/shared/model/cart-i';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }

  addCart(productsCart:CartI){
    return this.http.post(`${environment.baseApi}carts`,productsCart)
  }
}
