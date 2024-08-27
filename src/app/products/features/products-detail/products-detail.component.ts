import { Component, effect, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [],
  templateUrl: './products-detail.component.html',
  styles: ``
})
export default class ProductsDetailComponent {
  private activeRoute = inject(ActivatedRoute)

  constructor() {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
    });
  }


}
