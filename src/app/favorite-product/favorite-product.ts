import { Component, inject } from '@angular/core';
import { Products } from '../Service/products';
import { Shadow } from '../product-list/shadow';

@Component({
  selector: 'app-favorite-product',
  imports: [Shadow],
  templateUrl: './favorite-product.html',
  styleUrl: './favorite-product.css',
})
export class FavoriteProduct {
  productServ = inject(Products);
  productList = this.productServ.getFavProduct();
}
