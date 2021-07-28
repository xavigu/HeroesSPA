import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[upperCase]'
})
export class UppercaseDirective {
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  value: any;

  @HostListener('input', ['$event']) onInput($event) {
    this.value = $event.target.value.toUpperCase();
    this.ngModelChange.emit(this.value);
 }
  constructor(private elRef: ElementRef) { }
}
