import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: any[]=[]
  ngOnInit(){
    this.getCartProduct();
  }


  calculateTotal(): number {
    return this.cart.reduce((acc, item) => acc + item.item.price * item.quantity, 0);
  }
  getCartProduct(){
    if("cart" in localStorage){
      this.cart = JSON.parse(localStorage.getItem("cart")!)
      console.log(this.cart)
    }
  }
}
