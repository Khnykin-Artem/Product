import {
  Injectable,
  TemplateRef,
  ComponentFactoryResolver,
  Injector,
  Inject,
} from '@angular/core';
import { IModalOptions } from '../../core/models/modalOptions';
import { ModalComponent } from '../components/modal/modal.component';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalNotifier?: Subject<string>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  openModal(content: TemplateRef<any>, options?: IModalOptions) {
    const modalComponentFactory =
      this.resolver.resolveComponentFactory(ModalComponent);
    const contentViewRef = content.createEmbeddedView(null);
    const modalComponent = modalComponentFactory.create(this.injector, [
      contentViewRef.rootNodes,
    ]);

    modalComponent.instance.size = options?.size;
    modalComponent.instance.title = options?.title;

    modalComponent.instance.closeEvent.subscribe(() => this.closeModal());
    modalComponent.instance.confirmEvent.subscribe(() => this.confirmModal());

    modalComponent.hostView.detectChanges();

    this.document.body.appendChild(modalComponent.location.nativeElement);
    this.modalNotifier = new Subject();

    return this.modalNotifier?.asObservable();
  }

  closeModal() {
    this.modalNotifier?.complete();
  }

  confirmModal() {
    this.modalNotifier?.next('confirm');
    this.closeModal();
  }
}
