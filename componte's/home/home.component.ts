import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from '../../Service\'s/card.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
currentSlide = 0;

  slides = [
    {
      image: 'https://cdn.pixabay.com/photo/2020/03/15/13/19/lotus-flowers-4933604_1280.jpg',
      heading: 'Highest Quality',
      subheading: 'Local Products of the',
      logo: '/assets/logo-quality.png'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2023/09/23/10/23/farm-8270612_1280.jpg',
      heading: 'Fresh From the Farm',
      subheading: 'We Bring You the',
      // logo: '/assets/logo-quality.png'
    }
  ];


  constructor(private router: Router, public cartService: CardService) {}

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  exploreProducts() {
    this.router.navigate(['/shop']);
  }


  // 2nd section shtml code.
  
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  


  categories = ['Nut & Seed', 'Oils', 'Fruits', 'Tomatoes', 'Soup'];
  selectedCategory = 'Fruits';

  allProducts = [
    {
      name: 'Enormous Silk Computer',
      category: 'Nut & Seed',
      image: 'https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/25.jpg',
      price: 299,
    },
    {
      name: 'Mediocre Linen Wallet',
      category: 'Nut & Seed',
      image: 'https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/32.jpg',
      price: 299,
    },
    {
      name: 'Synergistic Aluminum Chair',
      category: 'Nut & Seed',
      image: 'https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/21.jpg',
      price: 299,
    },
    {
      name: 'Sleek Bronze Lamp',
      category: 'Nut & Seed',
      image: 'https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/6.jpg',
      price: 299,
    },
    {
      name: 'Fantastic Plastic Chair',
      category: 'Nut & Seed',
      image: 'https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/37.jpg',
      price: 299,
    },
    {
      name: 'Intelligent Concrete Chair',
      category: 'Nut & Seed',
      image: 'https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/20.jpg',
      price: 299,
    },
    {
      name: 'Heavy Duty Paper Computer',
      category: 'Oils',
      image: 'https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/36.jpg',
      price: 36.44,
    },
    {
      name: 'Durable Steel Bag',
      category: 'Oils',
      image: 'https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/35.jpg',
      price: 654.33,
    },
    {
      name: 'Gorgeous Rubber Car',
      category: 'Oils',
      image: 'https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/34.jpg',
      price: 991.40,
    },
    {
      name: 'Durable Iron Table',
      category: 'Oils',
      image: 'https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/33.jpg',
      price: 338.24,
    },
    {
      name: 'Ergonomic Iron Clock',
      category: 'Oils',
      image: 'https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/40.jpg',
      price: 115.25-930.97,
    },
    {
      name: 'Awesome Leather Shirt',
      category: 'Oils',
      image: 'https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/38.jpg',
      price: 927.50,
    },
    {
      name: 'Pineapple',
      category: 'Fruits',
      image: 'https://cdn.pixabay.com/photo/2023/12/09/21/03/pineapple-8440180_1280.jpg',
      price: 80,
    },
    {
      name: 'quince-fruit',
      category: 'Fruits',
      image: 'https://cdn.pixabay.com/photo/2022/11/14/11/54/quince-7591433_1280.jpg',
      price: 170,
    },
    {
      name: 'plums-fruits',
      category: 'Fruits',
      image: 'https://cdn.pixabay.com/photo/2018/08/26/21/49/plums-3633456_1280.jpg',
      price: 200,
    },
    {
      name: 'Watermelons',
      category: 'Fruits',
      image: 'https://cdn.pixabay.com/photo/2010/12/13/10/18/watermelons-2636_1280.jpg',
      price: 50,
    },
    {
      name: 'Pomegranate',
      category: 'Fruits',
      image: 'https://cdn.pixabay.com/photo/2013/10/17/10/59/pomegranate-196800_1280.jpg',
      price: 120,
    },
    {
      name: 'Fresh Apples',
      category: 'Fruits',
      image: 'https://cdn.pixabay.com/photo/2017/09/26/13/39/apples-2788651_1280.jpg',
      price: 120,
    },
    {
      name: 'Tomato Basket',
      category: 'Tomatoes',
      image: 'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg',
      price: 90,
    },
    {
      name: 'Healthy Vegetable Soup',
      category: 'Soup',
      image: 'https://cdn.pixabay.com/photo/2018/04/11/10/00/soup-3310066_1280.jpg',
      price: 180,
    },
  ];

  filteredProducts = this.allProducts;



  filterCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProducts = this.allProducts.filter(p => p.category === category);
  }

  goToShop() {
    this.router.navigate(['/shop']);
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
   }
