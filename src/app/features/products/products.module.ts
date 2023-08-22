import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './components/create-product/create-product.component';

@NgModule({
  declarations: [
    ProductComponent,
    FilterProductsComponent,
    CreateProductComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [ProductComponent, FilterProductsComponent, CreateProductComponent],
})
export class ProductsModule {}
