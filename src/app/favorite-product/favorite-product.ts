import { Component, inject } from '@angular/core';
import { Products } from '../product-list/products/products';

@Component({
  selector: 'app-favorite-product',
  imports: [],
  templateUrl: './favorite-product.html',
  styleUrl: './favorite-product.css',
})
export class FavoriteProduct {
  productServ = inject(Products)
  productList = this.productServ.getFavProduct()
}
