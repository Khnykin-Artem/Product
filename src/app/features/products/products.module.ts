import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductAboutPageComponent } from './pages/product-about-page/product-about-page.component';
import { ProductManagementPageComponent } from './pages/product-management-page/product-management-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { DeleteProductComponent } from './components//delete-product/delete-product.component';

@NgModule({
  declarations: [
    ProductComponent,
    FilterProductsComponent,
    CreateProductComponent,
    ProductListPageComponent,
    ProductAboutPageComponent,
    ProductManagementPageComponent,
    DeleteProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
  ],
})
export class ProductsModule {}