addToCart(product: any) {
    this.cartService.addToCart(product);
    this.router.navigate(['/order']);
  }
  //  3rd section code.


  email: string = '';

  submitEmail() {
    console.log('User subscribed with email:', this.email);
    // Here you can add logic to save the email or send it to a service
    this.email = ''; // clear after submission
  }



  // 4th section code

  // Example: category-section.component.ts

categorie = [
    {
      title: 'Fruits & Vegetables',
      subcategories: [
        { name: 'Nut & Seed', url: '/shop/nut-seed' },
        { name: 'Oils', url: '/shop/oils' },
        { name: 'Fruits', url: '/shop/fruits' },
        { name: 'Tomatoes', url: '/shop/tomatoes' },
        { name: 'Soup', url: '/shop/soup' }
      ],
      image: 'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg'
    },
    {
      title: 'Dairy Products',
      subcategories: [
        { name: 'Milk', url: '/shop/milk' },
        { name: 'Butter', url: '/shop/butter' },
        { name: 'Cheese', url: '/shop/cheese' },
        { name: 'Curd', url: '/shop/curd' },
        { name: 'Paneer', url: '/shop/paneer' }
      ],
      image: 'https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_1280.jpg'
    },
    {
      title: 'Packaged Foods',
      subcategories: [
        { name: 'Snacks', url: '/shop/snacks' },
        { name: 'Biscuits', url: '/shop/biscuits' },
        { name: 'Noodles', url: '/shop/noodles' },
        { name: 'Namkeen', url: '/shop/namkeen' },
        { name: 'Cereals', url: '/shop/cereals' }
      ],
      image: 'https://cdn.pixabay.com/photo/2016/10/02/20/02/green-1710328_1280.jpg'
    },
    {
      title: 'Beverages',
      subcategories: [
        { name: 'Juices', url: '/shop/juices' },
        { name: 'Soft Drinks', url: '/shop/soft-drinks' },
        { name: 'Coffee', url: '/shop/coffee' },
        { name: 'Tea', url: '/shop/tea' },
        { name: 'Water', url: '/shop/water' }
      ],
      image: 'https://cdn.pixabay.com/photo/2016/08/26/21/16/carrot-juice-1623157_1280.jpg'
    },
    {
      title: 'Health & Wellness',
      subcategories: [
        { name: 'Supplements', url: '/shop/supplements' },
        { name: 'Ayurveda', url: '/shop/ayurveda' },
        { name: 'Protein', url: '/shop/protein' },
        { name: 'Vitamins', url: '/shop/vitamins' },
        { name: 'Hygiene', url: '/shop/hygiene' }
      ],
      image: 'https://cdn.pixabay.com/photo/2014/06/21/21/00/salad-374173_1280.jpg'
    },
    {
      title: 'Grocery & Staples',
      subcategories: [
        { name: 'Rice', url: '/shop/rice' },
        { name: 'Wheat', url: '/shop/wheat' },
        { name: 'Lentils', url: '/shop/lentils' },
        { name: 'Sugar', url: '/shop/sugar' },
        { name: 'Salt', url: '/shop/salt' }
      ],
      image: 'https://cdn.pixabay.com/photo/2024/07/23/07/12/market-8914276_1280.jpg'
    }
  ];


  // section 5 code.
}
