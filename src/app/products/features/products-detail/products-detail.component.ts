import { Component, effect, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-detail.component.html',
  styles: ``,
  providers: [ProductDetailStateService],
})
export default class ProductsDetailComponent {
  // private activeRoute = inject(ActivatedRoute)

  // constructor() {
  //   this.activeRoute.params.subscribe(params => {
  //     console.log(params);
  //   });
  // }

  productDetailStateService = inject(ProductDetailStateService).state;

  // Input Signal
  yuli = input.required<string>();

  constructor() {
    effect(() => {
      console.log(this.yuli());
      this.productDetailStateService.getById(this.yuli());
    });
  }
}
