import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart = [
    { id: 1, name: 'Product 1', price: 20, quantity: 2, imageUrl: 'product1.jpg' },
    { id: 1, name: '33333 1', price: 20, quantity: 2, imageUrl: '3.jpg' },

    // Add more items as needed
  ];

  calculateTotal(): number {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}
