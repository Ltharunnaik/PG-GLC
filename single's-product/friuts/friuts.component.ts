import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friuts',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './friuts.component.html',
  styleUrl: './friuts.component.scss'
})
export class FriutsComponent {
// 1st hhtml logic code.


  product: Product = {
    id: 'fruit-mango-001',
    name: 'Organic Alphonso Mangoes',
    price: 12.99,
    description: 'Premium organic Alphonso mangoes, handpicked at peak ripeness. Known for their rich, creamy texture and sweet flavor.',
    sku: 'org-mango-001',
    categories: ['Fruits', 'Organic', 'Seasonal'],
    images: [
      'https://cdn.pixabay.com/photo/2016/03/05/22/18/food-1239241_1280.jpg',
      'https://cdn.pixabay.com/photo/2021/02/03/15/52/mangoes-5978355_1280.jpg',
      'https://cdn.pixabay.com/photo/2021/08/05/12/25/mangoes-6523966_1280.jpg',
      'https://cdn.pixabay.com/photo/2020/04/01/18/27/yellow-4992183_1280.jpg'
    ],
    inStock: true
  };

  selectedImageIndex = 0;
  quantity = 1;
  activeTab: string = 'description';

  // Related Products
  products = [
    {
      name: 'Organic Bananas',
      price: '₹80.00 – ₹120.00',
      image: 'https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_1280.jpg',
      button: 'VIEW PRODUCTS'
    },
    {
      name: 'Fresh Strawberries',
      price: '₹150.00',
      image: 'https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_1280.jpg',
      button: 'ADD TO CART'
    },
    {
      name: 'Organic Apples',
      price: '₹110.00',
      image: 'https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537_1280.jpg',
      button: 'ADD TO CART'
    },
    {
      name: 'Fresh Pineapple',
      price: '₹90.00',
      image: 'https://cdn.pixabay.com/photo/2021/10/07/15/24/fruits-6688947_1280.jpg',
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
