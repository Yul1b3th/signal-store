import { Component, effect, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';
import { CommonModule } from '@angular/common';
import { CartStateService } from '../../../shared/data-access/cart-state.service';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductDetailStateService],
})
export default class ProductDetailComponent {
  // private activeRoute = inject(ActivatedRoute)

  // constructor() {
  //   this.activeRoute.params.subscribe(params => {
  //     console.log(params);
  //   });
  // }

  productDetailState = inject(ProductDetailStateService).state;
  cartState = inject(CartStateService).state;

  // Input Signal
  yuli = input.required<string>();

  constructor() {
    effect(() => {
      console.log(this.yuli());
      this.productDetailState.getById(this.yuli());
    });
  }

  addToCart() {
    this.cartState.add({
      product: this.productDetailState.product()!,
      quantity: 1,
    });
  }
}

