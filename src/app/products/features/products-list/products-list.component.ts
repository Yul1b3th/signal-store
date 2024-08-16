import { Component, inject } from '@angular/core';

import { ProductStateService } from '../../data-access/product-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styles: ``,
  providers: [ProductStateService]
})
export default class ProductsListComponent {
  productState = inject(ProductStateService);

  changePage() {
    const page = this.productState.state.page() + 1;
    this.productState.changePage$.next(page);
  }
}

