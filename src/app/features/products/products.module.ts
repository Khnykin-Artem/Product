import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductComponent, FilterProductsComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [ProductComponent, FilterProductsComponent],
})
export class ProductsModule {}
