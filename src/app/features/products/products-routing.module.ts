import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductAboutPageComponent } from './pages/product-about-page/product-about-page.component';
import { ProductManagementPageComponent } from './pages/product-management-page/product-management-page.component';

const routes: Routes = [
  { path: 'products/list', component: ProductListPageComponent },
  { path: 'products/about', component: ProductAboutPageComponent },
  { path: 'products/management', component: ProductManagementPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
