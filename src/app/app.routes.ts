import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product', loadChildren: () => import('./products/features/product-shell/product.route'),
  },
  { path: 'cart', loadChildren: () => import('./cart/cart.route') },
  { path: '',   redirectTo: '/product', pathMatch: 'full' },
  { path: '**', loadComponent: () => import('./core/components/page-not-found/page-not-found.component') },
];
