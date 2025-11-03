import { Component, inject, signal } from '@angular/core';
import { Products } from '../../product-list/products/products';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  //Day4 Task
  productServ = inject(Products)
  selectedProduct = this.productServ.getSelectedProductSignal()
}
