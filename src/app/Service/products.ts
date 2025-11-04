import { HttpClient } from '@angular/common/http';
import { Iproduct } from './iproduct';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  selectedProductSignal = signal<Iproduct[]>([]);
  favProductSignal = signal<Iproduct[]>([]);
  //Day 5
  http = inject(HttpClient);
  getAllProduct(){
    return this.http.get<Iproduct[]>('https://dummyjson.com/products?limit=10&skip=20')
  }
  getProductById(id: number):any {
    return this.http.get<Iproduct>(`https://dummyjson.com/products/${id}`)
  }
  /////////////
  addSignalProduct(product: Iproduct){
    this.selectedProductSignal.update((products) => {
      const exists = products.some(p => p.id === product.id);
      if (exists) {
        return products;
      }
      return [...products, product];
    })
  }
  getSelectedProductSignal() {
    return this.selectedProductSignal;
  }
  addFavProduct(product: Iproduct){
    this.favProductSignal.update((products) => {
      const exists = products.some(p => p.id === product.id);
      if (exists) {
        return products.filter(p => p.id !== product.id);
      }
      return [...products, product];
    })
  }

  removeFavProduct(productId: number){
    this.favProductSignal.update((products) =>
      products.filter(product => product.id !== productId)
    );
  }
  getFavProduct(){
    return this.favProductSignal;
  }
  removeProductFromCart(productId: number){
    this.selectedProductSignal.update((products) =>
      products.filter(product => product.id !== productId)
    );
  }
}
