import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProductComponent],
})
export class ProductsModule {}
