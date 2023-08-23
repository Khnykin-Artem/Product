import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isVisible$ = new BehaviorSubject<boolean>(false);

  open() {
    this.isVisible$.next(true);
  }

  close($event?: MouseEvent) {
    if (!$event) return this.isVisible$.next(false);
    const target = $event.target as HTMLElement;
    if (!target.closest('.modal__content')) return this.isVisible$.next(false);
  }
}
