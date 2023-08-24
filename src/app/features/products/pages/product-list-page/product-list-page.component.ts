import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../../core/models/product';
import { ProductsService } from '../../../../features/products/services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
})
export class ProductListPageComponent implements OnInit {
  loading: boolean = true;
  products$: Observable<IProduct[]>;
  productTitle: string = '';

  constructor(
    public productsService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.productsService.getAll().subscribe(() => (this.loading = false));
  }

  getProductTitle($event: string) {
    this.productTitle = $event;
  }
}
