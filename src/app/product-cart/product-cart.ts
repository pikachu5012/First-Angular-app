import { Component, inject } from '@angular/core';
import { Products } from '../product-list/products/products';

@Component({
  selector: 'app-product-cart',
  imports: [],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.css',
})
export class ProductCart {
  productServ = inject(Products)
  productList = this.productServ.getSelectedProductSignal()

  deleteProduct(productId: number){
    this.productServ.removeProductFromCart(productId);
  }
}
