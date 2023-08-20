import { Component, OnInit } from '@angular/core';
import { IProduct } from './core/models/product';
import { ProductsService } from './shared/services/products.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading: boolean = true;
  products$: Observable<IProduct[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
  }
}
