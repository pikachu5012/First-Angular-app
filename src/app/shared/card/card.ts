import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Products } from '../../Service/products';
import { Iproduct } from '../../Service/iproduct';
import { Shadow } from '../../product-list/shadow';
import { CurrencyPipe } from '@angular/common';
import { TextSlicePipe } from '../../pipes/text-slice-pipe';

@Component({
  selector: 'app-card',
  imports: [Shadow, RouterLink, CurrencyPipe, TextSlicePipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  router = inject(Router);
  productServ = inject(Products);
  productList = this.productServ.getAllProduct();
  favoriteProducts = this.productServ.getFavProduct();
  hoveredProductId: number | null = null;

  product = input.required<Iproduct>();

  addSelectedProduct(product: any) {
    this.productServ.addSignalProduct(product);
  }
  addFavProduct(product: any) {
    this.productServ.addFavProduct(product);
  }

  isFavorite(productId: number): boolean {
    return this.favoriteProducts().some((p) => p.id === productId);
  }

  showProductDetails(productId: number) {
    this.hoveredProductId = productId;
  }

  hideProductDetails() {
    this.hoveredProductId = null;
  }
}
