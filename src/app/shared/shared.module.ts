import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProductsService } from './services/products.service';
import { ErrorService } from './services/error.service';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    HeaderComponent,
    LoaderComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
  ],
  providers: [ProductsService, ErrorService],
})
export class SharedModule {}
