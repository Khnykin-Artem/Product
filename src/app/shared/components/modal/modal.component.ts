import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title?: string;
  @Input() size?: string;

  @Output() closeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  close(): void {
    this.elementRef.nativeElement.remove();
    this.closeEvent.emit();
  }

  confirm(): void {
    this.elementRef.nativeElement.remove();
    this.confirmEvent.emit();
  }
}
