import { Component, signal } from '@angular/core';
import { ProductList } from "./product-list/product-list";
import { ProductCart } from "./product-cart/product-cart";
import { FavoriteProduct } from "./favorite-product/favorite-product";
import { Nav } from './shared/nav/nav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ProductList, ProductCart, FavoriteProduct, Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day-3-task');

  constructor() {
    // Set auth in localStorage for testing
    // localStorage.setItem('auth', JSON.stringify({ auth: false }));
  }
}
