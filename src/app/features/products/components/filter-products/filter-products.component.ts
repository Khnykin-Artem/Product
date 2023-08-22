import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent {
  productTitle: string = '';
  @Output() private onChangeProductTitle = new EventEmitter<string>();

  onChangeInput(value: string) {
    this.productTitle = value;
    this.onChangeProductTitle.emit(this.productTitle);
  }
}
