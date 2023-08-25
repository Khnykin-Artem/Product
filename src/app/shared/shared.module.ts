import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorService } from './services/error.service';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FilterProductsPipe } from '../features/products/pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { FocusDirective } from './directives/focus.directive';
import { ModalService } from './services/modal.service';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    FocusDirective,
    FooterComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    HeaderComponent,
    LoaderComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    FocusDirective,
    FooterComponent,
    ButtonComponent,
    FocusDirective
  ],
  providers: [ErrorService, ModalService],
})
export class SharedModule {}
