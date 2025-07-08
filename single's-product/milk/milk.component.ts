import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  sku: string;
  categories: string[];
  images: string[];
  inStock: boolean;
}

@Component({
  selector: 'app-milk',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './milk.component.html',
  styleUrls: ['./milk.component.scss']
})
export class MilkComponent {
  // Main Product Data
  product: Product = {
    id: 'dairy-milk-001',
    name: 'Organic Whole Milk',
    price: 6.99,
    description: 'Certified organic whole milk from grass-fed cows. Rich in omega-3s and free from antibiotics or synthetic hormones.',
    sku: 'org-milk-001',
    categories: ['Dairy', 'Organic', 'Milk'],
    images: [
      'https://cdn.pixabay.com/photo/2016/08/11/23/25/glass-1587258_1280.jpg',
      'https://cdn.pixabay.com/photo/2020/01/10/12/49/milk-4755234_1280.jpg',
      'https://cdn.pixabay.com/photo/2019/04/17/11/12/milk-4133944_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/06/23/16/52/coffee-with-milk-2435254_1280.jpg'
    ],
    inStock: true
  };

  selectedImageIndex = 0;
  quantity = 1;
  activeTab: string = 'description';

  // Related Products
  products = [
    {
      name: 'Almond Milk',
      price: '₹120.00 – ₹180.00',
      image: 'https://cdn.pixabay.com/photo/2017/08/06/17/41/milk-2594538_1280.jpg',
      button: 'VIEW PRODUCTS'
    },
    {
      name: 'Greek Yogurt',
      price: '₹90.00',
      image: 'https://cdn.pixabay.com/photo/2020/11/04/13/29/cereal-5712343_1280.jpg',
      button: 'ADD TO CART'
    },
    {
      name: 'Organic Cheese',
      price: '₹220.00',
      image: 'https://cdn.pixabay.com/photo/2017/07/02/22/39/white-cheese-2466039_1280.jpg',
      button: 'ADD TO CART'
    },
    {
      name: 'Farm Butter',
      price: '₹60.00',
      image: 'https://cdn.pixabay.com/photo/2022/07/12/13/32/butter-7317384_1280.jpg',
      button: 'ADD TO CART'
    }
  ];

  // Methods
  changeImage(index: number): void {
    this.selectedImageIndex = index;
  }

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  addToCart(): void {
    console.log(`Added ${this.quantity} ${this.product.name} to cart`);
  }
}