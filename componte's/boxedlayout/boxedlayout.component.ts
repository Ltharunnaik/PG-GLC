import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-boxedlayout',
  imports: [
    CommonModule
  ],
  templateUrl: './boxedlayout.component.html',
  styleUrl: './boxedlayout.component.scss'
})
export class BoxedlayoutComponent {
    slides = [
    {
      heading: 'Healthy Kitchen with Freshio',
      tagline: 'Pure and Nature',
      button: true,
      bgClass: 'slide1'
    },
    {
      heading: 'Discover Real Organic Flavors',
      tagline: '',
      button: true,
      bgClass: 'slide21'
    },
    {
      heading: '50% Off',
      tagline: 'Summer Sale – Vitamins, Supplements and Herbs',
      button: false,
      bgClass: 'slide31'
    }
  ];

  currentSlide = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }



  showPopup = false;
  selectedImage = { src: '', alt: '' };

  imageList = [
    { src: 'https://cdn.pixabay.com/photo/2023/03/15/11/45/natural-7854388_1280.png', alt: '100% Natural' },
    { src: 'https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png', alt: 'Organic' },
    { src: 'https://cdn.pixabay.com/photo/2018/05/15/09/23/flower-3402550_1280.jpg', alt: 'Natural Beauty' },
    { src: 'https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_1280.jpg', alt: 'Eat Healthy' },
    { src: 'https://cdn.pixabay.com/photo/2015/06/25/14/13/fern-821293_1280.jpg', alt: 'Eco Friendly' }
  ];

  openPopup(image: { src: string; alt: string }) {
    this.selectedImage = image;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
