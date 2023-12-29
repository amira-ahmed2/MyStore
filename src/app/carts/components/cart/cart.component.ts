import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product';
import { ProductsCartI } from 'src/app/shared/model/products-cart-i';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  model!:ProductsCartI
  cart: any[]=[]
  successOrder:boolean = false

  constructor(private service:CartsService){}

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

  addCart(){
    let productsCart = this.cart.map(item => {
      return{
        productId:item.item.id,
        quantity:item.quantity
      }
    })
   
    this.model= {
      userId:5,
      date: new Date(),
      products:productsCart
    }
    this.service.addCart(this.model).subscribe({next:(res:any)=>{
      console.log(res)
      this.successOrder = true
      setTimeout(() => {
        this.successOrder = false;
      }, 10000); // 10 seconds in milliseconds
  
    },error:(er)=>{
      alert(er.massege);
      this.successOrder=false;
      
  
    }})
  }
}

