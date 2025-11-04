import { HttpClient } from '@angular/common/http';
import { Iproduct } from './iproduct';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Products {
  selectedProductSignal = signal<Iproduct[]>([]);
  favProductSignal = signal<Iproduct[]>([]);
  //Day 5
  http = inject(HttpClient);
  router=inject(Router);
  getAllProduct(){
    return this.http.get<Iproduct[]>('https://dummyjson.com/products?limit=10&skip=20')
  }
  getProductById(id: number):any {
    return this.http.get<Iproduct>(`https://dummyjson.com/products/${id}`)
  }
  /////////////
  getAllUsers(username: string, password: string){
    this.http.get<any>(`https://dummyjson.com/users`).subscribe({
      next: (res) => {
        const users = res.users;
        const user = users.find((u: any)=>{
          u.username === username && u.password === password
        });
        if (user) {
          localStorage.setItem('auth', JSON.stringify({ auth: true }));
          this.router.navigate(['/']);
        } else {
          alert ('Invalid UserName or Password')
        }
      }
    })
  }
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
