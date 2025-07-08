import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CardService } from '../Service\'s/card.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
   sidebarOpen = false;
  showCart = false;
  showLoginForm = false;
  username = '';
  password = '';
    constructor(public cartService: CardService, private router: Router) {}



  openCart() {
    this.showCart = true;
  }

  closeCart() {
    this.showCart = false;
  }

 departments = [
  { name: 'Fruits & Vegetables', icon: 'fa fa-apple', route: 'fruitsvegetables' },
  { name: 'Supplements', icon: 'fa fa-medkit', route: 'Supplement' },
  { name: 'Dairy, Bread & Eggs', icon: 'fa fa-shopping-basket', route: 'DailyBreadeggs' },
  { name: 'Package Foods', icon: 'fa fa-cutlery', route: 'PackageFoods' },
  { name: 'Beauty & Care', icon: 'fa fa-heartbeat', route: 'beautyCare' },
  { name: 'Health & Wellness', icon: 'fa fa-stethoscope', route: 'HealthWellness' },
  { name: 'Baby & Infants', icon: 'fa fa-child', route: 'BabyInfants' },
  { name: 'Home Care', icon: 'fa fa-home', route: 'HomeCare' },
  { name: 'Hot Offers', icon: 'fa fa-fire', route: 'HotOffers' },
];

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

toggleLoginForm() {
  this.showLoginForm = !this.showLoginForm;
}

onLogin() {
  if (this.username && this.password) {
    alert(`Logging in as ${this.username}`);
    this.showLoginForm = false;
    // Actual login logic goes here
  }
}
@HostListener('document:click', ['$event'])
handleClickOutside(event: Event) {
  const clickedInside = (event.target as HTMLElement).closest('.user-icon-wrapper');
  if (!clickedInside) {
    this.showLoginForm = false;
  }
}


increaseQuantity(index: number) {
    this.cartService.increaseQuantity(index);
  }

  decreaseQuantity(index: number) {
    this.cartService.decreaseQuantity(index);
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }

}
