import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vegetables',
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.scss'
})
export class VegetablesComponent {

  // 1st hhtml logic code.


  product: Product = {
    id: 'veg-carrot-001',
    name: 'Fresh Organic Carrots',
    price: 4.99,
    description: 'Naturally grown carrots, rich in vitamins and great for everyday meals.',
    sku: 'veg-carrot-001',
    categories: ['Vegetables', 'Organic'],
    images: [
      'https://cdn.pixabay.com/photo/2017/02/25/13/27/vegetables-2097762_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/08/26/20/40/carrot-juice-1623079_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/11/29/06/15/tomatoes-1867744_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/02/28/20/59/carrots-2106825_1280.jpg'
    ],
    inStock: true
  };

  selectedImageIndex = 0;
  quantity = 1;

  constructor() { }

  ngOnInit(): void {
  }

  changeImage(index: number): void {
    this.selectedImageIndex = index;
  }

  addToCart(): void {
    console.log(`Added ${this.quantity} ${this.product.name} to cart`);
    // Here you would typically call a service to add to cart
  }




    // 2st hhtml logic code.


    activeTab: string = 'description';

  setTab(tab: string) {
    this.activeTab = tab;
  }


  //3rd html logic code.

  products = [
    {
      name: 'Fresh Organic Bread',
      price: '₹120.00 – ₹180.00',
      image: 'https://cdn.pixabay.com/photo/2017/06/23/23/57/bread-2436370_1280.jpg',
      button: 'VIEW PRODUCTS'
    },
    {
      name: 'Fresh Orange Juice',
      price: '₹90.00',
      image: 'https://cdn.pixabay.com/photo/2022/09/29/04/22/orange-juice-7486518_1280.jpg',
      button: 'ADD TO CART'
    },
    {
      name: 'Organic Red Onion',
      price: '₹60.00',
      image: 'https://cdn.pixabay.com/photo/2020/05/18/15/37/onions-5187022_1280.jpg',
      button: 'ADD TO CART'
    },
    {
      name: 'Farm Chicken Legs',
      price: '₹220.00',
      image: 'https://media.istockphoto.com/id/875629398/photo/ingredients-to-prepare-a-stuffed-turkey.jpg?s=612x612&w=0&k=20&c=XAk4ipSquPrAh9VONk56EkMsJF7v8FbS4-aIB6jzg5w=',
      button: 'ADD TO CART'
    }
  ];
}
