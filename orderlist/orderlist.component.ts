import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from '../Service\'s/card.service';

interface Product {
  title: string;
  price: number;
  image: string;
  quantity?: number;
}

@Component({
  selector: 'app-orderlist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent {
  quantity = 1;

  availableProducts: Product[] = [
    {
      title: 'Tomatoes',
      price: 60,
      image: 'https://cdn.pixabay.com/photo/2016/08/01/17/08/tomatoes-1561565_1280.jpg'
    },
    {
      title: 'Carrots',
      price: 50,
      image: 'https://cdn.pixabay.com/photo/2015/03/14/14/00/carrots-673184_1280.jpg'
    },
    {
      title: 'Apples',
      price: 150,
      image: 'https://cdn.pixabay.com/photo/2016/08/12/22/38/apple-1589874_1280.jpg'
    },
    {
      title: 'Cow Milk',
      price: 55,
      image: 'https://cdn.pixabay.com/photo/2016/08/11/23/25/glass-1587258_1280.jpg'
    },
    {
      title: 'Chicken',
      price: 200,
      image: 'https://cdn.pixabay.com/photo/2019/04/02/13/57/chickens-4097795_1280.jpg'
    }
  ];

  selectedProduct = this.availableProducts[0];

  constructor(
    private cartService: CardService,
    private router: Router
  ) {}

  getTotal(price: number, quantity: number): number {
    return price * quantity;
  }

  changeProduct(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const title = select.value;
    const found = this.availableProducts.find(p => p.title === title);
    if (found) {
      this.selectedProduct = found;
      this.quantity = 1;
    }
  }

  addToCart(): void {
    this.cartService.addToCart({
      ...this.selectedProduct,
      quantity: this.quantity
    });

    // ✅ Navigate to Order page
    this.router.navigate(['/order']);
  }
}
