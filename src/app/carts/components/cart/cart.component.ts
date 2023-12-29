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

  minAmount(index:number){
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity -= 1;
    }
    this.updateCart()


  }
  addAmount(index:number){
    // console.log(this.cart[index].item.rating.count)
    if (this.cart[index].quantity < 20) {
      this.cart[index].quantity += 1;
    }
    this.updateCart()
  }
  detactChange(){
    this.updateCart()

  }

  deleteProduct(index:number){
    this.cart.splice(index, 1)
    this.updateCart()
  }

  clearCart(){
    this.cart = []
    this.updateCart()
  }

  updateCart(){
    localStorage.setItem("cart",JSON.stringify(this.cart));
  }
}

