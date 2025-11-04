import { Component, inject } from '@angular/core';
import { Products } from '../Service/products';
import { Router, RouterLink } from '@angular/router';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-product-list',
  imports: [Card],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  router = inject(Router);
  productServ = inject(Products);
  productList = this.productServ.getAllProduct();
  favoriteProducts = this.productServ.getFavProduct();
  hoveredProductId: number | null = null;

  // addSelectedProduct(product: any) {
  //   this.productServ.addSignalProduct(product);
  // }
  // addFavProduct(product: any) {
  //   this.productServ.addFavProduct(product);
  // }

  // isFavorite(productId: number): boolean {
  //   return this.favoriteProducts().some((p) => p.id === productId);
  // }

  // showProductDetails(productId: number) {
  //   this.hoveredProductId = productId;
  // }

  // hideProductDetails() {
  //   this.hoveredProductId = null;
  // }
}
