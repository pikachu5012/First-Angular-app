import { Component, inject } from '@angular/core';
import { Products } from '../Service/products';
import { Router, RouterLink } from '@angular/router';
import { Card } from '../shared/card/card';
import { Iproduct } from '../Service/iproduct';

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
  //Day 5
  products!: Iproduct[];
  constructor(){
    this.productList.subscribe((p: any)=>{
      this.products = p['products']
      console.log(p)
    })
  }
}
