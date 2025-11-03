//Day4 Task
import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { NotFound } from './not-found/not-found';
import { authGuardGuard } from './auth-guard-guard';
import { ProductCart } from './product-cart/product-cart';
import { FavoriteProduct } from './favorite-product/favorite-product';

export const routes: Routes = [
  {path: '', redirectTo: 'ProductList', pathMatch: 'full'},
  {path: 'ProductList', component: ProductList, canActivate: [authGuardGuard]},
  {path: 'ProductDetails/:id', component: ProductDetails},
  {path: 'ProductCart', component: ProductCart},
  {path: 'FavoriteProduct', component: FavoriteProduct},
  {path: 'login', loadComponent: () => import('./login/login').then(m => m.Login)},
  { path: '**', component: NotFound }
];
