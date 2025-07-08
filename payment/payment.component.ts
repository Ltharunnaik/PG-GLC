import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  selectedMethod: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PaymentComponent>
  ) {}

  confirmPayment() {
    if (!this.selectedMethod) {
      alert('Please select a payment method.');
      return;
    }

    const orderData = {
      success: true,
      amount: this.data.amount,
      method: this.selectedMethod,
      items: this.data.items
    };

    this.dialogRef.close(orderData);
  }

  cancel() {
    this.dialogRef.close();
  }
}
