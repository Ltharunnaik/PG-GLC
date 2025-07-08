import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../Service\'s/card.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  couponCode = '';
  discountPercentage = 0;
  orderCount = 0;
  couponApplied = false;

  constructor(public cartService: CardService, private router: Router) {}

  get cartItems() {
    return this.cartService.getCart();
  }

  get subtotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  get discountAmount() {
    return (this.subtotal * this.discountPercentage) / 100;
  }

  get totalPrice() {
    return this.subtotal - this.discountAmount;
  }

  applyCoupon() {
    if (this.couponApplied) {
      alert('Coupon already applied.');
      return;
    }

    if (this.orderCount === 0 && this.couponCode === 'GLC1001') {
      this.discountPercentage = this.getRandomBetween(40, 50);
      this.couponApplied = true;
      alert(`GLC1001 applied! Discount: ${this.discountPercentage}%`);
    } else if (this.orderCount >= 1 && this.couponCode === 'PG1002') {
      this.discountPercentage = this.getRandomBetween(20, 25);
      this.couponApplied = true;
      alert(`PG1002 applied! Discount: ${this.discountPercentage}%`);
    } else {
      alert('Invalid or inapplicable coupon code.');
    }
  }

  proceedToCheckout() {
    this.router.navigate(['/checkout']);
  }

  getRandomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  increaseQuantity(index: number) {
    this.cartService.increaseQuantity(index);
  }

  decreaseQuantity(index: number) {
    this.cartService.decreaseQuantity(index);
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }
}