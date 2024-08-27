import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product', loadChildren: () => import('./products/features/product-shell/product.route'),
  },
  { path: '',   redirectTo: '/product', pathMatch: 'full' },
  { path: '**', loadComponent: () => import('./core/components/page-not-found/page-not-found.component') },
];
