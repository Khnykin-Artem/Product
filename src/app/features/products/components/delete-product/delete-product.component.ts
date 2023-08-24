import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent {
  form: FormGroup = new FormGroup({
    id: new FormControl<number>(0, [Validators.required]),
  });

  constructor(private productsService: ProductsService) {}

  submit() {}
}
