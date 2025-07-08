import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home4',
  imports: [
    CommonModule
  ],
  templateUrl: './home4.component.html',
  styleUrl: './home4.component.scss'
})
export class Home4Component {

  currentSlide = 0;

  slides = [
    {
      image: 'https://cdn.pixabay.com/photo/2016/08/26/21/16/carrot-juice-1623157_1280.jpg',
      title: 'Fresh Vegetables',
      subtitle: 'Healthy Days',
      description: 'Use code SALE in stores and online',
      button: 'View More',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2022/12/31/13/11/fruits-7688632_1280.jpg',
      title: 'Fresh Fruits',
      subtitle: 'Organic Deals',
      description: 'Use code FRUIT and save big!',
      button: 'View More',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/09/28/09/32/cow-961790_1280.jpg',
      title: 'Farm Milk',
      subtitle: 'Nature\'s Best',
      description: 'Get fresh milk delivered to your door',
      button: 'View More',
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }



  activeItem = 0;

  features = [
    {
      title: '100% Organic & Natural',
      description:
        'Green Land Capital ensures every product is organically grown, chemical-free, and certified through our partnership with Planet Green Infra.'
    },
    {
      title: 'Modern Sustainable Farming',
      description:
        'We adopt modern organic farming practices aligned with eco-friendly technologies in collaboration with Planet Green Infra farms.'
    },
    {
      title: 'Farm to Plate Freshness',
      description:
        'All produce is freshly harvested from Planet Green farms and delivered directly to you with no middlemen – ensuring maximum freshness and quality.'
    }
  ];

  toggleItem(index: number) {
    this.activeItem = this.activeItem === index ? -1 : index;
  }
}
