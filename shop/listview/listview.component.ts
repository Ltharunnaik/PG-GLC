import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CardService } from '../../Service\'s/card.service';

interface Product {
  image: string;
  title: string;
  category: 'vegetables' | 'fruits' | 'milk' | 'meat';
  price: string;
  unit: string;
}

@Component({
  selector: 'app-listview',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent {

  constructor(private cartService: CardService, private router: Router) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.router.navigate(['/order']);
  }

  groupedProducts = [
    {
      title: 'Vegetables',
      products: [
        {
          image: 'https://cdn.pixabay.com/photo/2016/08/01/17/08/tomatoes-1561565_1280.jpg',
          title: 'Tomatoes',
          price: '₹60/kg',
          link: '#order-tomato'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2015/03/14/14/00/carrots-673184_1280.jpg',
          title: 'Carrots',
          price: '₹50/kg',
          link: '#order-carrot'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060_1280.jpg',
          title: 'Potato',
          price: '₹60/kg',
          link: '#order-tomato'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2016/10/30/17/32/chili-pepper-1783761_1280.jpg',
          title: 'Green Chili',
          price: '₹50/kg',
          link: '#order-carrot'
        }
      ]
    },
    {
      title: 'Fruits',
      products: [
        {
          image: 'https://cdn.pixabay.com/photo/2021/10/31/15/03/banana-6757733_1280.jpg',
          title: 'Bananas',
          price: '₹40/kg',
          link: '#order-banana'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2016/08/12/22/38/apple-1589874_1280.jpg',
          title: 'Apples',
          price: '₹150/kg',
          link: '#order-apple'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2023/09/29/07/58/mango-8283268_1280.jpg',
          title: 'Mango',
          price: '₹40/kg',
          link: '#order-banana'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2017/08/18/19/48/grapes-2656259_1280.jpg',
          title: 'Grapes',
          price: '₹150/kg',
          link: '#order-apple'
        }
      ]
    },
    {
      title: 'Milk',
      products: [
        {
          image: 'https://cdn.pixabay.com/photo/2016/08/11/23/25/glass-1587258_1280.jpg',
          title: 'Cow Milk',
          price: '₹55/litre',
          link: '#order-milk'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2016/11/12/10/08/drink-1818550_1280.jpg',
          title: 'Buffalo  Milk',
          price: '₹55/litre',
          link: '#order-milk'
        },
        {
          image: 'https://media.istockphoto.com/id/2157986630/photo/masala-chach.jpg?s=612x612&w=0&k=20&c=lKoQa4JnDa9bBwlSbWzjvWVJTw-8PE_gpVJCdeOX2GQ=',
          title: 'butter milk',
          price: '₹55/litre',
          link: '#order-milk'
        },
        {
          image: 'https://media.istockphoto.com/id/1500599620/photo/fresh-curd-and-herbs-dairy-product.jpg?s=612x612&w=0&k=20&c=4NrjirecjBqz4cJhA0G_Ij3RAizKDSN7iSFf4yOD8Bc=',
          title: 'curd',
          price: '₹55/litre',
          link: '#order-milk'
        }
      ]
    },
    {
      title: 'Meat',
      products: [
        {
          image: 'https://cdn.pixabay.com/photo/2019/04/02/13/57/chickens-4097795_1280.jpg',
          title: 'Chicken',
          price: '₹200/kg',
          link: '#order-chicken'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2018/04/29/07/57/meat-3359248_1280.jpg',
          title: 'Mutton',
          price: '₹200/kg',
          link: '#order-chicken'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2018/02/23/13/28/eat-3175540_1280.jpg',
          title: 'fish',
          price: '₹200/kg',
          link: '#order-chicken'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2017/08/21/07/03/food-2664307_1280.jpg',
          title: 'prawns',
          price: '₹200/kg',
          link: '#order-chicken'
        }
      ]
    }
  ];
}
