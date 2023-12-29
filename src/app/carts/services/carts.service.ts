import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsCartI } from 'src/app/shared/model/products-cart-i';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }

  addCart(productsCart:ProductsCartI){
    return this.http.post(`${environment.baseApi}carts`,productsCart)
  }
}
