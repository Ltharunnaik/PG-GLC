import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private cart: any[] = [];

  getCart(): any[] {
    return this.cart;
  }

  addToCart(product: any) {
    const existing = this.cart.find((p) => p.name === product.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
  }

  increaseQuantity(index: number) {
    this.cart[index].quantity++;
  }

  decreaseQuantity(index: number) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
    }
  }

  getCartCount(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart() {
    this.cart = [];
  }
}
