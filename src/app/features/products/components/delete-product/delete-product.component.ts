import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent {
  form: FormGroup = new FormGroup({
    id: new FormControl<number>(0, [Validators.required]),
  });

  constructor(private productsService: ProductsService, private modalService: ModalService) {}

  submit() {
    this.productsService.delete(this.form.value.id)
    .subscribe(() => this.modalService.confirmModal());
  }

  get id() {
    return this.form.controls.id as FormControl;
  }
}
