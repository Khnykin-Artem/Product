import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProductsService } from './services/products.service';
import { ErrorService } from './services/error.service';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { FocusDirective } from './directives/focus.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    FocusDirective,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    HeaderComponent,
    LoaderComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    FocusDirective
  ],
  providers: [ProductsService, ErrorService],
})
export class SharedModule {}
