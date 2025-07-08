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
  selector: 'app-meat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.scss']
})
export class MeatComponent {
  // Main Product Data
  product: Product = {
    id: 'meat-chicken-001',
    name: 'Organic Free-Range Chicken',
    price: 15.99,
    description: 'Premium organic free-range chicken, humanely raised without antibiotics or hormones. Fed with organic feed and allowed to roam freely.',
    sku: 'org-chick-001',
    categories: ['Meat', 'Organic', 'Poultry'],
    images: [
      'https://cdn.pixabay.com/photo/2014/03/05/01/20/chicken-breast-279847_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/08/07/11/03/chinese-cuisine-2602645_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/08/24/17/02/fish-1617442_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/08/21/07/03/food-2664307_1280.jpg'
    ],
    inStock: true
  };

  selectedImageIndex = 0;
  quantity = 1;
  activeTab: string = 'description';

  // Related Products
  products = [
    {
      name: 'Organic Mutton',
      price: '₹450.00 – ₹600.00',
      image: 'https://cdn.pixabay.com/photo/2018/04/29/07/57/meat-3359248_1280.jpg',
      button: 'VIEW PRODUCTS'
    },
    {
      name: 'Organic chicken',
      price: '₹550.00',
      image: 'https://cdn.pixabay.com/photo/2020/01/12/20/21/chicken-4761000_1280.jpg',
      button: 'ADD TO CART'
    },
    {
      name: 'Frish Fish',
      price: '₹700.00',
      image: 'https://cdn.pixabay.com/photo/2024/06/22/14/58/fish-seller-8846497_1280.jpg',
      button: 'ADD TO CART'
    },
    {
      name: 'Fresh prawns',
      price: '₹380.00',
      image: 'https://cdn.pixabay.com/photo/2015/11/20/09/02/prawn-1052623_1280.jpg',
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