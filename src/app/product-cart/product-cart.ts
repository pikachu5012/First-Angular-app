import { Component, inject } from '@angular/core';
import { Products } from '../Service/products';
import { Shadow } from '../product-list/shadow';

@Component({
  selector: 'app-product-cart',
  imports: [Shadow],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.css',
})
export class ProductCart {
  productServ = inject(Products);
  productList = this.productServ.getSelectedProductSignal();

  deleteProduct(productId: number) {
    this.productServ.removeProductFromCart(productId);
  }
}
