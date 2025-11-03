import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../product-list/products/products';
import { Iproduct } from '../product-list/products/iproduct';
import { Shadow } from '../product-list/shadow';

@Component({
  selector: 'app-product-details',
  imports: [Shadow],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  activrout = inject(ActivatedRoute);
  productServ = inject(Products)
  productId = 0;
  product: Iproduct | undefined;

  constructor(){
    this.activrout.params.subscribe((params) => {
      console.log(params);
      this.productId = params["id"];
      this.product = this.productServ.getProductById(this.productId);
    })
  }
}
