import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent {
  term: string = '';
  @Output() private onFormGroupChange = new EventEmitter<any>();
}
