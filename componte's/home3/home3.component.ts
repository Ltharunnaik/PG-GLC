import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home3',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './home3.component.html',
  styleUrl: './home3.component.scss'
})
export class Home3Component {
  popupVisible = false;
  popupTitle = '';
  popupContent = '';

  openPopup(type: string) {
    if (type === 'strawberry') {
      this.popupTitle = 'Strawberry Organic Farming';
      this.popupContent = `Strawberries are grown using compost-rich soil and natural pest deterrents. 
        Organic farming focuses on biodiversity, hand-weeding, and crop rotation, 
        producing delicious, chemical-free berries for a healthier life.`;
    } else {
      this.popupTitle = 'Kiwi Organic Farming';
      this.popupContent = `Kiwis thrive in organic orchards where natural fertilizers like compost tea 
        are used. With no synthetic sprays, each fruit grows with full nutrients 
        and eco-sustainability for your well-being.`;
    }
    this.popupVisible = true;
  }



  // 2nd section html logic code.


  reviews = [
    {
      name: 'Karik',
      store: 'Cunningham Store',
      text: `After using garden my business skyrocketed! If you aren't sure, always go for garden.
             This is simply unbelievable! Thanks to garden, we've just launched our 5th website!`,
      image: 'https://randomuser.me/api/portraits/men/31.jpg'
    },
    {
      name: 'Lilly',
      store: 'Green Organic Shop',
      text: `Garden transformed the way we connect with our customers. Smooth, fast, and eco-friendly.`,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'John',
      store: 'Nature Hub',
      text: `Our sales doubled within weeks after switching to garden! Incredible service and support.`,
      image: 'https://randomuser.me/api/portraits/men/45.jpg'
    }
  ];

  currentIndex = 0;

  nextReview() {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
  }

  prevReview() {
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

  // 3rd section code.


  posts = [
    {
      title: 'Easy, soft and crispy chocolate croissants',
      category: 'Package Foods',
      date: 'October 25, 2022',
      author: 'admin',
      comments: 0,
      image: 'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg'
    },
    {
      title: 'For the love of food',
      category: 'Package Foods',
      date: 'October 25, 2022',
      author: 'admin',
      comments: 0,
      image: 'https://demo2.pavothemes.com/freshio/wp-content/uploads/2022/10/blog-new04-410x250.jpg'
    },
    {
      title: 'Vegetable soup with fresh herbs',
      category: 'Grocery & Staples',
      date: 'October 25, 2022',
      author: 'admin',
      comments: 0,
      image: 'https://cdn.pixabay.com/photo/2017/03/16/07/18/lunch-2148346_1280.jpg'
    },
    {
      title: 'Fresh Avocado & Eggs',
      category: 'Healthy',
      date: 'October 25, 2022',
      author: 'admin',
      comments: 0,
      image: 'https://cdn.pixabay.com/photo/2025/06/02/15/13/breakfast-9637421_1280.jpg'
    },
    {
      title: 'Berry Delight Cake',
      category: 'Desserts',
      date: 'October 25, 2022',
      author: 'admin',
      comments: 0,
      image: 'https://cdn.pixabay.com/photo/2018/06/21/18/44/dessert-3489120_1280.jpg'
    }
  ];
}
