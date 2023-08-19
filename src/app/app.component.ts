import { Component } from '@angular/core';
import { IProduct } from './core/models/product';
import { products as data } from './core/data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: IProduct[] = data;
}
