import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [HeaderComponent, LoaderComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [HeaderComponent, LoaderComponent],
  providers: [ProductsService],
})
export class SharedModule {}
