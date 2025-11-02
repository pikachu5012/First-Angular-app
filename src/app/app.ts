import { Component, signal } from '@angular/core';
import { ProductList } from "./product-list/product-list";
import { ProductCart } from "./product-cart/product-cart";
import { FavoriteProduct } from "./favorite-product/favorite-product";

@Component({
  selector: 'app-root',
  imports: [ProductList, ProductCart, FavoriteProduct],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day-3-task');
}
