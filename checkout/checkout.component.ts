import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CardService } from '../Service\'s/card.service';
import { PaymentComponent } from '../payment/payment.component';
import { OrderService } from '../Service\'s/order.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, HttpClientModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  cartService = inject(CardService);
  dialog = inject(MatDialog);
  orderService = inject(OrderService);

  cartItems = this.cartService.getCart();
  subtotal = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  placeOrder() {
    const dialogRef = this.dialog.open(PaymentComponent, {
      width: '500px',
      data: { amount: this.subtotal, items: this.cartItems }
    });

    dialogRef.afterClosed().subscribe((orderDetails: any) => {
      if (orderDetails?.success) {
        this.orderService.saveOrder(orderDetails).subscribe(() => {
          this.cartService.clearCart();
          alert('✅ Order placed and saved successfully!');
        });
      }
    });
  }
}
