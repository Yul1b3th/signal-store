import { Routes } from '@angular/router';

export default [
  { path: '', loadComponent: () => import('../products-list/products-list.component') },
  {
    path: ':id',
    loadComponent: () => import('../products-detail/products-detail.component'),
  }
] as Routes;
