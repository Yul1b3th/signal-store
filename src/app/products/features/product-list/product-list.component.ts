import { Component, inject } from '@angular/core';

import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product } from '../../../shared/interfaces/product.interface';
import { ProductsSateService } from '../../data-access/products-state.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsSateService]
})
export default class ProductListComponent {
  productsState = inject(ProductsSateService);
  cartState = inject(CartStateService).state;

  changePage() {
    const page = this.productsState.state.page() + 1;
    this.productsState.changePage$.next(page);
  }

  addToCart(product: Product) {
    this.cartState.add({
      product,
      quantity: 1,
    });
  }
}


