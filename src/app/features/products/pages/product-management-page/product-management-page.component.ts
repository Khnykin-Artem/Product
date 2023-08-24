import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../../core/models/product';
import { ProductsService } from '../../../../features/products/services/products.service';
import { Observable } from 'rxjs';
import { ModalService } from '../../../../shared/services/modal.service';

@Component({
  selector: 'app-product-management-page',
  templateUrl: './product-management-page.component.html',
  styleUrls: ['./product-management-page.component.scss'],
})
export class ProductManagementPageComponent implements OnInit {
  loading: boolean = true;
  products$: Observable<IProduct[]>;
  productTitle: string = '';

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.productsService.getAll().subscribe(() => (this.loading = false));
  }

  getProductTitle($event: string) {
    this.productTitle = $event;
  }
}
